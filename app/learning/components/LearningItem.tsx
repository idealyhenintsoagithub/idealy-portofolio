import { Training } from "@/core/models/training";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { FormattedMessage, useIntl } from "react-intl";

type LearningItemProps = {
  item: Training;
};

const LearningItem = (props: LearningItemProps) => {
  const intl = useIntl();
  const { item } = props;

  return (
    <Paper sx={{ display: 'flex', borderRadius: '8px', }} elevation={2}>
      <Box sx={{ p: 2 }}>
        <img
          src={item.coverPage?.src}
          alt={item.coverPage?.alt}
          width="200px"
          height="200px"
        />
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography sx={{ fontWeight: 'bold', color: '#EF5350' }}>
          {item?.type ?? 'Back-end | PHP' }
        </Typography>
        <Typography variant="h5" py={1} >
          <FormattedMessage id={item.title} />
        </Typography>
        <Typography variant="body2" >
          <FormattedMessage id={item.description} />
        </Typography>
        <Box sx={{ borderTop: '1px solid grey', my: 1, pt: 1 }}>
          <Typography variant="body2" sx={{ color: '#F44336', fontSize: '12px' }}>
            {
              intl.formatMessage({
                id: 'learning.label.duration',
              }, {
                duration: item.duration,
              })
            }
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default LearningItem;
