import { useState } from "react";
import firebase from "../firebase";
import { Link } from "react-router-dom";
import './loginRegister.css'
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleRegister = async (e) => {
        e.preventDefault();
        
        if (!email && !password && !confirmPassword) {
            setError('Please fill all fields');
            return;
        }
        if (password !== confirmPassword) {
            setError('Password does not match');
            return;
        }
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error);
        }
    }
    return (
        <div className="register-form">
        <h2>Register</h2>
        {error}
        <form className="form" onSubmit={handleRegister}>
        <label className="form-label">
        Email: <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="form-label">
        Password: <input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label className="form-label">
        Confirm Password: <input className="form-input" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <button className="form-submittt bg-green-600" type="submit">Register</button>
        </form>
        <span>Already have an account</span>
        <Link className="form-link" to='/login'>Login</Link>
        </div>
        
        )
    }
    
    export default Register