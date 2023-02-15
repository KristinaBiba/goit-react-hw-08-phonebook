import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));

export function App() {

     return (
       <Routes>
        <Route path="/" element={<SharedLayout/>}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>   
         </Route>  
        <Route path="*" element={<>NotFound</>} /> 
      </Routes>
    );
  
};
