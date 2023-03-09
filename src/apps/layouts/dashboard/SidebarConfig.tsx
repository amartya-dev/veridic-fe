import React from "react";
import { Icon, IconifyIcon } from "@iconify/react";
import layersFill from "@iconify/icons-eva/layers-fill";

// ----------------------------------------------------------------------

const getIcon = (name: IconifyIcon) => (
  <Icon icon={name} width={22} height={22} />
);

const sidebarConfig = [
  {
    title: "Posts",
    path: "/posts",
    children: [
      {
        title: "All Posts",
        path: "/posts/all",
      },
    ],
    icon: getIcon(layersFill),
  },
];

export default sidebarConfig;
