import React from "react";
import NextLink from "next/link";
import { regex } from "<@>/util/regex";
import { LocalizedText } from "../LocalizedText/LocalizedText";
import { Link as MuiLink } from "@mui/material";

export const LocalizedLink: React.FC<Link> = ({
  href,
  t,
  values,
  components,
  onClick,
  children,
  ...props
}) => {
  const appRoute = href?.substring(0, 1) === "/";
  const internalUrl = href && href.substring(0, 1) === "/" ? href : null;
  const externalUrl =
    href && !appRoute && !regex.containsHttp.test(href)
      ? `https://${href}`
      : href;
  return (
    <MuiLink
      component={NextLink}
      href={internalUrl || externalUrl || "!#"}
      onClick={(e) => {
        if (!href || href.length === 0 || href === "!#") e.preventDefault();
        onClick?.(e);
      }}
      {...props}
    >
      {children}
      <LocalizedText text={t} values={values} components={components} />
    </MuiLink>
  );
};
