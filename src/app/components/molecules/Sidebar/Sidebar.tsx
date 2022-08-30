import React from "react";

type Routes = {
  key: string;
  title: string;
  path: string;
  hide: boolean;
  subroutes?: Routes[];
};
const routes: Routes[] = [
  {
    key: "USER",
    title: "Usuários",
    path: "/users",
    hide: false,
    subroutes: [
      { key: "LIST", title: "Listagem de usuários", path: "/list", hide: true },
      {
        key: "CREATE",
        title: "Listagem de usuários",
        path: "/list",
        hide: true,
      },
      { key: "EDIT", title: "Listagem de usuários", path: "/list", hide: true },
    ],
  },
];

const Sidebar = () => <div></div>;

export default Sidebar;
