
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Characters, ResultCharacters } from "./type";
import Cards from "./Card";

const defaultTheme = createTheme();

interface Props {
  data: Characters | undefined;
}

function MainPage({ data }: Props) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Rick and Morty is an American adult animated science fiction
              sitcom created by Justin Roiland and Dan Harmon for Cartoon
              Network's nighttime programming block Adult Swim.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {data?.characters?.results.map((character: ResultCharacters) => (
              <Grid item key={character.id} xs={12} sm={6} md={4}>
                <Cards {...character} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          Rick And Morty
          <br />
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </ThemeProvider>
  )
}

export default MainPage