
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ResultCharacters } from './type';
import { Link } from "react-router-dom";

export default function Cards(props: ResultCharacters) {
    const { id, image, name, status, species } = props;

    return (
        <Link to={`character/${id}`}>
            <Card
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <CardMedia
                    component="div"
                    sx={{
                        // 16:9
                        pt: "56.25%",
                    }}
                    image={image}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography>
                        {status} - {species}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
}
