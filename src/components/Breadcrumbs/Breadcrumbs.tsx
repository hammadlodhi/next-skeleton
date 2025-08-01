"use client";

import React from "react";
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography, useTheme } from "@mui/material";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Breadcrumb[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = "" }) => {
  const theme = useTheme();

  return (
    <MUIBreadcrumbs
      aria-label="breadcrumb"
      className={className}
      separator=" / "
      sx={{
        fontSize: "0.9rem",
        color: theme.palette.text.secondary,
        mb: 2,
      }}
    >
      {items.map((item, index) =>
        item.href ? (
          <Link
            key={index}
            href={item.href}
            underline="hover"
            sx={{
              color: theme.palette.primary.main,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {item.label}
          </Link>
        ) : (
          <Typography key={index} color="text.primary">
            {item.label}
          </Typography>
        )
      )}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
