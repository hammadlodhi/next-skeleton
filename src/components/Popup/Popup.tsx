import classNames from "classnames";
import React, { FC, useRef } from "react";
import { Backdrop } from "../Backdrop/Backdrop";
import { IconButton } from "../IconButton/IconButton";
import { useKeyPress } from "<@>/hooks/useKeyPress";
import { useOnClickOutside } from "<@>/hooks/useOnClickOutside";
import { LocalizedHeading } from "../LocalizedHeading/LocalizedHeading";
import CancelIcon from "@mui/icons-material/Cancel";

interface IProps {
  heading?: string;
  onClose?: () => void;
  theme?: "default" | "pointed" | "highlight";
  showCloseIcon?: boolean;
  className?: string;
  clickOutside?: boolean;
  children?: React.ReactNode;
}

export const Popup: FC<IProps> = ({
  className,
  heading,
  onClose = null,
  theme = "highlight",
  showCloseIcon = true,
  clickOutside = true,
  children,
}) => {
  const ref = useRef(null);
  useKeyPress("Escape", onClose);
  useOnClickOutside(ref, (event) => {
    if (clickOutside && onClose) {
      onClose();
    }
  });
  return (
    <Backdrop active={true}>
      <div
        className={classNames("popup", theme, className)}
        onClick={(evt) => evt.stopPropagation()}
      >
        <div ref={ref} className="popup__container pd-4">
          {heading && <LocalizedHeading heading="h3" t={heading} />}
          {showCloseIcon && onClose && (
            <IconButton
              className="popup__close-button"
              icon={<CancelIcon />}
              onClick={onClose}
            />
          )}
          {children}
        </div>
      </div>
    </Backdrop>
  );
};
