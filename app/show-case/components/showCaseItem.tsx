import Project from "@/core/models/project";
import { Box, Paper, Typography } from "@mui/material";
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
          src={`http://127.0.0.1:8000/${item.presentationImage.src}/${item.presentationImage.name}`}
          alt={item.presentationImage.name}
          style={{ width: '100%', height: '100%' }}
        />
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography sx={{ fontWeight: 'bold', color: '#EF5350' }}>
          {
            intl.formatMessage({ id: `showCase.label.${item.type}` })
          }
        </Typography>
        <Typography variant="h5" py={1} >{item.name}</Typography>
        <Typography variant="body2" >{item.description}</Typography>
      </Box>
    </Paper>
  );
};

export default ShowCaseItem;
