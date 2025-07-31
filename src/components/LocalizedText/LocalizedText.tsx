import React from "react";

const LocalizedText: React.FC<LocalizedProps & { className?: string }> = ({
  t = "",
  className = "",
  title,
  ...props
}) => {
  return <span className={className} title={title && title} {...props}></span>;
};

export { LocalizedText };
