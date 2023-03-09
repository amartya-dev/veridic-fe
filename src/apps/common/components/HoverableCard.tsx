import React from "react";
import { Card, SxProps } from "@mui/material";

interface HoverableCardProps {
  children: React.ReactNode;
  onClick?: () => void;
  sx?: SxProps;
  onMouseEnter?: any;
  onMouseLeave?: any;
}

export function HoverableCard({
  children,
  onClick,
  sx,
  onMouseEnter,
  onMouseLeave,
}: HoverableCardProps) {
  return (
    <Card
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        cursor: "pointer",
        position: "relative",
        transition: "0.4s",
        borderRadius: "1rem",
        boxShadow: "0 8px 24px 0 rgba(0,0,0,0.12)",
        "&:hover": {
          transform: "translateY(-4px)",
          "& $shadow": {
            bottom: "-1.5rem",
          },
          "& $shadow2": {
            bottom: "-2.5rem",
          },
        },
        "&:before": {
          content: '""',
          position: "absolute",
          zIndex: 0,
          display: "block",
          width: "100%",
          bottom: -1,
          height: "100%",
          borderRadius: "1.5rem",
        },
        ...sx,
      }}
    >
      {children}
    </Card>
  );
}
