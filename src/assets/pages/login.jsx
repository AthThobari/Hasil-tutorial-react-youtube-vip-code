import { Link } from "react-router-dom"
import FormLogin from "../../components/Fragment/FormLogin"
import AuthLayout from "../../components/Layout/AuthLayout"

const LoginPage = () =>{
    return (
        <AuthLayout title="Login">
            <FormLogin/>
            <div className="text-sm mt-5 text-center">Don't have an account? {" "} <Link to="/register" className="font-bold text-blue-600">Register</Link></div>
        </AuthLayout>
    )
}

export default LoginPage