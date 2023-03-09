import React from "react";
// material
import { Box, SxProps, Theme } from "@mui/material";

// ----------------------------------------------------------------------

interface PropTypes {
  sx?: SxProps<Theme>;
}

export default function Logo({ sx }: PropTypes) {
  return (
    <Box
      component="img"
      src="logo.png"
      sx={{ width: 180, height: 60, ...sx }}
    />
  );
}
