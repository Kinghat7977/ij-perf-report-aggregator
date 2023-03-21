import { ParentRouteRecord } from "shared/src/route"

export interface NavigationItem {
  path: string
  name: string
  key?: string
}

const enum ROUTE_PREFIX {
  Startup = "/ij",
  IntelliJ = "/intellij",
  IntelliJBuildTools = "/intellij/buildTools",
  IntelliJSharedIndices = "/intellij/sharedIndices",
  IntelliJUltimate = "/intellij/ultimate",
  IntelliJPackageChecker = "/intellij/packageChecker",
  PhpStorm = "/phpstorm",
  GoLand = "/goland",
  RubyMine = "/rubymine",
  Kotlin = "/kotlin",
  Rust = "/rust",
  Scala = "/scala",
  JBR = "/jbr",
  Fleet = "/fleet",
}

const ROUTES = {
  StartupPulse: `${ROUTE_PREFIX.Startup}/pulse`,
  StartupProgress: `${ROUTE_PREFIX.Startup}/progressOverTime`,
  StartupModuleLoading: `${ROUTE_PREFIX.Startup}/moduleLoading`,
  StartupExplore: `${ROUTE_PREFIX.Startup}/explore`,
  StartupReport: `${ROUTE_PREFIX.Startup}/report`,

  IntelliJDashboard: `${ROUTE_PREFIX.IntelliJ}/dashboard`,
  IntelliJDevDashboard: `${ROUTE_PREFIX.IntelliJ}/devDashboard`,
  IntelliJTests: `${ROUTE_PREFIX.IntelliJ}/tests`,
  IntelliJDevTests: `${ROUTE_PREFIX.IntelliJ}/devTests`,
  IntelliJCompare: `${ROUTE_PREFIX.IntelliJ}/compare`,

  IntelliJGradleDashboard: `${ROUTE_PREFIX.IntelliJBuildTools}/gradleDashboard`,
  IntelliJMavenDashboard: `${ROUTE_PREFIX.IntelliJBuildTools}/mavenDashboard`,
  IntelliJBuildTests: `${ROUTE_PREFIX.IntelliJBuildTools}/tests`,

  IntelliJUltimateDashboard: `${ROUTE_PREFIX.IntelliJUltimate}/dashboard`,
  IntelliJUltimateTests: `${ROUTE_PREFIX.IntelliJUltimate}/tests`,

  IntelliJSharedIndicesDashboard: `${ROUTE_PREFIX.IntelliJSharedIndices}/dashboard`,
  IntelliJSharedIndicesTests: `${ROUTE_PREFIX.IntelliJSharedIndices}/tests`,

  IntelliJPackageCheckerDashboard: `${ROUTE_PREFIX.IntelliJPackageChecker}/dashboard`,
  IntelliJPackageCheckerTests: `${ROUTE_PREFIX.IntelliJPackageChecker}/tests`,

  PhpStormDashboard: `${ROUTE_PREFIX.PhpStorm}/dashboard`,
  PhpStormWithPluginsDashboard: `${ROUTE_PREFIX.PhpStorm}/pluginsDashboard`,
  PhpStormTests: `${ROUTE_PREFIX.PhpStorm}/tests`,
  PhpStormWithPluginsTests: `${ROUTE_PREFIX.PhpStorm}/testsWithPlugins`,
  PhpStormCompare: `${ROUTE_PREFIX.PhpStorm}/compare`,

  KotlinDashboard: `${ROUTE_PREFIX.Kotlin}/dashboard`,
  KotlinDashboardDev: `${ROUTE_PREFIX.Kotlin}/dashboardDev`,
  KotlinExplore: `${ROUTE_PREFIX.Kotlin}/explore`,
  KotlinExploreDev: `${ROUTE_PREFIX.Kotlin}/exploreDev`,
  KotlinCompletionDev: `${ROUTE_PREFIX.Kotlin}/completionDev`,
  KotlinHighlightingDev: `${ROUTE_PREFIX.Kotlin}/highlightingDev`,
  KotlinFindUsagesDev: `${ROUTE_PREFIX.Kotlin}/findUsagesDev`,
  KotlinCompare: `${ROUTE_PREFIX.Kotlin}/compare`,

  GoLandDashboard: `${ROUTE_PREFIX.GoLand}/dashboard`,
  GoLandTests: `${ROUTE_PREFIX.GoLand}/tests`,
  GoLandCompare: `${ROUTE_PREFIX.GoLand}/compare`,

  RubyMineDashboard: `${ROUTE_PREFIX.RubyMine}/dashboard`,
  RubyMineTests: `${ROUTE_PREFIX.RubyMine}/tests`,
  RubyMineCompare: `${ROUTE_PREFIX.RubyMine}/compare`,

  RustTests: `${ROUTE_PREFIX.Rust}/tests`,
  RustCompare: `${ROUTE_PREFIX.Rust}/compare`,
  ScalaTests: `${ROUTE_PREFIX.Scala}/tests`,
  ScalaCompare: `${ROUTE_PREFIX.Scala}/compare`,

  JBRTests: `${ROUTE_PREFIX.JBR}/tests`,
  MapBenchDashboard: `${ROUTE_PREFIX.JBR}/mapbenchDashboard`,
  DaCapoDashboard: `${ROUTE_PREFIX.JBR}/dacapoDashboard`,
  J2DBenchDashboard: `${ROUTE_PREFIX.JBR}/j2dDashboard`,
  JavaDrawDashboard: `${ROUTE_PREFIX.JBR}/javaDrawDashboard`,
  RenderDashboard: `${ROUTE_PREFIX.JBR}/renderDashboard`,

  FleetTest: `${ROUTE_PREFIX.Fleet}/tests`,
  FleetPerfDashboard: `${ROUTE_PREFIX.Fleet}/perfDashboard`,
  FleetStartupDashboard: `${ROUTE_PREFIX.Fleet}/startupDashboard`,
}

export const intellijSubNavigationItems: NavigationItem[] = [
  {
    path: ROUTES.IntelliJDashboard,
    name: "Primary Functionality",
    key: ROUTE_PREFIX.IntelliJ,
  },
  {
    path: ROUTES.IntelliJGradleDashboard,
    name: "Build Tools",
    key: ROUTE_PREFIX.IntelliJBuildTools,
  },
  {
    path: ROUTES.IntelliJUltimateDashboard,
    name: "Ultimate",
    key: ROUTE_PREFIX.IntelliJUltimate,
  },
  {
    path: ROUTES.IntelliJSharedIndicesDashboard,
    name: "Shared Indices",
    key: ROUTE_PREFIX.IntelliJSharedIndices,
  },
  {
    path: ROUTES.IntelliJPackageCheckerDashboard,
    name: "Package Checker",
    key: ROUTE_PREFIX.IntelliJPackageChecker,
  }
]

export const topNavigationItems: NavigationItem[] = [
  {
    path: ROUTES.StartupPulse,
    name: "IntelliJ Startup",
    key: ROUTE_PREFIX.Startup,
  },
  {
    path: ROUTES.IntelliJDashboard,
    name: "IDEA",
    key: ROUTE_PREFIX.IntelliJ,
  },
  {
    path: ROUTES.PhpStormDashboard,
    name: "PhpStorm",
    key: ROUTE_PREFIX.PhpStorm,
  },
  {
    path: ROUTES.KotlinDashboard,
    name: "Kotlin",
    key: ROUTE_PREFIX.Kotlin,
  },
  {
    path: ROUTES.GoLandDashboard,
    name: "GoLand",
    key: ROUTE_PREFIX.GoLand,
  },
  {
    path: ROUTES.RubyMineDashboard,
    name: "RubyMine",
    key: ROUTE_PREFIX.RubyMine,
  },
  {
    path: ROUTES.JBRTests,
    name: "JBR",
    key: ROUTE_PREFIX.JBR,
  },
  {
    path: ROUTES.FleetStartupDashboard,
    name: "Fleet",
    key: ROUTE_PREFIX.Fleet,
  },
  {
    path: ROUTES.RustTests,
    name: "Rust",
    key: ROUTE_PREFIX.Rust,
  },
  {
    path: ROUTES.ScalaTests,
    name: "Scala",
    key: ROUTE_PREFIX.Scala,
  }
]
export const startupTabNavigationItems: NavigationItem[] = [
  {
    path: ROUTES.StartupPulse,
    name: "Pulse",
  },
  {
    path: ROUTES.StartupProgress,
    name: "Progress Over Time",
  },
  {
    path: ROUTES.StartupModuleLoading,
    name: "Module Loading",
  },
  {
    path: ROUTES.StartupExplore,
    name: "Explore",
  },
  {
    path: ROUTES.StartupReport,
    name: "Report",
  },
]

export const intelliJTabNavigationItems: NavigationItem[] = [
  {
    path: ROUTES.IntelliJDashboard,
    name: "Dashboard",
  },
  {
    path: ROUTES.IntelliJDevDashboard,
    name: "Dashboard (Fast Installer)",
  },
  {
    path: ROUTES.IntelliJTests,
    name: "Tests",
  },
  {
    path: ROUTES.IntelliJDevTests,
    name: "Tests (Fast Installer)",
  },
  {
    path: ROUTES.IntelliJCompare,
    name: "Compare Builds",
  },
]
export const intelliJSharedIndicesTabNavigationItems: NavigationItem[] = [
  {
    path: ROUTES.IntelliJSharedIndicesDashboard,
    name: "Dashboard",
  },
  {
    path: ROUTES.IntelliJSharedIndicesTests,
    name: "Tests",
  },
]

export const intelliJBuildToolsTabNavigationItems: NavigationItem[] = [
  {
    path: ROUTES.IntelliJGradleDashboard,
    name: "Gradle Import",
  },
  {
    path: ROUTES.IntelliJMavenDashboard,
    name: "Maven Import",
  },
  {
    path: ROUTES.IntelliJBuildTests,
    name: "Tests",
  },
]

export const intelliJUltimateTabNavigationItems: NavigationItem[] = [
  {
    path: ROUTES.IntelliJUltimateDashboard,
    name: "Dashboard",
  },
  {
    path: ROUTES.IntelliJBuildTests,
    name: "Tests",
  },
]

export const intelliJPackageCheckerTabNavigationItems: NavigationItem[] = [
  {
    path: ROUTES.IntelliJPackageCheckerDashboard,
    name: "Dashboard",
  },
  {
    path: ROUTES.IntelliJPackageCheckerTests,
    name: "Tests",
  },
]

export const phpStormNavigationItems: NavigationItem[] = [
  {
    path: ROUTES.PhpStormDashboard,
    name: "Dashboard",
  },
  {
    path: ROUTES.PhpStormTests,
    name: "Tests",
  },
  {
    path: ROUTES.PhpStormCompare,
    name: "Compare Builds",
  },
  {
    path: ROUTES.PhpStormWithPluginsDashboard,
    name: "Dashboard with Plugins",
  },
  {
    path: ROUTES.PhpStormWithPluginsTests,
    name: "Tests with Plugins",
  },
]

export const GoLandNavigationItems: NavigationItem[] = [
  {
    path: ROUTES.GoLandDashboard,
    name: "Dashboard",
  },
  {
    path: ROUTES.GoLandTests,
    name: "Tests",
  },
  {
    path: ROUTES.GoLandCompare,
    name: "Compare Builds",
  },
]

export const RubyMineNavigationItems: NavigationItem[] = [
  {
    path: ROUTES.RubyMineDashboard,
    name: "Dashboard",
  },
  {
    path: ROUTES.RubyMineTests,
    name: "Tests",
  },
  {
    path: ROUTES.RubyMineCompare,
    name: "Compare Builds",
  },
]

export const kotlinNavigationItems: NavigationItem[] = [
  {
    path: ROUTES.KotlinDashboard,
    name: "Dashboard",
  },
  {
    path: ROUTES.KotlinExplore,
    name: "Tests",
  },
  {
    path: ROUTES.KotlinDashboardDev,
    name: "Dashboard (dev/fast installer)",
  },
  {
    path: ROUTES.KotlinExploreDev,
    name: "Explore (dev/fast installer)",
  },
  {
    path: ROUTES.KotlinCompletionDev,
    name: "Completion (dev)",
  },
  {
    path: ROUTES.KotlinHighlightingDev,
    name: "Highlighting (dev)",
  },
  {
    path: ROUTES.KotlinFindUsagesDev,
    name: "FindUsages (dev)",
  },
  {
    path: ROUTES.KotlinCompare,
    name: "Compare Builds",
  },
]

export const RustNavigationItems: NavigationItem[] = [
  {
    path: ROUTES.RustTests,
    name: "Tests",
  },
  {
    path: ROUTES.RustCompare,
    name: "Compare Builds",
  },
]

export const ScalaNavigationItems: NavigationItem[] = [
  {
    path: ROUTES.ScalaTests,
    name: "Tests",
  },
  {
    path: ROUTES.ScalaCompare,
    name: "Compare Builds",
  },
]

export const JBRNavigationItems: NavigationItem[] = [
  {
    path: ROUTES.DaCapoDashboard,
    name: "DaCapo",
  },
  {
    path: ROUTES.J2DBenchDashboard,
    name: "J2DBench",
  },
  {
    path: ROUTES.JavaDrawDashboard,
    name: "JavaDraw",
  },
  {
    path: ROUTES.RenderDashboard,
    name: "Render",
  },
  {
    path: ROUTES.MapBenchDashboard,
    name: "MapBench",
  },
  {
    path: ROUTES.JBRTests,
    name: "Tests",
  }
]

export const FleetNavigationItems: NavigationItem[] = [
  {
    path: ROUTES.FleetStartupDashboard,
    name: "Startup Dashboard",
  },
  {
    path: ROUTES.FleetPerfDashboard,
    name: "Performance Dashboard",
  },
  {
    path: ROUTES.FleetTest,
    name: "Tests",
  },
]

export function getNavigationTabs(path: string): NavigationItem[] {
  if (path.startsWith(ROUTE_PREFIX.IntelliJBuildTools)) {
    return intelliJBuildToolsTabNavigationItems
  }
  if (path.startsWith(ROUTE_PREFIX.IntelliJSharedIndices)) {
    return intelliJSharedIndicesTabNavigationItems
  }
  if (path.startsWith(ROUTE_PREFIX.IntelliJUltimate)) {
    return intelliJUltimateTabNavigationItems
  }
  if (path.startsWith(ROUTE_PREFIX.IntelliJPackageChecker)) {
    return intelliJPackageCheckerTabNavigationItems
  }
  if (path.startsWith(ROUTE_PREFIX.Startup)) {
    return startupTabNavigationItems
  }
  if (path.startsWith(ROUTE_PREFIX.IntelliJ)) {
    return intelliJTabNavigationItems
  }
  if (path.startsWith(ROUTE_PREFIX.PhpStorm)) {
    return phpStormNavigationItems
  }
  if (path.startsWith(ROUTE_PREFIX.Kotlin)) {
    return kotlinNavigationItems
  }
  if (path.startsWith(ROUTE_PREFIX.GoLand)) {
    return GoLandNavigationItems
  }
  if (path.startsWith(ROUTE_PREFIX.RubyMine)) {
    return RubyMineNavigationItems
  }
  if (path.startsWith(ROUTE_PREFIX.Rust)) {
    return RustNavigationItems
  }
  if (path.startsWith(ROUTE_PREFIX.Scala)) {
    return ScalaNavigationItems
  }
  if (path.startsWith(ROUTE_PREFIX.JBR)) {
    return JBRNavigationItems
  }
  if (path.startsWith(ROUTE_PREFIX.Fleet)) {
    return FleetNavigationItems
  }

  return []
}

export function getSubMenus(path: string): NavigationItem[] {
  if (path.startsWith(ROUTE_PREFIX.IntelliJ)) {
    return intellijSubNavigationItems
  }
  return []
}

export function getNewDashboardRoutes(): Array<ParentRouteRecord> {
  return [
    {
      children: [
        {
          path: ROUTES.StartupPulse,
          component: () => import("./components/startup/IntelliJPulse.vue"),
          meta: {pageTitle: "Pulse"},
        },
        {
          path: ROUTES.StartupProgress,
          component: () => import("./components/startup/IntelliJProgressOverTime.vue"),
          meta: {pageTitle: "Progress Over Time"},
        },
        {
          path: ROUTES.StartupModuleLoading,
          component: () => import("./components/startup/IntelliJModuleLoading.vue"),
          meta: {pageTitle: "Module Loading"},
        },
        {
          path: ROUTES.StartupExplore,
          component: () => import("./components/startup/IntelliJExplore.vue"),
          meta: {pageTitle: "Explore"},
        },
        {
          path: ROUTES.StartupReport,
          component: () => import("../../report-visualizer/src/Report.vue"),
          meta: {pageTitle: "Startup Report"},
        },
        {
          path: ROUTES.IntelliJDashboard,
          component: () => import("./components/intelliJ/PerformanceDashboard.vue"),
          meta: {pageTitle: "IntelliJ Performance dashboard"},
        },
        {
          path: ROUTES.IntelliJGradleDashboard,
          component: () => import("./components/intelliJ/GradleImportPerformanceDashboard.vue"),
          meta: {pageTitle: "Gradle Import dashboard"},
        },
        {
          path: ROUTES.IntelliJMavenDashboard,
          component: () => import("./components/intelliJ/MavenImportPerformanceDashboard.vue"),
          meta: {pageTitle: "Maven Import dashboard"},
        },
        {
          path: ROUTES.IntelliJUltimateDashboard,
          component: () => import("./components/intelliJ/UltimateProjectsDashboard.vue"),
          meta: {pageTitle: "Ultimate Projects"},
        },
        {
          path: ROUTES.IntelliJPackageCheckerDashboard,
          component: () => import("./components/intelliJ/PackageCheckerDashboard.vue"),
          meta: {pageTitle: "Package Checker"},
        },
        {
          path: ROUTES.IntelliJDevDashboard,
          component: () => import("./components/intelliJ/PerformanceDevDashboard.vue"),
          meta: {pageTitle: "IntelliJ Performance dashboard Fast Installer"},
        },
        {
          path: ROUTES.IntelliJSharedIndicesDashboard,
          component: () => import("./components/intelliJ/SharedIndicesPerformanceDashboard.vue"),
          meta: {pageTitle: "IntelliJ Integration Performance Tests For Shared Indices Dashboard"},
        },
        {
          path: `${ROUTE_PREFIX.IntelliJ}/:subproject?/tests`,
          component: () => import("./components/intelliJ/PerformanceTests.vue"),
          meta: {pageTitle: "IntelliJ Performance tests"},
        },
        {
          path: ROUTES.IntelliJDevTests,
          component: () => import("./components/intelliJ/PerformanceTestsDev.vue"),
          meta: {pageTitle: "IntelliJ Integration Performance Tests On Fast Installer"},
        },
        {
          path: ROUTES.IntelliJSharedIndicesTests,
          component: () => import("./components/intelliJ/SharedIndicesTests.vue"),
          meta: {pageTitle: "IntelliJ Integration Performance Tests For Shared Indices"},
        },
        {
          path: ROUTES.IntelliJCompare,
          component: () => import("./components/common/CompareBuilds.vue"),
          props: {
            dbName: "perfint",
            table: "idea"
          },
          meta: {pageTitle: "Compare Builds"},
        },
        {
          path: ROUTES.PhpStormDashboard,
          component: () => import("./components/phpstorm/PerformanceDashboard.vue"),
          meta: {pageTitle: "PhpStorm Performance dashboard"},
        },
        {
          path: ROUTES.PhpStormWithPluginsDashboard,
          component: () => import("./components/phpstorm/PerformanceDashboardWithPlugins.vue"),
          meta: {pageTitle: "PhpStorm With Plugins Performance dashboard"},
        },
        {
          path: ROUTES.PhpStormWithPluginsTests,
          component: () => import("./components/phpstorm/PerformanceTestsWithPlugins.vue"),
          meta: {pageTitle: "PhpStorm Performance tests with plugins"},
        },
        {
          path: ROUTES.PhpStormTests,
          component: () => import("./components/phpstorm/PerformanceTests.vue"),
          meta: {pageTitle: "PhpStorm Performance tests"},
        },
        {
          path: ROUTES.PhpStormCompare,
          component: () => import("./components/common/CompareBuilds.vue"),
          props: {
            dbName: "perfint",
            table: "phpstorm"
          },
          meta: {pageTitle: "Compare Builds"},
        },
        {
          path: ROUTES.GoLandDashboard,
          component: () => import("./components/goland/PerformanceDashboard.vue"),
          meta: {pageTitle: "GoLand Performance dashboard"},
        },
        {
          path: ROUTES.GoLandTests,
          component: () => import("./components/goland/PerformanceTests.vue"),
          meta: {pageTitle: "GoLand Performance tests"},
        },
        {
          path: ROUTES.GoLandCompare,
          component: () => import("./components/common/CompareBuilds.vue"),
          props: {
            dbName: "perfint",
            table: "goland"
          },
          meta: {pageTitle: "Compare Builds"},
        },
        {
          path: ROUTES.RubyMineDashboard,
          component: () => import("./components/rubymine/PerformanceDashboard.vue"),
          meta: {pageTitle: "RubyMine Performance dashboard"},
        },
        {
          path: ROUTES.RubyMineTests,
          component: () => import("./components/rubymine/PerformanceTests.vue"),
          meta: {pageTitle: "RubyMine Performance tests"},
        },
        {
          path: ROUTES.RubyMineCompare,
          component: () => import("./components/common/CompareBuilds.vue"),
          props: {
            dbName: "perfint",
            table: "ruby"
          },
          meta: {pageTitle: "Compare Builds"},
        },

        {
          path: ROUTES.KotlinExplore,
          component: () => import("./components/kotlin/KotlinExplore.vue"),
          meta: {pageTitle: "Kotlin Performance tests explore"},
        },
        {
          path: ROUTES.KotlinExploreDev,
          component: () => import("./components/kotlin/dev/KotlinDevExplore.vue"),
          meta: {pageTitle: "Kotlin Performance tests explore (dev/fast installer)"},
        },
        {
          path: ROUTES.KotlinDashboard,
          component: () => import("./components/kotlin/PerformanceDashboard.vue"),
          meta: {pageTitle: "Kotlin Performance dashboard"},
        },
        {
          path: ROUTES.KotlinDashboardDev,
          component: () => import("./components/kotlin/dev/PerformanceDevDashboard.vue"),
          meta: {pageTitle: "Kotlin Performance dashboard (dev/fast installer)"},
        },
        {
          path: ROUTES.KotlinCompletionDev,
          component: () => import("./components/kotlin/dev/CompletionDashboard.vue"),
          meta: {pageTitle: "Kotlin completion (dev/fast)"},
        },
        {
          path: ROUTES.KotlinHighlightingDev,
          component: () => import("./components/kotlin/dev/HighlightingDashboard.vue"),
          meta: {pageTitle: "Kotlin highlighting (dev/fast)"},
        },
        {
          path: ROUTES.KotlinFindUsagesDev,
          component: () => import("./components/kotlin/dev/FindUsagesDashboard.vue"),
          meta: {pageTitle: "Kotlin findUsages (dev/fast)"},
        },
        {
          path: ROUTES.KotlinCompare,
          component: () => import("./components/common/CompareBuilds.vue"),
          props: {
            dbName: "perfint",
            table: "kotlin"
          },
          meta: {pageTitle: "Compare Builds"},
        },
        {
          path: ROUTES.RustTests,
          component: () => import("./components/rust/PerformanceTests.vue"),
          meta: {pageTitle: "Rust Performance tests"},
        },
        {
          path: ROUTES.RustCompare,
          component: () => import("./components/common/CompareBuilds.vue"),
          props: {
            dbName: "perfint",
            table: "rust"
          },
          meta: {pageTitle: "Compare Builds"},
        },
        {
          path: ROUTES.ScalaTests,
          component: () => import("./components/scala/PerformanceTests.vue"),
          meta: {pageTitle: "Scala Performance tests"},
        },
        {
          path: ROUTES.ScalaCompare,
          component: () => import("./components/common/CompareBuilds.vue"),
          props: {
            dbName: "perfint",
            table: "scala"
          },
          meta: {pageTitle: "Compare Builds"},
        },
        {
          path: ROUTES.JBRTests,
          component: () => import("./components/jbr/PerformanceTests.vue"),
          meta: {pageTitle: "JBR Performance tests"},
        },
        {
          path: ROUTES.MapBenchDashboard,
          component: () => import("./components/jbr/MapBenchDashboard.vue"),
          meta: {pageTitle: "MapBench Dashboard"},
        },
        {
          path: ROUTES.DaCapoDashboard,
          component: () => import("./components/jbr/DaCapoDashboard.vue"),
          meta: {pageTitle: "DaCapo Dashboard"},
        },
        {
          path: ROUTES.J2DBenchDashboard,
          component: () => import("./components/jbr/J2DBenchDashboard.vue"),
          meta: {pageTitle: "J2DBench Dashboard"},
        },
        {
          path: ROUTES.JavaDrawDashboard,
          component: () => import("./components/jbr/JavaDrawDashboard.vue"),
          meta: {pageTitle: "JavaDraw Dashboard"},
        },
        {
          path: ROUTES.RenderDashboard,
          component: () => import("./components/jbr/RenderDashboard.vue"),
          meta: {pageTitle: "Render Dashboard"},
        },
        {
          path: ROUTES.FleetTest,
          component: () => import("./components/fleet/PerformanceTests.vue"),
          meta: {pageTitle: "Fleet Performance tests"},
        },
        {
          path: ROUTES.FleetPerfDashboard,
          component: () => import("./components/fleet/PerformanceDashboard.vue"),
          meta: {pageTitle: "Fleet Performance dashboard"},
        },
        {
          path: ROUTES.FleetStartupDashboard,
          component: () => import("./components/fleet/FleetDashboard.vue"),
          meta: {pageTitle: "Fleet Startup dashboard"},
        },
      ],
    },
  ]
}
