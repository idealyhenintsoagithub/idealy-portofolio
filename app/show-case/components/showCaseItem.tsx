import { Learning } from "@/app/model/learning";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useIntl } from "react-intl";

type ShowCaseItemProps = {
  item: Project;
};

const ShowCaseItem = ({ item }: ShowCaseItemProps) => {
  const intl = useIntl();

  return (
    <Paper sx={{ display: 'flex', borderRadius: '8px' }} elevation={2}>
      <Box sx={{ p: 2 }}>
        <img
          src={item.image.src}
          alt={item.image.name}
          width="200px"
          height="200px"
        />
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography sx={{ fontWeight: 'bold', color: '#EF5350' }}>
          {
            intl.formatMessage({ id: `showCase.label.${item.type}` })
          }
        </Typography>
        <Typography variant="h5" py={1} >{item.title}</Typography>
        <Typography variant="body2" >{item.description}</Typography>
      </Box>
    </Paper>
  );
};

export default ShowCaseItem;
