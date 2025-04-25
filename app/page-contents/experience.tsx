import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import CustomCard from "../utils/custom-card";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { FormattedMessage } from "react-intl";

const Experience = () => {
  return (
    <Box id="experience" sx={{ mb: 4, }}>
      <CustomCard title={'2021 - present'} content={(
        <>
          <Typography sx={{ fontWeight: 'bold' }}>
          <FormattedMessage id="experience.title" />
          </Typography>
          <Typography>
            <FormattedMessage id="experience.fullStack" />
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CheckCircleOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={(
                  <FormattedMessage id="experience.quality" />
                )} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CheckCircleOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={(
                  <FormattedMessage id="experience.scallability" />
                )} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CheckCircleOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={(
                  <FormattedMessage id="experience.productivity" />
                )} />
              </ListItemButton>
            </ListItem>
          </List>
        </>
      )}/>
    </Box>
  );
}

export default Experience;