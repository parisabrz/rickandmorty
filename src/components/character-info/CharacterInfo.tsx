import { GetCharacterById } from "../../graphql/queries"
import { CharacterByID } from '../type';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from '@mui/material/List';
import Button from '@mui/material/Button';

import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Face6Icon from '@mui/icons-material/Face6';
import Man2Icon from '@mui/icons-material/Man2';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import ricky from "../../assets/jsons/animation.json";
import ListItems from "../list-items/ListItems";

function CharacterInfo() {
    let { characterId } = useParams()
    const navigate = useNavigate();

    const { data, loading, error } = useQuery<CharacterByID>(
        GetCharacterById,
        { variables: { id: characterId } }
    );

    if (loading)
        return (
            <div className="loading">
                <Lottie animationData={ricky} />
            </div>
        );

    if (error || !data) return <div>{error?.message}</div>;

    const { created, gender, image, name, species, status } = data.character;

    return (
        <div>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Button style={{marginBottom: '20px'}} variant="outlined" onClick={() => navigate(-1)}>Back</Button>
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <div className="border">
                        <div className="frame">
                            <img src={image} alt="character-image" className="image" />
                        </div>
                    </div>

                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                        }}
                    >
                        <ListItems icon={<AssignmentIndIcon />} primary={name} />
                        <ListItems icon={<Face6Icon />} primary={gender} />
                        <ListItems icon={<Man2Icon />} primary={species} />
                        <ListItems icon={<AnnouncementIcon />} primary={status} />
                        <ListItems icon={<CalendarMonthIcon />} primary={created} />
                    </List>
                </Box>
            </Container>
        </div>
    )
}

export default CharacterInfo