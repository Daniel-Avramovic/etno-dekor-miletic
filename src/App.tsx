import React, { Fragment, FC } from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ProductsPage from "./pages/products/Product"
import Footer from "./components/footer/Footer";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "./App.scss";

const RootPage = ({ children }: { children: React.ReactElement}) => (
  <>
    <Header/>
    {children}
    <Footer/>
  </>
)
const router = createHashRouter(
  [
    {
      path: "/",
      element: <RootPage><Home /></RootPage>
    }, {
      path: '/products',
      element: <RootPage><ProductsPage /></RootPage>
    },
  ]
)

const App: FC = (): React.ReactElement => {
  return (
    <Fragment>
        <RouterProvider router={router}/>
    </Fragment>
  );
};

export default App;
