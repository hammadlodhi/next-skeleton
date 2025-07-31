import React from "react";
import classNames from "classnames";

interface IProps {
  active?: boolean;
  children?: React.ReactNode;
}

export const Backdrop: React.FC<IProps> = ({ active = false, children }) => {
  return (
    <div className={classNames("backdrop", { "backdrop--active": active })}>
      {children}
    </div>
  );
};
