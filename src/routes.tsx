import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
// layouts
import LogoOnlyLayout from "apps/layouts/LogoOnlyLayout";
import DashboardLayout from "apps/layouts/dashboard";
//
import Page404 from "apps/common/features/Page404";
import { PostsList } from "apps/posts/features/PostList";
import { PostDetails } from "apps/posts/features/PostDetails";

// ----------------------------------------------------------------------

export default function Routes() {
  return useRoutes([
    {
      path: "/posts",
      element: <DashboardLayout />,
      children: [
        { path: "all", element: <PostsList /> },
        { path: ":id", element: <PostDetails /> },
      ],
    },
    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [
        { path: "404", element: <Page404 /> },
        { path: "/", element: <Navigate to="/posts/all" /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
  ]);
}
