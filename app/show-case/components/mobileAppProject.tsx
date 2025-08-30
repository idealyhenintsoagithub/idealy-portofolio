"use client";

import { Box, Grid, Paper, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

type MobileAppProjectProps = {
    projects?: Project[];
};

const MobileAppProject = (props: MobileAppProjectProps) => {
    const { projects } = props;

    if (!projects) {
        return null;
    }

    return (
        <>
            <Typography sx={{ fontWeight: 'bold', pb: 1, mt: 2, fontSize: '1.2rem' }}>
                <FormattedMessage id="showCase.title.mobileApp" />
            </Typography>
            <Grid container>
                { projects.map((project: Project) => (
                    <Grid xs={3}>
                        <Paper
                            elevation={1}
                            sx={{
                                mx: 1,
                                minHeight: 250,
                                '> img': {
                                    width: '100%',
                                }
                            }}
                        >
                            <img
                                src={project.image.src}
                                alt={project.image.name}
                            />
                            <Box p={2}>
                                <Typography sx={{ fontWeight: 'bold', py: 1 }}>
                                    { project.title }
                                </Typography>
                                <Typography>
                                    { project.description }
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default MobileAppProject;