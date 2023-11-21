import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { useAuth } from "redux/Auth/useAuth";
import { refreshUser } from "redux/Auth/authOperations";
import { useDispatch } from "react-redux";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const Login = lazy(() => import("pages/Login"));
const Register = lazy(() => import("pages/Register"));
const Contacts = lazy(() => import("pages/Contacts"));

export function App() {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

     return ( isRefreshing ? <div>Loading...</div> :
(       <Routes>
        <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Navigate to="/login" />} />
            <Route path="login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />}></Route>
            <Route path="register" element={<RestrictedRoute redirectTo="/contacts" component={<Register />} />}></Route>
           <Route path="contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts />} />}></Route>
         </Route>  
        <Route path="*" element={<>NotFound</>} /> 
      </Routes>)
    );
};
