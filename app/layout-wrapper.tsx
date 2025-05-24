import './layout-wrapper.css';
import { Box, BoxProps } from "@mui/material";
import Navbar from "./home/navbar";
import { ReactNode, useTransition, useState, useEffect } from "react";
import Footer from "./footer/components/footer";
import { useLocation } from "react-router-dom";

type LayoutProps = {} & BoxProps;

type LayoutWrapperProps = {
  children: ReactNode | ReactNode[];
  layoutProps?: LayoutProps;
};

export default function LayoutWrapper({ children, layoutProps }: LayoutWrapperProps) {
  const location = useLocation();
  const [isPending, startTransition] = useTransition();
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    setTransitionStage('fadeIn');
    startTransition(() => {
      setTransitionStage('fadeOut');
    });
  }, [location]);
  
  return (
    <Box {...layoutProps}>
      <Navbar />
      <Box
        className={`page ${transitionStage}`}
        key={location.pathname}
        sx={{ marginTop: '100px', p: 5 }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};