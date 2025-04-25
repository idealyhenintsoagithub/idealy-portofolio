import { Box, Grid } from "@mui/material";
import Navbar from "./home/navbar";
import { ReactNode } from "react";
import Footer from "./footer/components/footer";

type LayoutWrapperProps = {
  children: ReactNode | ReactNode[];
};

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <Box>
      <Navbar />
      <Box mt={5}>{children}</Box>
    </Box>
  );
};