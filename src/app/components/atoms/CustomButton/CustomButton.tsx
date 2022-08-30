import { Button } from "@mui/material";
import { customButtonStyle } from "@styles/CustomButton/CustomButton";
import React from "react";

type CustomButtonProps = {
  endIcon?: JSX.Element;
  startIcon?: JSX.Element;
  text?: string;
  onClick?: () => void;
};

const CustomButton = ({
  endIcon,
  startIcon,
  text,
  onClick,
}: CustomButtonProps) => {
  return (
    <Button
      className={customButtonStyle()}
      endIcon={endIcon}
      startIcon={startIcon}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
