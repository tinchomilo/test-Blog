import React, { useEffect, useState } from 'react'
import perfil from '../images/foto.jpeg'
import { Modals } from './Modals'
import { Publicaciones } from './Publicaciones'


export const Home = () => {

    const initialState = {
        texto: 'comunidad creada',
        
    }
    const [publicaciones, setPublicaciones] = useState([initialState])

    const [modal, setModal] = useState(false)

    const handleModalOpen = () => {
        setModal(true)
    }
    
    const handleModalClose = () => {
        setModal(false)
    }

    useEffect(() => {
        // axios.get( url para traer los posteos del usuario)
    }, [publicaciones])

    return (
        <div className="home__main">
             <div className='home__conteiner mt-5 mb-5'>
                <form 
                    className="home__form"                  
                >
                    <img className="home__img mr-5" src={ perfil } width="35" height="35" />
                    <input
                    className="home__input"
                    placeholder="Quiero..."                
                    />
                </form>

             <hr/>

                <div className="home__opciones mt-5 ">
                    <button 
                        className="btn btn__publicar pointer"
                        onClick={ handleModalOpen }

                    >
                        <i className="fa-solid fa-pen-to-square mr-1" />
                        publicar
                    </button>
                    <button 
                        className="btn btn__felicitar pointer"

                    >
                        <i className="fa-solid fa-medal mr-1" />
                        felicitar
                    </button>
                    <button 
                        className="btn btn__evento pointer"

                    >
                        <i className="fa-solid fa-calendar-days mr-1" />
                        evento
                    </button>
                    <button 
                        className="btn btn__vender pointer"
                        
                    >
                        <i className="fa-solid fa-store mr-1" />
                        vender
                    </button>
                    <button 
                        className="btn btn__asist pointer"

                    >
                        <i className="fa-solid fa-stethoscope mr-1" />
                        asistencia
                    </button>
                 </div>
            </div>        
            <div>
                {
                    publicaciones?.map( elem => ( 
                        <Publicaciones 
                            key={ elem }
                            { ...elem } 
                        /> )) 
                } 
    
                <Modals 
                    modal={ modal } 
                    handleModalClose={ handleModalClose }
                    setPublicaciones={ setPublicaciones }
                    />
            
            </div>
        </div>
    )
}