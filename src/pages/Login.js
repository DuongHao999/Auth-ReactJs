import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUserNameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        try {
            e.preventDefault();
            e.stopPropagation(); // Add this line to stop event propagation
            console.log("goi may lan");

            const user = {
                "username": username,
                "password": password
            }
            const response = await axios.post('http://localhost:8000/api/login', user);
            console.log(response);
            navigate("/");
        } catch (err) {
            // khi gọi api trả về status khác 200 thì axios nó sẽ chạy vào catch này, không bao giờ vào else nếu có
            console.log("Error Response:", err.response.data);
            navigate("/");
        }

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

export default Login;