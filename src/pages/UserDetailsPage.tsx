const UserDetailsPage = (): JSX.Element => {
  // 1. Use the route parameters to get the userId. Hint: see useParams()
  // 2. Bring in the users using the created context and find the correct user based on the userId
  // 3. Save the found user in local state.

  return (
    <div className="container">
      <h1>User Details Page</h1>

      <div className="user-details">{/* Display details about the user */}</div>
    </div>
  )
}

export default UserDetailsPage
