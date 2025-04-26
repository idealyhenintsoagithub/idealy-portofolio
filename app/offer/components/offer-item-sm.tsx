import { Typography, Box, ListItem, Paper } from '@mui/material';
import { OfferItemProp } from './offer-item';
import { FormattedMessage } from 'react-intl';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { OfferItem } from './offer';
import shadows from '@mui/material/styles/shadows';

const OfferItemSm = ({ offer }: OfferItemProp) => (
  <Box sx={{ boxShadow: shadows, p: 4 }}>
    <Typography variant='h5'>
      <FormattedMessage id={offer.title} />
    </Typography>
    <List>
      {
        (
          Array.isArray(offer.offerItems)
          && offer.offerItems.length > 0
        ) ? offer.offerItems.map((offerItem: OfferItem) => (
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
  </Box>
);

export default OfferItemSm;
