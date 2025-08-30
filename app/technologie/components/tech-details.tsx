"use client";

import { Box, Typography } from "@mui/material";
import { useIntl } from "react-intl";
import { useParams } from "react-router-dom";

const TechDetails = () => {
    const params = useParams();
    const intl = useIntl();

    return (
        <Box>
            <Typography variant="h5">
                lorem
            </Typography>
        </Box>
    );
}

export default TechDetails;
