// Card/Card.tsx
import React from "react";
import { Paper, PaperProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface CardProps extends PaperProps {
  children: React.ReactNode;
  className?: string;
}

const StyledCard = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  padding: theme.spacing(2),
  margin: theme.spacing(2, 0),
}));

const Card: React.FC<CardProps> = ({ children, className = "", ...props }) => {
  return (
    <StyledCard elevation={1} className={className} {...props}>
      {children}
    </StyledCard>
  );
};

export default Card;
