import React from "react";
import { useScroll } from "./utils";
import { Header, Landing, Introduction, AboutPartner, Footer, OrderItem, } from './components';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';
import AddNewProducts from "./AllComponents/AddNewProducts";
import NumberInput from "./AllComponents/NumberInput";
// import StudentAccommodation from "./StudentAccommodation/Student Accommodation";


function App() {
  const [scrollToContent, contentRef] = useScroll()

  return (
    <div className="box-border">
      <Header />
      <BrowserRouter>
        <Routes>




        </Routes>
      </BrowserRouter>



      <AddNewProducts />
      <NumberInput/>






      <Footer />






    </div>
  );
}

export default App;
