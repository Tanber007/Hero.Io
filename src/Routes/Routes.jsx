import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Allapp from "../pages/Allapp/Allapp";
import ShowAppDetails from "../pages/ShowAppDetails/ShowAppDetails";
import Installation from "../pages/Installation/Installation";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: ()=>fetch('/data.json'),
        path: '/',
        Component: Home
      },
      {
        path: '/allapp',
        loader: ()=>fetch('/data.json'),
        Component: Allapp
      },
      {
        path: '/showappdetails/:id',
        loader: ()=>fetch('/data.json'),
        Component: ShowAppDetails
      },
      {
        path: '/installation',
        loader: ()=>fetch('/data.json'),
        Component: Installation
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }
    ]
  },
]);

