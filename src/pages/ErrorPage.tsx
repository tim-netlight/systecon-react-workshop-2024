import '../App.css'

const ErrorPage = ({ message }: { message?: string }): JSX.Element => {
  return (
    <div className="error-page-container">
      <h1>{message ?? 'ERROR DETECTED'}</h1>
    </div>
  )
}

export default ErrorPage
