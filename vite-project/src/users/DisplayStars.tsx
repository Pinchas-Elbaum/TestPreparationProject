import { useNavigate } from 'react-router-dom';
import { User } from '../types/Types'

const Stars = ({ stars, removeStar, changePageHeader }: { stars: User[], removeStar: (id: string) => void, changePageHeader: (title: string, subtitle: string) => void }) => {

    const Navigate = useNavigate();

    const removeHeandler = (id: string) => {
        removeStar(id);
    }

    return (
        <div className="card-list">
            <h1>Favorites</h1>

            {stars.map((user) => (
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
                    <button onClick={() => { removeHeandler(user.id!) }}>Remove from favorites</button>
                </div>
                
            ))}
            <button onClick={() => { changePageHeader('Users', 'List of users'), Navigate("/users") }}>Cancle</button>
        </div>
    )
}

export default Stars
