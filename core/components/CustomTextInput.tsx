import { TextField, TextFieldProps } from "@mui/material";

type CustomTextInputProps = {} & TextFieldProps;

const CustomTextInput = (props: CustomTextInputProps) => {
  const { sx, ...restProps } = props;

  return (
    <TextField
      {...restProps}
      sx={{
        ...sx,
        ' .MuiInputBase-input': {
          p: 1,
        },
      }}
      variant="outlined"
    />
  );
};

export default CustomTextInput;
