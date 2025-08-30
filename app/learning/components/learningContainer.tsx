"use client";

import { Box } from "@mui/material";
import { useIntl } from "react-intl"
import LearningList from "./LearningList";
import StateProcessing from "../labs/stateProcessing";
import LayoutWrapper from "@/app/layout-wrapper";

const LearningContainer = () => {
  const intl = useIntl();

  return (
    <LayoutWrapper>
      <LearningList />
    </LayoutWrapper>
  );
}

export default LearningContainer;
