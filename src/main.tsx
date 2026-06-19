import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter, createHashHistory } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import "./styles.css"; // Импорт из текущей папки src

const queryClient = new QueryClient();

// Использование хэш-истории решает проблему с 404 на статических хостингах
const hashHistory = createHashHistory();

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  history: hashHistory,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);