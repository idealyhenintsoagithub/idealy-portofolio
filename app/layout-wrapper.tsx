import './layout-wrapper.css';
import { Box, Grid } from "@mui/material";
import Navbar from "./home/navbar";
import { ReactNode, useTransition, useState, useEffect } from "react";
import Footer from "./footer/components/footer";
import { useLocation } from "react-router-dom";

type LayoutWrapperProps = {
  children: ReactNode | ReactNode[];
};

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
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
    <Box>
      <Navbar />
      <Box
        className={`page ${transitionStage}`}
        key={location.pathname}
        sx={{ marginTop: '100px' }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};