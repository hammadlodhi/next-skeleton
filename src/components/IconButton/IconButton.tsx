import classNames from "classnames";
import React from "react";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}
export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  type = "button",
  title,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames("icon-button", className)}
      title={title && title}
      type={type}
      {...props}
    >
      {icon}
    </button>
  );
};
