
import logo from "./assets/img/rickmorty.png";
import { useQuery } from "@apollo/client";
import { GetAllCharacters } from "./graphql/queries";
import Lottie from "lottie-react";
import ricky from "./assets/jsons/animation.json";
import MainPage from "./components/MainPage";
import { Characters } from "./components/type";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CharacterInfo from './components/CharacterInfo.tsx';

function App() {
  const { loading, error, data } = useQuery<Characters>(GetAllCharacters);

  if (loading)
    return (
      <div className="loading">
        <Lottie animationData={ricky} />
      </div>
    );

  if (error) return <div>{error.message}</div>;

  let router = createBrowserRouter([
    {
      path: "/",
      loader: () => ({ message: "Hello Data Router!" }),
      Component() {
        return <div>
          <header>
            <img src={logo} alt="logo" />
          </header>
          <MainPage data={data} />
        </div>;
      },
    },
    {
      path: "character/:characterId",
      element: <CharacterInfo />,
    },
  ]);

  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  )
}

export default App
