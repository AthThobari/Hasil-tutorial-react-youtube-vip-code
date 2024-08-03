import Button from "../Button"
import InputForm from "../Input"

const FormLogin = () => {
    return (
        <form action="">

        <InputForm label="Email" type="email" name="email" placeholder="example@mail.com"></InputForm>
        <InputForm label="Password" type="password" name="password" placeholder="******"></InputForm>
        <Button classname="bg-blue-600 w-full">Submit</Button>
      </form>)
}

export default FormLogin