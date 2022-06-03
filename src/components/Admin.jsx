import React from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import Registro from './Registro'

const Admin = () => {
  const navigate = useNavigate()
  const [user, setUser] = React.useState(null)
  React.useEffect(() => {
    if (auth.currentUser) {
      console.log('Existe usuario');
      setUser(auth.currentUser)
    } else {
      console.log('No existe usuario');
      navigate("/login")
    }
  }, [navigate])

  return (
    <div>
      {
        user && (
          <div>
            <h4>Usuario: {user.email}</h4>
            <Registro user={user} />
          </div>
        )
      }
    </div>
  )
}

export default Admin