import { useState } from "react";
import axios from "axios";
import { registerUser } from "../redux/apiRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUserNameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const user = {
            "username": username,
            "email": email,
            "password": password,
            "roles": ["user"]
        };

        registerUser(user, dispatch, navigate);

        // console.log(username, email, password);
        // e.preventDefault();

        // const user = {
        //     "username": username,
        //     "email": email,
        //     "password": password,
        //     "roles": ["user"]
        // }
        // const response = await axios.post('http://localhost:8000/api/sign-up', user);
    }

    return (

        <form onSubmit={handleFormSubmit}>
            <div className="Auth-form-content">
                <div className="form-group mt-3">
                    <label>User Name</label>
                    <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="username"
                        value={username}
                        onChange={handleUserNameChange}
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Email Address"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
                <p className="text-center mt-2">
                    Forgot <a href="#">password?</a>
                </p>
            </div>
        </form>

    );
}

export default Register;