import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'


const Navbar = (props) => {
    const navigate = useNavigate()

    const cerrarSesion = () => {
        auth.signOut()
            .then(() => {
                navigate("/login")
            })
    }

    return (
        <div className='navbar navbar-dark bg-dark mb-4'>
            <Link className='navbar-brand ms-3' to="/">Inicio</Link>
            <div>
                <div className='d-flex'>
                    {
                        props.firebaseUser !== null && (
                            <Link to="/admin" className="btn btn-dark mr-3">Crear/Consultar</Link>
                        )
                    }
                    {
                        props.firebaseUser !== null ? (
                            <button className="btn btn-dark mr-3"
                                onClick={() => cerrarSesion()}
                            >Cerrar Sesión</button>
                        ) : (
                            <Link to="/login" className="btn btn-dark mr-3">Login</Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar