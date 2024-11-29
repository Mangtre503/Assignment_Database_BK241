import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()

    return (
        <>
            Login
            <div>
                <button onClick={() => navigate("/information")}>Đăng nhập</button>
            </div>
        </>
    );
}

export default Login;