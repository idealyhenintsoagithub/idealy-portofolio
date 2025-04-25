import { Learning } from "@/app/model/learning";
import { Box, Grid, Paper, Typography } from "@mui/material";

type LearningItemProps = {
  item: Learning;
};

const LearningItem = (props: LearningItemProps) => {
  const { item } = props;

  return (
    <Paper sx={{ display: 'flex' }} elevation={2}>
      <Box sx={{ p: 2 }}>
        <img
          src={item.coverPage?.src}
          alt={item.coverPage?.name}
          width="200px"
          height="200px"
        />
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography sx={{ fontWeight: 'bold', color: 'red' }}>
          {item?.type ?? 'Back-end | PHP' }
        </Typography>
        <Typography variant="h5" py={1} >{item.title}</Typography>
        <Typography variant="body2" >{item.description}</Typography>
        <Box sx={{ borderTop: '1px solid grey', my: 1, pt: 1 }}>
          <Typography variant="body2" sx={{ color: 'red', fontSize: '12px' }}>Durée: 4jours</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default LearningItem;
