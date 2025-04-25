import { Box, Typography } from "@mui/material";
import { useIntl } from "react-intl";
import { useParams } from "react-router-dom";

const TechDetails = () => {
    const params = useParams();
    const intl = useIntl();

    console.info({ params });
    console.info("lorem ipsum");

    return (
        <Box>
            <Typography variant="h5">
                lorem
            </Typography>
        </Box>
    );
}

export default TechDetails;