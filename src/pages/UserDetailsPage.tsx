import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useUsers } from '../context/UserContext'
import { User } from '../models/User'
import ErrorPage from './ErrorPage'
import LoadingPage from './LoadingPage'

const UserDetailsPage = (): JSX.Element => {
  const { isLoading, users } = useUsers()
  const { userId } = useParams()
  const [user, setUser] = useState<User | undefined>()

  useEffect(() => {
    setUser(users?.find((user) => user.id.toString() === userId))
  }, [userId, users])

  if (isLoading) {
    return <LoadingPage />
  }

  if (!user) {
    return <ErrorPage message="No user found!" />
  }

  return (
    <div className="container">
      <h1 className="page-title">You are seeing the profile of {user.name}</h1>
      <div className="user-details">
        <span className="space-between">
          <p>Address:</p>
          <p>
            {user.address.street}, {user.address.city}
          </p>
        </span>

        <span className="space-between">
          <p>Email:</p>
          <p>{user.email}</p>
        </span>
        <span className="space-between">
          <p>Phone:</p>
          <p>{user.phone}</p>
        </span>
        <span className="space-between">
          <p>Company catch phrase:</p>
          <p>{user.company.catchPhrase}</p>
        </span>
        <span className="space-between">
          <p>Website: </p>
          <p>{user.website}</p>
        </span>
      </div>
    </div>
  )
}

export default UserDetailsPage
