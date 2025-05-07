import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="john" />
        <FormRow type='text' name="lastName" labelText='last name' defaultValue="doe" />
        <FormRow type='text' name="location" labelText='location' defaultValue="london" />    
        <FormRow type='email' name='email' defaultValue='john@gmail.com'
        labelText='email' />
        <FormRow type='password' name='password' defaultValue='secret123' />

        <button type="submit" className="btn btn-block">Submit</button>
        <p>
          Alread a member? <Link to='/login' className="member-btn">Login</Link>
        </p>
    
     
      </form>
    </Wrapper>
  )
}
export default Register