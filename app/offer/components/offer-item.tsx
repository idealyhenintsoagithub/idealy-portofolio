import { Box, Grid, ListItem, Paper, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { Offer, OfferItem } from "./offer";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

type OfferItemProp = {
  offer: Offer;
};

const OfferItemComponent = (props: OfferItemProp) => {
  const { offer } = props;

  return (
    <Grid item xs={3}>
      <Paper elevation={2} sx={{ p: 2, minHeight: "450px" }}>
        <Typography variant="h5" fontWeight={"bold"}>
          <FormattedMessage id={offer.title} />
        </Typography>
        <List>
          {
            (Array.isArray(offer.offerItems) && offer.offerItems.length > 0) ? offer.offerItems.map((offerItem: OfferItem) => (
              <ListItem>
                <ListItemIcon>
                  <DoubleArrowIcon />
                </ListItemIcon>
                <ListItemText>
                  <FormattedMessage id={offerItem.label} />
                </ListItemText>
              </ListItem>
            )) : null
          }
        </List>
      </Paper>
    </Grid>
  );
};

export default OfferItemComponent;