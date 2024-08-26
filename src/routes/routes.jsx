import { createBrowserRouter } from "react-router-dom";
import Loadable from "./Loadable";
import MainLayout from "../layout/MainLayout";
import AuthGuard from "./AuthGuard";

const Login = Loadable({ loader: () => import("../pages/login/Login") });
const Home = Loadable({ loader: () => import("../pages/home/Home") });
const Product = Loadable({ loader: () => import("../pages/product/Product") });

export const router = createBrowserRouter([
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/",
    element: <AuthGuard />,

    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            path: "",
            element: Home,
          },
          {
            path: "products",
            element: Product,
          },
          // {
          //   path: "admin",
          //   element: Admin,
          // },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <div>ERROR</div>,
  },
]);
