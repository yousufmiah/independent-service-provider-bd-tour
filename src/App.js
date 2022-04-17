import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import NotFound from "./NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Header from "./Shared/Header/Header";
import SignUp from "./SingUp/SignUp";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
