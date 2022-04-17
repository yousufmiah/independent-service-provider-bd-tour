import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import NotFound from "./NotFound/NotFound";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Home/Services/Services";
import ServiceDetail from "./Pages/Home/ServiceDetail/ServiceDetail";
import Header from "./Shared/Header/Header";
import SignUp from "./SingUp/SignUp";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route
          path="/service/:serviceDetailId"
          element={<ServiceDetail></ServiceDetail>}
        ></Route>

        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
