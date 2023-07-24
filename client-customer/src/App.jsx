import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import FooterNgabolang from "./components/Footer";
import CustomerService from "./components/CustomerService";

function App() {
  const token = localStorage.access_token
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      {/* <FooterNgabolang></FooterNgabolang> */}
      
    </>
  );
}

export default App;
