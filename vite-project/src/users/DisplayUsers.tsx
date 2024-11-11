import { useNavigate } from 'react-router-dom';
import { User } from '../types/Types'

const DisplayUsers = ({ users, deleteUser, getUserIdToUpdate, addToStars, changePageHeader }: { users: User[], deleteUser: (id: string) => void, getUserIdToUpdate: (id: string) => void, addToStars: (id: string) => void, changePageHeader: (title: string, subtitle: string) => void }) => {
    const Navigate = useNavigate();


    const deleteHeandler = (id: string) => {
        deleteUser(id);
    }

    const getUserIdToUpdateHeandler = (id: string) => {
        getUserIdToUpdate(id!);
        changePageHeader('Edit user', 'here you can edit user');
        Navigate(`/edituser/${id}`);
    }

    const addUserToStarsHeandler = (id: string) => {
        addToStars(id!);
    }

    return (
        <>
            <div className="card-list">

                {users.map((user) => (
                    <div key={user.id} className="user-card">
                        <img
                            src={user.img}
                            alt={`${user.username}'s avatar`}
                            className="user-avatar"
                        />
                        <div className="user-info">
                            <h3>{user.username}</h3>
                            <p>Email: {user.email}</p>
                            <p>Age: {user.age}</p>

                        </div>
                        <button onClick={() => { deleteHeandler(user.id!) }}>Delete</button>
                        <button onClick={() => { getUserIdToUpdateHeandler(user.id!) }}>Edit</button>
                        <button onClick={() => { addUserToStarsHeandler(user.id!) }}>Add to favorites</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DisplayUsers
