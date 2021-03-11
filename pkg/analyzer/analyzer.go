package analyzer

import (
  "github.com/develar/errors"
  "github.com/mcuadros/go-version"
  "github.com/valyala/fastjson"
  "strings"
)

type CustomReportAnalyzer func(runResult *RunResult, data *fastjson.Value) error
type InsertStatementWriter func(sb *strings.Builder)

type DatabaseConfiguration struct {
  ReportReader          CustomReportAnalyzer
  insertStatementWriter InsertStatementWriter

  hasProductField bool
  extraFieldCount int
}

func GetAnalyzer(dbName string) DatabaseConfiguration {
  if dbName == "ij" {
    return DatabaseConfiguration{
      hasProductField: true,
      extraFieldCount: len(IjMetricDescriptors),
      ReportReader: analyzeIJReport,
      insertStatementWriter: func(sb *strings.Builder) {
        for _, metric := range IjMetricDescriptors {
          sb.WriteRune(',')
          sb.WriteString(metric.Name)
        }
      },
    }
  } else if dbName == "sharedIndexes" {
    return DatabaseConfiguration{
      ReportReader: analyzeSharedIndexesReport,
      extraFieldCount: 2,
      insertStatementWriter: func(sb *strings.Builder) {
        sb.WriteString(", measures.name, measures.value")
      },
    }
  } else if dbName == "fleet" {
    return DatabaseConfiguration{
      ReportReader: analyzeFleetReport,
      extraFieldCount: 4,
      insertStatementWriter: func(sb *strings.Builder) {
        sb.WriteString(", measures.name, measures.value, measures.start, measures.thread")
      },
    }

  } else {
    panic("unknown db: " + dbName)
  }
}

func analyzeSharedIndexesReport(runResult *RunResult, data *fastjson.Value) error {
  measureNames := make([]string, 0)
  measureValues := make([]int, 0)
  for _, measure := range data.GetArray("metrics") {
    measureName := string(measure.GetStringBytes("n"))

    // in milliseconds
    value := measure.Get("d")
    if value == nil {
      value = measure.Get("c")
      if value == nil {
        return nil
      }
    }

    floatValue := value.GetFloat64()
    intValue := int(floatValue)
    if floatValue != float64(intValue) {
      return errors.WithMessagef(nil, "int expected, but got float %f", floatValue)
    }

    measureNames = append(measureNames, measureName)
    measureValues = append(measureValues, intValue)
  }

  if len(measureNames) == 0 {
    return nil
  }

  runResult.extraFieldData = []interface{}{measureNames, measureValues}
  return nil
}

func analyzeFleetReport(runResult *RunResult, data *fastjson.Value) error {
  names := make([]string, 0)
  values := make([]int, 0)
  starts := make([]int, 0)
  threads := make([]string, 0)
  items := data.GetArray("items")
  if items != nil {
    for _, measure := range items {
      name := string(measure.GetStringBytes("name"))
      // in milliseconds
      names = append(names, name)
      values = append(values, measure.GetInt("duration"))
      starts = append(starts, measure.GetInt("start"))
      threads = append(threads, string(measure.GetStringBytes("thread")))
    }
  }

  activities := data.GetArray("prepareAppInitActivities")

  mapNameV22 := version.Compare(runResult.Report.Version, "22", "<=")
  if activities != nil {
    for _, measure := range activities {
      name := string(measure.GetStringBytes("n"))

      if mapNameV22 {
        if name == "create window" {
          name = "render window"
        } else if name == "render" {
          name = "render real panels"
        }
      }

      // in milliseconds
      names = append(names, name)
      values = append(values, measure.GetInt("d"))
      starts = append(starts, measure.GetInt("s"))
      threads = append(threads, string(measure.GetStringBytes("t")))
    }
  }

  if len(names) == 0 {
    return nil
  }

  runResult.extraFieldData = []interface{}{names, values, starts, threads}
  return nil
}