import { MenuItem } from "primevue/menuitem"
import { ParentRouteRecord } from "shared/src/route"
import Report from "./Report.vue"

export function getReportVisualizerItems(): Array<MenuItem> {
  return [
    {
      label: "Report Analyzer",
      to: "/report"
    },
  ]
}

export function getReportVisualizerRoutes(): Array<ParentRouteRecord> {
  return [
    {
      children: [
        {
          path: "/report",
          component: () => Report,
          meta: {pageTitle: "Report Analyzer"},
        },
      ],
    },
  ]
}
