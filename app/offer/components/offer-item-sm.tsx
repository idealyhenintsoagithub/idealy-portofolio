import { Typography, Box, ListItem, Paper, useTheme } from '@mui/material';
import { OfferItemProp } from './offer-item';
import { FormattedMessage } from 'react-intl';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { OfferItem } from './offer';

const OfferItemSm = ({ offer }: OfferItemProp) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={2}
      sx={{
        p: 4,
        bgcolor: theme.palette.background.paper,
        borderRadius: '8px',
      }}
    >
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
    </Paper>
  );
}

export default OfferItemSm;
