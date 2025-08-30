"use client";

import { Box, Button, Paper, Typography } from "@mui/material";
import { Technologie } from "../constants/technologies";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import Image from "next/image";
import { TECH_DETAILS } from "../routes";

type TechnologieInfoProps = {
    technologie: Technologie;
};

const IMAGE_HEIGHT = 150;
const IMAGE_WIDTH = 150;

const TechnologieInfo = (props: TechnologieInfoProps) => {
    const  { technologie } = props;
		const navigate = useNavigate();
		const [dispalyInfo, setDisplayInfo] = useState<boolean>(false);

    return (
			<>
				<Button
					onClick={() => navigate(TECH_DETAILS.replaceAll(':id', String(technologie.id)))}
					sx={{ p: 2, m: 2, maxWidth: '200px' }}
					onMouseEnter={() => setDisplayInfo(!dispalyInfo)}
					onMouseLeave={() => setDisplayInfo(!dispalyInfo)}
				>
					<Paper
						elevation={2}
						sx={{ p: 2, m: 2, maxWidth: '200px' }}
					>
						<Image
							src={technologie.imageSrc ?? ''}
							width={IMAGE_WIDTH}
							height={IMAGE_HEIGHT}
							alt={technologie.name}
						/>
					</Paper>
					<Box
						sx={{
							display: dispalyInfo ? 'block' : 'none',
							position: 'absolute',
							backdropFilter: 'blur(5px)',
							height: '100%',
							overflow: 'hidden',
							textAlign: 'center',
							width: '100%',
							color: 'black',
							paddingTop: '45%',
							' > Typography, > Button': {
								fontWeight: 'bold',
								color: 'black',
							}
						}}
					>
						<Typography sx={{ color: 'inherit' }}>{ technologie.name }</Typography>
						<Button>Voir plus</Button>
					</Box>
				</Button>
			</>
    );
};

export default TechnologieInfo;