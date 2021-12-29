import React, {useState} from 'react';
import { toast } from "react-toastify";
import { login } from "../../actions/auth";
import LoginForm from "../../components/LoginForm/loginForm";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import "./Login.css";

function Login() {

    const [email, setEmail] = useState("franckdosseh17@gmail.com");
    const [password , setPassword] = useState("123456789");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await login({email, password});
            console.log('SEND LOGIN DATA', { email, password });
            if (res.data) {
                console.log('SAVE USER RES IN REDUX AND LOCAL STORAGE THEN REDIRECT ===>');

                console.log(res.data);

                window.localStorage.setItem('auth', JSON.stringify(res.data));

                dispatch({
                    type: 'LOGGED_IN_USER',
                    payload: res.data,
                });
                navigate("/");
            }
        }catch (err) {
            console.log("error" + err);
            if(err.response.status === 400) toast.error(err.response.data);
        }
    }
    return <>
        <div className="container mt-3 mb-3 ">
            <LoginForm 
                handleSubmit={handleSubmit}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}    
            />
        </div>
    </>
}

export default Login;