import React, { useRef } from 'react'
import { User } from '../types/Types';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const AddNewUser = ({ addUser, changePageHeader }: { addUser: (newUser: User) => void, changePageHeader: (title: string, subtitle: string) => void }) => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const imgRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const submitHeandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newUser: User = {
            id: v4(),
            username: nameRef.current!.value,
            email: emailRef.current!.value,
            password: passwordRef.current!.value,
            age: Number(ageRef.current!.value),
            img: imgRef.current!.value,
            isLogged: false
        }

        addUser(newUser);
        nameRef.current!.value = '';
        emailRef.current!.value = '';
        ageRef.current!.value = '';
        imgRef.current!.value = '';
        passwordRef.current!.value = '';

        changePageHeader('Users', 'List of users');
        navigate('/users');

    }
    return (
        <>
            <form onSubmit={submitHeandler}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={nameRef} />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" ref={emailRef} />
                <label htmlFor="age">Age</label>
                <input type="text" id="age" ref={ageRef} />
                <label htmlFor="img">Image</label>
                <input type="text" id="img" ref={imgRef} />
                <label htmlFor="password">Password</label>
                <input type="text" id="password" ref={passwordRef} />
                <button type="submit">Add User</button>
            </form>
            <button onClick={() => { changePageHeader('Users', 'List of users'), navigate('/users') }}>Cancel</button>
        </>
    )
}

export default AddNewUser
