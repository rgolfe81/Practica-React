import React from 'react'
import { InputText } from '../../common/InputText/InputText'
import "./Login.css";

export const Login = () => {
    return (
        <div className="loginDesign">
            <div className='titleDesign'>
                <h2>Login</h2>   
            </div>
            <InputText
            type="email"
            name="email"
            placeholder="escribe un email"
            // changeFunction={(e) => inputHandler(e)}
            // validateFunction={(e) => inputValidate(e)}
            />
            <InputText
            type="password"
            name="password"
            placeholder="escribe el password"
            // changeFunction={(e) => inputHandler(e)}
            // validateFunction={(e) => inputValidate(e)}
            />
        </div>
    );
};
