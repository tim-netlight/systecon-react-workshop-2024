import { usersData } from '../utils/users'

const UserListPage = (): JSX.Element => {
  const users = usersData

  // For exercise 2, step 1: Fetching users from getUsers() in the apiService. Hint: See 'useEffect'

  return (
    <div className="container">
      <h1 className="page-title">User List Page</h1>

      {/* Use the .map() function to render all the users and display each 
          user's name, phone and email.
          Remember that '{ }' allows JavaScript execution within the markup
      */}
    </div>
  )
}

export default UserListPage
