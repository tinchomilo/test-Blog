import React from 'react'
import perfil from '../images/foto.jpeg'

export const Publicaciones = ({ texto, hora }) => {
    return (
        <div className="publicaciones__main mt-5">
             <div className='publicaciones__conteiner'>
                <div className="publicaciones__header mb-1">
                <img className="publicaciones__img mr-5" src={ perfil } width="35" height="35" />
                    <div className="publicaciones__header-datos">
                        <h4>Martin Milone</h4>
                        <span>{ hora }</span>
                        <span><i className="fa-solid fa-pen-to-square ml-1 " /> publicacion</span>
                    </div>
                </div>
            
            <h4 className="publicaciones__texto mt-5 mb-5">{ texto }</h4>

             <hr/>

                <div className="publicaciones__opciones mt-1 pointer "> 
                    <div>
                        <i className="fa-solid fa-thumbs-up mr-1" />
                        <span>0</span>                       
                    </div>
                    <div>
                        <i className="fa-solid fa-hands-clapping mr-1" />
                        <span>0</span>
                    </div>    
                    <div>
                        <i className="fa-solid fa-heart mr-1" />
                        <span>0</span>
                    </div>
                    <div>
                        <i className="fa-solid fa-lightbulb mr-1" />
                        <span>0</span>
                    </div>
                    <div>
                        <i className="fa-solid fa-thumbs-down mr-1" />
                        <span>0</span>
                    </div>
                    <div>
                        <i className="fa-solid fa-clipboard mr-1" />
                        <span>0</span>
                    </div>
                 </div>
            </div>                    
        </div>
    )
    
}
