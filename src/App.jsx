import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import React from 'react'
import Register from "./auth/Register/Register";
import Login from "./auth/Login/Login";
import CreateNewPassword from "./auth/CreateNewPassword/CreateNewPassword";
import VerifiedSuccessfully from "./auth/VerifiedSuccessfully/VerifiedSuccessfully";
import ForgetPassword from "./auth/ForgetPassword/ForgetPassword";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="register" element={<Register/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="newpassword" element={<CreateNewPassword/>}/>
      <Route path="forgetpassword" element={<ForgetPassword/>}/>
      <Route path="verify/Id" element={<VerifiedSuccessfully/>}/>

      <Route path="" element={<Homepage/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App