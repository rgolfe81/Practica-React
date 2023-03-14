import React from 'react'
import { InputText } from '../../common/InputText/InputText'
import "./Login.css";

export const Login = () => {
    return (
        <div className="loginDesign">
            <InputText
            type="email"
            name="email"
            placeholder="escribe un email"
            // changeFunction={(e) => inputHandler(e)}
            // validateFunction={(e) => inputValidate(e)}
            />
        </div>
    );
};
