import Button from "../Button"
import InputForm from "../Input"

const FormRegister = () => {
    return (
        <form action="">

        <InputForm label="Fullname" type="text" name="fullname" placeholder="insert your name here..."></InputForm>
        <InputForm label="Email" type="email" name="email" placeholder="example@mail.com"></InputForm>
        <InputForm label="Password" type="password" name="password" placeholder="******"></InputForm>
        <InputForm label="Confirm Password" type="password" name="confirmPassword" placeholder="******"></InputForm>
        <Button classname="bg-blue-600 w-full">Register</Button>
      </form>)
}

export default FormRegister