import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({ changePageHeader }: { changePageHeader: (title: string, subtitle: string) => void }) => {
    const nameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const submitHeandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        changePageHeader('Users', 'List of users');
        navigate('/users');
    }

    return (
        <div>
            <form onSubmit={submitHeandler}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={nameRef} required />

                <label htmlFor="age">Password</label>
                <input type="text" id="password" ref={passwordRef} required />
                <button type="submit">Login</button>
                <button onClick={() => { navigate('/users') }}>Cancel</button>
            </form>
        </div>
    )
}

export default Login
