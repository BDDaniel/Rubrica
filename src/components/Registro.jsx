import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { db } from '../firebase'

const Registro = (props) => {
    const [descripcion, setDescripcion] = React.useState('')
    const [ubicacion, setUbicacion] = React.useState('')
    const [categoria, setCategoria] = React.useState('')
    const [servicio, setServicio] = React.useState('')
    const [id, setId] = React.useState('')
    const [lista, setLista] = React.useState([])
    const [error, setError] = React.useState(null)
    const [modoEdicion, setModoEdicion] = React.useState(false)
    const [dropdownCat, setDropdownCat] = React.useState(false)
    const [dropdownSer, setDropdownSer] = React.useState(false)
    const [mantenimientoInmuebles, setMantenimientoInmuebles] = React.useState(false)
    const [mantenimientoMuebles, setMantenimientoMuebles] = React.useState(false)
    const [otrosServicios, setOtrosServicios] = React.useState(false)
    const [cat1ser1, setCat1Ser1] = React.useState(false)
    const [cat1ser2, setCat1Ser2] = React.useState(false)
    const [cat1ser3, setCat1Ser3] = React.useState(false)
    const [cat1ser4, setCat1Ser4] = React.useState(false)
    const [cat1ser5, setCat1Ser5] = React.useState(false)
    const [cat2ser1, setCat2Ser1] = React.useState(false)
    const [cat2ser2, setCat2Ser2] = React.useState(false)
    const [cat2ser3, setCat2Ser3] = React.useState(false)
    const [cat2ser4, setCat2Ser4] = React.useState(false)
    const [cat3ser1, setCat3Ser1] = React.useState(false)
    const [cat3ser2, setCat3Ser2] = React.useState(false)
    const [cat3ser3, setCat3Ser3] = React.useState(false)

    const abrirCerrarDropdownCat = () => {
        setDropdownCat(!dropdownCat);
    }

    const abrirCerrarDropdownSer = () => {
        setDropdownSer(!dropdownSer);
    }

    const resetearDropdown = () => {
        setMantenimientoInmuebles(false);
        setMantenimientoMuebles(false);
        setOtrosServicios(false);
        setCat1Ser1(false);
        setCat1Ser2(false);
        setCat1Ser3(false);
        setCat1Ser4(false);
        setCat1Ser5(false);
        setCat2Ser1(false);
        setCat2Ser2(false);
        setCat2Ser3(false);
        setCat2Ser4(false);
        setCat3Ser1(false);
        setCat3Ser2(false);
        setCat3Ser3(false);
        setCategoria('');
        setServicio('')
    }

    const cambiarCat1 = () => {
        setMantenimientoInmuebles(!mantenimientoInmuebles);
        setMantenimientoMuebles(false);
        setOtrosServicios(false);
        setCat1Ser1(false);
        setCat1Ser2(false);
        setCat1Ser3(false);
        setCat1Ser4(false);
        setCat1Ser5(false);
        setCat2Ser1(false);
        setCat2Ser2(false);
        setCat2Ser3(false);
        setCat2Ser4(false);
        setCat3Ser1(false);
        setCat3Ser2(false);
        setCat3Ser3(false);
        setCategoria('Mantenimiento Inmuebles')
    }

    const cambiarCat2 = () => {
        setMantenimientoMuebles(!mantenimientoMuebles);
        setMantenimientoInmuebles(false);
        setOtrosServicios(false);
        setCat1Ser1(false);
        setCat1Ser2(false);
        setCat1Ser3(false);
        setCat1Ser4(false);
        setCat1Ser5(false);
        setCat2Ser1(false);
        setCat2Ser2(false);
        setCat2Ser3(false);
        setCat2Ser4(false);
        setCat3Ser1(false);
        setCat3Ser2(false);
        setCat3Ser3(false);
        setCategoria('Mantenimiento Muebles')
    }

    const cambiarCat3 = () => {
        setOtrosServicios(!otrosServicios);
        setMantenimientoInmuebles(false);
        setMantenimientoMuebles(false);
        setCat1Ser1(false);
        setCat1Ser2(false);
        setCat1Ser3(false);
        setCat1Ser4(false);
        setCat1Ser5(false);
        setCat2Ser1(false);
        setCat2Ser2(false);
        setCat2Ser3(false);
        setCat2Ser4(false);
        setCat3Ser1(false);
        setCat3Ser2(false);
        setCat3Ser3(false);
        setCategoria('Otros servicios')
    }

    const seleccionarCat1Ser1 = () => {
        setCat1Ser1(!cat1ser1);
        setCat1Ser2(false);
        setCat1Ser3(false);
        setCat1Ser4(false);
        setCat1Ser5(false);
        setServicio('Baños')
    }

    const seleccionarCat1Ser2 = () => {
        setCat1Ser1(false);
        setCat1Ser2(!cat1ser2);
        setCat1Ser3(false);
        setCat1Ser4(false);
        setCat1Ser5(false);
        setServicio('Cielo Raso')
    }

    const seleccionarCat1Ser3 = () => {
        setCat1Ser1(false);
        setCat1Ser2(false);
        setCat1Ser3(!cat1ser3);
        setCat1Ser4(false);
        setCat1Ser5(false);
        setServicio('Eléctrico')
    }

    const seleccionarCat1Ser4 = () => {
        setCat1Ser1(false);
        setCat1Ser2(false);
        setCat1Ser3(false);
        setCat1Ser4(!cat1ser4);
        setCat1Ser5(false);
        setServicio('Pared')
    }

    const seleccionarCat1Ser5 = () => {
        setCat1Ser1(false);
        setCat1Ser2(false);
        setCat1Ser3(false);
        setCat1Ser4(false);
        setCat1Ser5(!cat1ser5);
        setServicio('Puerta')
    }

    const seleccionarCat2Ser1 = () => {
        setCat2Ser1(!cat2ser1);
        setCat2Ser2(false);
        setCat2Ser3(false);
        setCat2Ser4(false);
        setServicio('Aire acondicionado')
    }

    const seleccionarCat2Ser2 = () => {
        setCat2Ser1(false);
        setCat2Ser2(!cat2ser2);
        setCat2Ser3(false);
        setCat2Ser4(false);
        setServicio('Archivador')
    }

    const seleccionarCat2Ser3 = () => {
        setCat2Ser1(false);
        setCat2Ser2(false);
        setCat2Ser3(!cat2ser3);
        setCat2Ser4(false);
        setServicio('Puesto de trabajo')
    }

    const seleccionarCat2Ser4 = () => {
        setCat2Ser1(false);
        setCat2Ser2(false);
        setCat2Ser3(false);
        setCat2Ser4(!cat2ser4);
        setServicio('Silla')
    }

    const seleccionarCat3Ser1 = () => {
        setCat3Ser1(!cat3ser1);
        setCat3Ser2(false);
        setCat3Ser3(false);
        setServicio('Aseo')
    }

    const seleccionarCat3Ser2 = () => {
        setCat3Ser1(false);
        setCat3Ser2(!cat3ser2);
        setCat3Ser3(false);
        setServicio('Transporte')
    }

    const seleccionarCat3Ser3 = () => {
        setCat3Ser1(false);
        setCat3Ser2(false);
        setCat3Ser3(!cat3ser3);
        setServicio('Vigilancia')
    }

    React.useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const data = await db.collection(props.user.email).get()
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                setLista(arrayData);
            } catch (error) {
                console.log(error)
            }
        }
        obtenerDatos()
    }, [props])

    const guardarDatos = async (e) => {
        e.preventDefault()
        if (!categoria.trim()) {
            setError('Falta la categoria')
            return
        }
        if (!servicio.trim()) {
            setError('Falta el servicio')
            return
        }
        if (!descripcion.trim()) {
            setError('Falta la descripción')
            return
        }
        if (!ubicacion.trim()) {
            setError('Falta la ubicación')
            return
        }
        let date = new Date();
        let fecha = date.toLocaleDateString();
        try {
            const nuevoUsuario = {
                categoria, servicio, ubicacion, descripcion, fecha
            }
            const data = await db.collection(props.user.email).add(nuevoUsuario)
            setLista([
                ...lista,
                { ...nuevoUsuario, id: data.id }
            ])
        } catch (error) {
            console.log(error);
        }
        resetearDropdown();
        setDescripcion('')
        setUbicacion('')
        fecha = null
        setError(null)
    }

    const eliminarDato = async (id) => {
        try {
            await db.collection(props.user.email).doc(id).delete()
            const listaFiltrada = lista.filter((elemento) => elemento.id !== id)
            setLista(listaFiltrada)
        } catch (error) {
            console.log(error)
        }
    }

    const editar = (elemento) => {
        setModoEdicion(true)
        resetearDropdown();
        setUbicacion(elemento.ubicacion)
        setDescripcion(elemento.descripcion)
        setId(elemento.id)
    }

    const editarDatos = async (e) => {
        e.preventDefault()
        if (!categoria.trim()) {
            setError('Falta la categoria')
            return
        }
        if (!servicio.trim()) {
            setError('Falta el servicio')
            return
        }
        if (!descripcion.trim()) {
            setError('Falta la descripción')
            return
        }
        if (!ubicacion.trim()) {
            setError('Falta la ubicación')
            return
        }
        let date = new Date();
        let fecha = date.toLocaleDateString();
        try {
            await db.collection(props.user.email).doc(id).update({
                categoria, servicio, ubicacion, descripcion, fecha
            })

            const listaEditada = lista.map(
                (elemento) => elemento.id === id ? { id: id, categoria: categoria, servicio: servicio, ubicacion: ubicacion, descripcion: descripcion, fecha: fecha } : elemento
            )

            setLista(listaEditada)
            setModoEdicion(false)
            resetearDropdown();
            setDescripcion('')
            setUbicacion('')
            setId('')
            fecha = null
            setError(null)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center mt-2 mb-5">{modoEdicion ? 'Editar Requerimiento' : 'Crear Requerimiento'}</h1>
                    <form className="mb-3" onSubmit={modoEdicion ? editarDatos : guardarDatos}>
                        {
                            error ? (
                                <div class="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            ) : null
                        }
                        <Dropdown isOpen={dropdownCat} toggle={abrirCerrarDropdownCat} className="btn btn-secondary form-control mb-2 fs-4 dropdown">
                            <DropdownToggle caret>
                                {mantenimientoInmuebles ? 'MANTENIMIENTO INMUEBLES' :
                                mantenimientoMuebles ? 'MANTENIMIENTO MUEBLES' :
                                otrosServicios ? 'OTROS SERVICIOS' : 'Categorias'}
                            </DropdownToggle>

                            <DropdownMenu>
                                <DropdownItem onClick={() => cambiarCat1()}>MANTENIMIENTO INMUEBLES</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={() => cambiarCat2()}>MANTENIMIENTO MUEBLES</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={() => cambiarCat3()}>OTROS SERVICIOS</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={dropdownSer} toggle={abrirCerrarDropdownSer} className="btn btn-secondary form-control mb-2 fs-4 dropdown">
                            <DropdownToggle caret>
                                {cat1ser1 ? 'Baños' : 
                                cat1ser2 ? 'Cielo Raso' :
                                cat1ser3 ? 'Eléctrico' :
                                cat1ser4 ? 'Pared' :
                                cat1ser5 ? 'Puerta' :
                                cat2ser1 ? 'Aire acondicionado' :
                                cat2ser2 ? 'Archivador' :
                                cat2ser3 ? 'Puesto de trabajo' :
                                cat2ser4 ? 'Silla' : 
                                cat3ser1 ? 'Aseo' :
                                cat3ser2 ? 'Transporte' :
                                cat3ser3 ? 'Vigilancia' : 'Servicios'}
                            </DropdownToggle>

                            {
                                mantenimientoInmuebles ? (
                                    <DropdownMenu>
                                        <DropdownItem onClick={()=>seleccionarCat1Ser1()}>Baños</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={()=>seleccionarCat1Ser2()}>Cielo Raso</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={()=>seleccionarCat1Ser3()}>Eléctrico</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={()=>seleccionarCat1Ser4()}>Pared</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={()=>seleccionarCat1Ser5()}>Puerta</DropdownItem>
                                    </DropdownMenu>
                                ) :
                                mantenimientoMuebles ? (
                                    <DropdownMenu>
                                        <DropdownItem onClick={()=>seleccionarCat2Ser1()}>Aire acondicionado</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={()=>seleccionarCat2Ser2()}>Archivador</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={()=>seleccionarCat2Ser3()}>Puesto de trabajo</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={()=>seleccionarCat2Ser4()}>Silla</DropdownItem>
                                    </DropdownMenu>
                                ) :
                                otrosServicios && (
                                    <DropdownMenu>
                                        <DropdownItem onClick={()=>seleccionarCat3Ser1()}>Aseo</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={()=>seleccionarCat3Ser2()}>Transporte</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={()=>seleccionarCat3Ser3()}>Vigilancia</DropdownItem>
                                    </DropdownMenu>
                                )
                            }
                        </Dropdown>
                        <input type="text"
                            placeholder="Ingrese la descripción de la solicitud"
                            className="form-control mb-2 fs-4"
                            onChange={(e) => { setDescripcion(e.target.value) }}
                            value={descripcion}
                        />
                        <input type="text"
                            placeholder="Ingrese la ubicación dentro de la empresa"
                            className="form-control mb-4 fs-4"
                            onChange={(e) => { setUbicacion(e.target.value) }}
                            value={ubicacion}
                        />
                        <div className="d-grid gap-2">
                            {
                                modoEdicion ? <button className="btn btn-secondary fs-4" type="submit">Editar</button> : <button className="btn btn-secondary fs-4" type="submit">Agregar</button>
                            }
                        </div>
                    </form>
                </div>
            </div>
            <hr />
            <div className="row mb-2">
                <div className="col-12">
                    <h1 className="text-center mt-2 mb-5">Lista de Requerimientos</h1>
                    <ul className="list-group fs-4">
                        {lista.map(
                            (elemento) => (
                                <li className="list-group-item" key={elemento.id}>{elemento.categoria} | {elemento.servicio} | {elemento.descripcion} | {elemento.ubicacion} | {elemento.fecha}
                                    <button className="btn btn-success float-end mx-2"
                                        onClick={() => editar(elemento)}
                                    >Editar</button>
                                    <button className="btn btn-danger float-end mx-2"
                                        onClick={() => eliminarDato(elemento.id)}
                                    >Eliminar</button>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Registro