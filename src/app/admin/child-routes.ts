export const childRoutes = [
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
    data: { icon: "dashboard", text: "Dashboard" },
  },
  {
    path: "tables",
    loadChildren: () =>
      import("./tables/tables.module").then((m) => m.TablesModule),
    data: { icon: "table_chart", text: "Users" },
  },
  {
    path: "forms",
    loadChildren: () =>
      import("./blogs/forms.module").then((m) => m.FormsModule),
    data: { icon: "assignment", text: "Blogs" },
  },
];
