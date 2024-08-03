import { Link } from "react-router-dom"
import FormRegister from "../../components/Fragment/FormRegister"
import AuthLayout from "../../components/Layout/AuthLayout"

const RegisterPage = () =>{
    return (
        <AuthLayout title="Register">
            <FormRegister/>
            <div className="text-sm mt-5 text-center">Have an account? {" "} <Link to="/login" className="font-bold text-blue-600">Login</Link></div>
        </AuthLayout>
    )
}

export default RegisterPage