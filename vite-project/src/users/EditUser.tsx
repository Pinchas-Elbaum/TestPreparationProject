import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { User } from '../types/Types'

const EditUser = ({ editUser, user, changePageHeader }: { editUser: (newUser: User) => void, user: User, changePageHeader: (title: string, subtitle: string) => void }) => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const imgRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const { id } = useParams();
    const navigate = useNavigate();

    const submitHeandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(id);
        const newUser: User = {
            id,
            username: nameRef.current!.value,
            email: emailRef.current!.value,
            password: passwordRef.current!.value,
            age: Number(ageRef.current!.value),
            img: imgRef.current!.value,
            isLogged: false
        }

        editUser(newUser);
        nameRef.current!.value = '';
        emailRef.current!.value = '';
        ageRef.current!.value = '';
        imgRef.current!.value = '';
        passwordRef.current!.value = '';

        changePageHeader('Users', 'List of users');
        navigate('/users');

    }
    return (
        <div>
            <form onSubmit={submitHeandler} >
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={nameRef} defaultValue={user.username} />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" ref={emailRef} defaultValue={user.email} />
                <label htmlFor="age">Age</label>
                <input type="text" id="age" ref={ageRef} defaultValue={user.age.toString()} />
                <label htmlFor="img">Image</label>
                <input type="text" id="img" ref={imgRef} defaultValue={user.img} />
                <label htmlFor="password">Password</label>
                <input type="text" id="password" ref={passwordRef} defaultValue={user.password} />
                <button type="submit">Save changes</button>
            </form>
            <button onClick={() => { navigate('/users'), changePageHeader('Users', 'List of users') }}>Cancel</button>

        </div>
    )
}

export default EditUser
