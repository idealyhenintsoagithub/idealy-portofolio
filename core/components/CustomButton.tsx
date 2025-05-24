import { useTheme } from "@emotion/react";
import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

type CustomButtonProps = {
  onClick: () => void;
} & Omit<ButtonProps, 'onClick'>;

const CustomButton = (props: CustomButtonProps) => {
  const { children, onClick, sx, ...restProps } = props;
  const theme = useTheme();

  return (
    <Button
      {...restProps}
      sx={{
        ...sx,
        borderRadius: '16px',
        boxShadow: 'none',
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
