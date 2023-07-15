import Box from "@mui/material/Box"; ``
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Lottie from "lottie-react";
import notFoundJson from '../../assets/jsons/404.json';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh'
            }}
        >
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <Typography variant="h6">
                            The page you’re looking for doesn’t exist.
                        </Typography>
                        <Button sx={{ marginTop: '20px' }} variant="outlined" onClick={() => navigate(-1)}>Back Home</Button>
                    </Grid>
                    <Grid xs={6}>
                        <Lottie animationData={notFoundJson} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default NotFound