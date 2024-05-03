import './Profile.css'

interface ProfileProps {
  name: string
  age: number
  city: string
}

const Profile = ({ name, age, city }: ProfileProps): JSX.Element => {
  return (
    <div className="profile-container">
      <h3>My profile</h3>
      <div className="col">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>City: {city}</p>
      </div>
    </div>
  )
}

export default Profile
