const LandingPage = (): JSX.Element => {
  // Add state for the nameInput

  return (
    <div className="container">
      <h1 className="page-title">Systecon React Workshop 2024</h1>

      <label htmlFor="nameInput">Name</label>
      {/* Add event handling to this input in order to update state  */}
      <input name="nameInput" />
    </div>
  )
}

export default LandingPage
