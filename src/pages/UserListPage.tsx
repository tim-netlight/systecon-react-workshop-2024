import { Link } from 'react-router-dom'
import UserCard from '../components/UserCard'
import { useUsers } from '../context/UserContext'
import ErrorPage from './ErrorPage'
import LoadingPage from './LoadingPage'

const UserListPage = (): JSX.Element => {
  const { isLoading, users } = useUsers()

  if (isLoading) {
    return <LoadingPage />
  }

  if (!users) {
    return <ErrorPage message="There are no users!" />
  }

  return (
    <div className="container">
      <h1 className="page-title">User List Page</h1>
      {users.map((user) => {
        return (
          <Link key={user.id} to={user.id.toString()}>
            <UserCard user={user} />
          </Link>
        )
      })}
    </div>
  )
}

export default UserListPage
