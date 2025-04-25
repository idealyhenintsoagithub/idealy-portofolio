import { Typography } from "@mui/material";
import { ReactNode } from "react";

type SectionTitleProps = {
  content: string | ReactNode | ReactNode[] | undefined;
}

export function SectionTitle({ content }: SectionTitleProps) {
  return (
    <Typography variant="h6" sx={{ fontWeight: 600 }}>
      { content }
    </Typography>
  );
}