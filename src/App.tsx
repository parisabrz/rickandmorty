
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect  } from "react";
import Lottie from "lottie-react";
import { Typography } from "@mui/material";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { GetAllCharacters } from "./graphql/queries";
import ricky from "./assets/jsons/animation.json";
import MainPage from "./components/main-page/MainPage.tsx";
import { Characters } from "./components/type";
import CharacterInfo from './components/character-info/CharacterInfo.tsx';
import NotFound from "./components/404/404.tsx";
import logo from "./assets/img/rickmorty.png";
import { getData } from "./app/slice.ts";
import { RootState } from "./app/store.ts";

function App() {
  const dispatch = useDispatch();
  const CharacterLists = useSelector((state: RootState) => state.characterData.charactersData)
  const { loading, error, data } = useQuery<Characters>(GetAllCharacters);

  useEffect(() => {
    if(data) dispatch(getData(data))
  }, [data])
  
  if (loading)
    return (
      <div className="loading">
        <Typography variant="h3" component="h3">Loading...</Typography>
        <Lottie animationData={ricky} />
      </div>
    );

  if (error) return <div>{error.message}</div>;

  // define router - react-router-dom v6
  let router = createBrowserRouter([
    {
      path: "/",
      loader: () => ({ message: "Hello Data Router!" }),
      Component() {
        return <div>
          <header>
            <img src={logo} alt="logo" />
          </header>
          {CharacterLists && <MainPage data={CharacterLists} />}
        </div>;
      },
    },
    {
      path: "character/:characterId",
      element: <CharacterInfo />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  )
}

export default App
