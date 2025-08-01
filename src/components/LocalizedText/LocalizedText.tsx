import React from "react";

const LocalizedText: React.FC<LocalizedProps & { className?: string; sx?: any }> = ({
  t = "",
  className = "",
  title,
  ...props
}) => {
  return (
    <span className={className} title={title || t} {...props}>
      {t || title}
    </span>
  );
};

export { LocalizedText };
