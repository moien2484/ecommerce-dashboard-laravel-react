import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/Home";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Dashboard from "./pages/cms/Dashboard";
import ProductCms from "./pages/productcms/ProductCms";
import Usercms from "./pages/userscms/Usercms";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
const Routes = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/", element: <Home /> },
  { path: "/shopping-cart", element: <ShoppingCart /> },
  { path: "/reset-password", element: <ResetPassword /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "product", element: <ProductCms /> },
      { path: "users", element: <Usercms /> },

    ],
  },
];
export default Routes;
// export default Routes;
// import Dashboard from "./pages/admin/Dashboard";
// import ProductCms from "./pages/productcms/ProductCms";
// import UsersCms from "./pages/userscms/UsersCms";

// const Routes = [
//   {
//     path: "/admin",
//     element: <Dashboard />,
//     children: [
//       { path: "products", element: <ProductCms /> },
//       { path: "users", element: <UsersCms /> },
//     ],
//   },
// ];

