import Home from "../pages/User/Home";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import Basket from "../pages/User/Basket";
import Categories from "../pages/User/Categories";
import CategoryDetail from "../pages/User/CategoryDetail";
import AddCategory from "../pages/Admin/AddCategory";
import Dashboard from "../pages/Admin/Dashboard";
import UserRoot from "../pages/User/UserRoot";
import AdminRoot from "../pages/Admin/AdminRoot";
import AdminLogin from "../pages/Admin/Login";

export const ROUTES = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "categories",
        children: [
          {
            index: true,
            element: <Categories />,
          },
          {
            path: ":id",
            element: <CategoryDetail />,
          },
        ],
      },
      {
        path: "basket",
        element: <Basket />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
        {
            index: true,
            element: <Dashboard/>
        },
        {
            path: 'add-category',
            element: <AddCategory/>
        },
        {
            path: 'login',
            element: <AdminLogin/>
        }
    ]
  },
];
