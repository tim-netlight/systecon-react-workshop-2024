import '../App.css'

const ErrorPage = ({ message }: { message?: string }): JSX.Element => {
  return (
    <div className="error-page-container">
      {/* Display a message if there is any, otherwise display ERROR DETECTED, using the nullish coalescing operator */}
      <h1>{message ?? 'ERROR DETECTED'}</h1>
    </div>
  )
}

export default ErrorPage
