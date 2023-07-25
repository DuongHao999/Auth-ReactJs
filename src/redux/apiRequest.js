// Xử lý khi api call để lưu vào redux
import axios from "axios";
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "./authSlice";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('http://localhost:8000/api/login', user);
        // login thanh cong => luu vao store
        dispatch(loginSuccess(res.data));
        navigate('/')
    } catch (e) {
        dispatch(loginFailed());
    }
}

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        const res = await axios.post('http://localhost:8000/api/sign-up', user);
        // login thanh cong => luu vao store
        dispatch(registerSuccess());
        navigate('/login')
    } catch (e) {
        dispatch(registerFailed());
    }
}