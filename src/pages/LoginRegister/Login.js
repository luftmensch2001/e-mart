import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";
import axios from "axios";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginSucess, setLoginSuccess] = useState(false);

    const LoginButtonOnClick = () => {
        setLoginSuccess(false);
        if (username === "" || password === "") {
            toast.warn("Vui lòng nhập đầy đủ thông tin!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        axios
            .post("http://localhost:5000/api/accounts/login", {
                username: username,
                password: password,
            })
            .then((res) => {
                localStorage.setItem("token", res.data.accessToken);
                localStorage.setItem("username", username);
                localStorage.setItem("accountID", res.data.userId);
                toast.success("Đăng nhập thành công!", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setLoginSuccess(true);
            })
            .catch((err) => {
                if (err.response.data.message === "Incorrect username ")
                    toast.error("Tài khoản không tồn tại!", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                else if (err.response.data.message === "Incorrect  password")
                    toast.error("Sai mật khẩu!", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                else
                    toast.error("Lỗi kết nối!", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
            });
    };

    return (
        <div className="Login">
            <div className="login-card">
                <span className="title-text login-logo">
                    E-<span className="green-text">Mart</span>
                </span>
                <p className="login-head-text">Đăng nhập và thoả sức mua sắm</p>
                <input
                    className="login-input"
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Số điện thoại / E-mail / Tên đăng nhập"
                />
                <input
                    className="login-input"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Mật khẩu"
                />
                <a className="login-forgot-pass-link" href="#">
                    Quên mật khẩu ?
                </a>
                {loginSucess && <Navigate to="/" />}
                <button
                    className="login-button primary-button"
                    onClick={LoginButtonOnClick}
                >
                    Đăng Nhập
                </button>
                <span className="login-second-text">
                    Bạn chưa có tài khoản ?
                    <Link to="/register">
                        <span className="login-bold-text"> Đăng ký ngay</span>
                    </Link>
                </span>
            </div>
        </div>
    );
}

export default Login;
