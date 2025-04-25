import {
  Grid,
  Typography,
} from "@mui/material";
import { CustomCardProps } from "../page-contents/project";
import Image from "next/image";

export default function CustomCard({ title, imageName, content }: CustomCardProps) {
  return (
    <Grid container sx={{ my: 2 }}>
      <Grid xs={4}>
        <Typography sx={{ fontWeight: 'bold', pb: 2 }}>{ title }</Typography>
        { imageName && (
          <Image
            src={`/images/${imageName}`}
            width={150}
            height={150}
            alt={imageName}
          />
        )}
      </Grid>
      <Grid xs={8}>
        { content }
      </Grid>
    </Grid>
  );
}