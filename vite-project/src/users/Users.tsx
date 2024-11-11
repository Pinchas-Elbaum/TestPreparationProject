import axios from 'axios'
import { useEffect, useState } from 'react'
import DisplayUsers from './DisplayUsers'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AddNewUser from './AddNewUser'
import { User } from '../types/Types'
import EditUser from './EditUser'
import Stars from './DisplayStars'
import PageHeader from './PageHeader'
import Login from './Login'

const Users = () => {
  const [users, setusers] = useState<User[]>([])
  const [userIdToEdit, setuserIdToEdit] = useState('')
  const [stars, setstars] = useState<User[]>([])
  const [title, setitle] = useState('')
  const [subtitle, setsubtitle] = useState('')

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('./data.json').then(res => setusers(res.data))
  }, [])


  const addUser = (newUser: User) => {
    setusers([...users, newUser])
  }

  const deleteUser = (id: string) => {
    setusers(users.filter(user => user.id !== id))
  }

  const editUser = (newUser: User) => {
    setusers(users.map(user => user.id === newUser.id ? newUser : user))
  }

  const getUserIdToUpdate = (id: string) => {
    setuserIdToEdit(id)
  }

  const removeStar = (id: string) => {
    setstars(stars.filter(user => user.id !== id))
  }

  const addToStars = (id: string) => {
    if (stars.find(user => user.id === id)) return
    setstars([...stars, users.find(user => user.id === id)!])
  }

  const changePageHeader = (title: string, subtitle: string) => {
    setitle(title);
    setsubtitle(subtitle);
  }

  return (
    <>
      <PageHeader title={title} subtitle={subtitle} />
      <div>
        <button onClick={() => { navigate('/adduser'), changePageHeader('Add new user', 'Here you can add new user') }}>add new user</button>
        <button onClick={() => { navigate('/users'), changePageHeader('All users', 'Here you can see all users') }}>show users</button>
        <button onClick={() => { navigate('/stars'), changePageHeader('Favorites', 'Here you can see your favorites') }}>show stars</button>
        <button onClick={() => { navigate('/login'), changePageHeader('Login', 'Here you can login') }}>login</button>
      </div>

      <Routes>
        <Route path="/users" element={<DisplayUsers users={users} deleteUser={deleteUser} getUserIdToUpdate={getUserIdToUpdate} addToStars={addToStars} changePageHeader={changePageHeader} />} />
        <Route path="/adduser" element={<AddNewUser addUser={addUser} changePageHeader={changePageHeader} />} />
        <Route path="/edituser/:id" element={<EditUser editUser={editUser} user={users.find(user => user.id === userIdToEdit)!} changePageHeader={changePageHeader} />} />
        <Route path="/stars" element={<Stars stars={stars} removeStar={removeStar} changePageHeader={changePageHeader} />} />
        <Route path="/login" element={<Login changePageHeader={changePageHeader} />} />

      </Routes>
    </>
  )
}

export default Users
