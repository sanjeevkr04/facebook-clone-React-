import React from 'react'
import './styles/Login.css'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import {auth, provider} from './../firebase'
// Icons
import fb_icon from './icons/icon_facebook.svg';
import { Button } from '@material-ui/core';

function Login() {
    const [, dispach] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispach({
                type: actionTypes.SET_USER,
                user: result.user
            });
            console.log(result);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src={fb_icon} alt="Facebook"/>
                <h2>facebook</h2>
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
