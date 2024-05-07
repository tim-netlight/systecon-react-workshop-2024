import { useState } from 'react'
import Profile from '../components/Profile'

export default function LandingPage(): JSX.Element {
  const [name, setName] = useState('')

  return (
    <div className="container">
      <h1 className="page-title">Systecon React Workshop 2024</h1>
      <div className="row">
        <Profile name={name} age={30} city="Uppsala" />
        <div className="col" style={{ marginLeft: '1rem' }}>
          <h2>Welcome {name}</h2>

          <p style={{ margin: '1rem 0' }}>
            I hope that I said the correct name. If I was wrong, please pass me the correct name
          </p>

          <label htmlFor="userName" style={{ fontSize: '14px', fontWeight: 'bold' }}>
            Name
          </label>
          <input name="userName" onBlur={(e) => setName(e.target.value)} />
        </div>
      </div>
    </div>
  )
}
