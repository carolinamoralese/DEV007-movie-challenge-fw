import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home/Index.jsx";
import Genero from "../Genero/index.jsx";
import Idioma from "../Idioma/index.jsx";
import NotFound from "../NotFound/index.jsx";
import Puntaje from "../Puntaje/index.jsx";
import Navbar from "../../Components/Navbar/index.jsx";
import "./App.css";


const AppRoutes = () => {
  let router = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/genero",
      element: <Genero />,
    },
    {
      path: "/idioma",
      element: <Idioma />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
    {
      path: "/puntaje",
      element: <Puntaje />,
    },
  ]);

  return router;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
