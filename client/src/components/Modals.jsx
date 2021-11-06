import React, { useState } from 'react';
import axios from 'axios'


export const Modals = ({modal, handleModalClose, setPublicaciones }) => {
 
  const url = 'localhost://3001/eventos'

  const [inputText, setInputText] = useState({
    texto: '',
    hora: '15:55'
  })

  const handleInputChange = (e) => {
    
      setInputText( values => ({
        ...values,
        [e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      setPublicaciones( values => [ inputText,...values ])
      handleModalClose(false)
      axios.post(url, inputText)  
      // hago esto para que no se borre la hora
      setInputText( values => ({
        ...values,
        texto: ''}))
  }  
  return (
    <>
        {
            modal &&
        
              <div>
                <div
                  className="modal__background"
                  
                >
                    <div className="modal__card">
                        <nav className="modal__nav">
                            <div className="modal__title">
                                <i className="fa-solid fa-pen-to-square ml-1 mr-1"/>
                                <h4>modal</h4>
                            </div>
                            <div>
                                <button 
                                    className="btn-cerrar mr-1 pointer"
                                    onClick={handleModalClose}
                                >
                                    X
                                </button>
                            </div>
                        </nav>
                        <div className="modal__opciones mt-5 ml-5">
                            <p className="mb-1">Tipo de publicacion</p>
                            <button className="modal__btn modal__btn-publi">
                            <i className="fa-solid fa-pen-to-square mr-1" />
                                Publicacion
                            </button>
                            <button className="modal__btn">
                            <i className="fa-solid fa-bullhorn mr-1" />
                                Anuncio oficial
                            </button>
                            <button className="modal__btn">
                            <i className="fa-solid fa-hand-holding-medical mr-1" />
                                Ofrecer ayuda
                            </button>
                            <button className="modal__btn">
                            <i className="fa-solid fa-magnifying-glass mr-1" />
                                Objeto Perdido
                            </button>
                            <button className="modal__btn">
                            <i className="fa-solid fa-file-lines mr-1" />
                                Encuesta
                            </button>
                        </div>
                        <div className="modal__mensaje mt-5 ml-5">
                            <p>Mensaje</p>
                            <form className="modal__form" onSubmit={ handleSubmit }>
                                <input 
                                    className="modal__input mt-1"
                                    placeholder="ingresa el mensaje"
                                    name="texto"
                                    value={ inputText.texto}
                                    onChange={ handleInputChange }
                                    autoComplete="off"
                                />
                                <button 
                                    className="modal__btn modal__btn-publi mt-1" 
                                    type='submit'
                                >
                                    Publicar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
              </div>
        }
    </>
  );
};

