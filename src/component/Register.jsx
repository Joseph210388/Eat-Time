import React, {useState} from "react";
import '../css/Style-Pages/Register.css';
import Footer1 from './Footer1';
import { Link } from "react-router-dom";

function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [surname, setSurname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Surname:', surname);
    };
    return(
        <div className="Register">
            <div className="Registercontainer">
                <h1>Create Account</h1>
                <form className="Registerform" onSubmit={handleSubmit}>
                    <div className="Formsection1">
                        <label>
                        Your Name: <br />
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        </label>
                        <label>
                        Your Surname: <br />
                            <input
                            type="text"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                        />
                        </label>
                        
                    </div>
                    <br />
                    <label>
                    Your Password: <br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </label>
                    <br />
                    <label>
                        Your email: <br />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <br />
                    <div className="Formcheck">
                        <input type="checkbox" required />
                        <label>
                        Accept the terms and conditions
                        </label>
                        <br />
                    </div>
                    <br />
                    <button type="submit">SIGN UP</button>
                </form>
                <div className="Registersection2">
                    <p>Do you have an account?</p>
                    <Link to={"/Login"}>
                        <a>Sing in</a>
                    </Link>
                </div>
            </div>
            <Footer1 />
        </div>
    );
}
export default Register;