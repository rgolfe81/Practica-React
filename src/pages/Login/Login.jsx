import React, { useEffect, useState } from "react";
import { InputText } from "../../common/InputText/InputText";
import "./Login.css";

export const Login = () => {
  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });
  const [credencialesError, setCredencialesError] = useState({
    emailError: "",
    passwordError: "",
  })
  const inputHandler = (e) => {
    setCredenciales((preveState => ({...preveState, [e.target.name]: e.target.value,})));
  };
  const inputValidate = (e) => {
    switch (e.target.name){
        case "email":
            let patron = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
            if (patron.test(credenciales.email)) {
                setCredencialesError((preveState) => ({...preveState,emailError: "",}));
            } else {
                setCredencialesError((preveState) => ({...preveState,emailError: "Debes introducir un formato válido de email",}));
            }
            break;
            
        case "password":
            if (credenciales.password.length < 8) {
                setCredencialesError((preveState) => ({...preveState,passwordError: "Debes introducir mínimio 8 caracteres",}))
            } else {
                setCredencialesError((preveState) => ({...preveState,passwordError: "",}))
            }
            break;
    }
  };
  useEffect(()=>{
    console.log("Credenciales ahora vale...", credenciales);
}, [credenciales]);

  return (
    <div className="loginDesign">
      <div className="titleDesign">
        <h2>Login</h2>
      </div>
      <InputText
        type="email"
        name="email"
        placeholder="escribe un email"
        changeFunction={(e) => inputHandler(e)}
        validateFunction={(e) => inputValidate(e)}
      />
        <div>{credencialesError.emailError}</div>
      <InputText
        type="password"
        name="password"
        placeholder="escribe el password"
        changeFunction={(e) => inputHandler(e)}
        validateFunction={(e) => inputValidate(e)}
      />
      <div>{credencialesError.passwordError}</div>
    <div className="buttonDesign" /*onClick={() => loginFunction}*/>Login</div>

    </div>
  );
};
