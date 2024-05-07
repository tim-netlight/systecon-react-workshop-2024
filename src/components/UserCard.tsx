import { User } from '../models/User'
import './UserCard.css'

const UserCard = ({ user }: { user: User }): JSX.Element => {
  return (
    <div className="user-card">
      <p className="user-card-id">User id: {user.id}</p>
      <div className="user-card-inner">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <div className="user-address-field">
          <p style={{ marginRight: '2rem' }}>Lat: {user.address.geo.lat}, </p>
          <p>Long: {user.address.geo.lng}</p>
        </div>
      </div>
    </div>
  )
}

export default UserCard
