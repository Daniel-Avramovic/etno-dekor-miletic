import React, { useState, Fragment, FC } from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ProductsPage from "./pages/products/Product"
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

const App: FC = (): React.ReactElement => {
  // const [img, setImg] = useState("")
  // fetch("data.json").then(res => res.json()).then(data => {
  //   console.log(data)
  //   setImg(data.backgroundImg)
  // })
  // console.log(img)
  return (
    <Fragment>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="products" element={<ProductsPage/>} />
      </Routes>
      <Footer/>
    </Fragment>
  );
};

export default App;
