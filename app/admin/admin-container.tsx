import { Box, Grid, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Route, Routes } from "react-router-dom";
import Navbar from "../home/navbar";


const AdminContainer = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Navbar/>
			</Grid>
			<Grid container sx={{ mt: 10, p: 2 }}>
				<Grid item xs={3}>
					<Typography>Lorem</Typography>
					<Typography>Lorem</Typography>
					<Typography>Lorem</Typography>
					<Typography>Lorem</Typography>
				</Grid>
				<Grid item xs={9}></Grid>
			</Grid>
		</Grid>
	);
};

export default AdminContainer;
