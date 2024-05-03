import React from "react";
import './registro.css'
import { useForm } from "react-hook-form"
import Carrousel from "../Login/RightSection/Carrousel/Carrousel";
import svgImage from '../../assets/images/greenicon.svg'
import { IoHome } from "react-icons/io5";

export default function Registro() {

    const { register,formState:{errors}, handleSubmit }= useForm();

    const onSubmit = (data) =>{
        console.log(data);
    }

return(
    <div className="registro-form">

        <form className="left-section" onSubmit={handleSubmit(onSubmit)}>
        <a href="/" class="back-button">
        <IoHome />
 
        </a>
        <div className='header'>
            <div className='header-title'>Registrate en</div>
            <div className='company-name'>
              <div className='sherlock'>Sherlock Homes</div>
              <div>
                <img className='icon' src={svgImage} alt="SVG" />
              </div>
            </div>
        </div>

           
            <div>
                <h4 className="Titulo">Datos de Usuario</h4>
                
                <input className="form-input-rg" placeholder="Nombre Usuario" type="text" {...register('usuario', {
                    required: true
                })}/>
            </div>
            <div>
                
                <input className="form-input-rg" placeholder="Correo" type="email" {...register('email',{
                    required: true
                })}/>
            </div>
            <div>
                
                <input className="form-input-rg" placeholder="Contraseña" type="text" {...register('password',{
                    required: true
                })}/>
            </div>
            <div>
                
                <input className="form-input-rg" placeholder="Repite la contraseña" type="text" {...register('password2', {
                    required: true
                })}/>
            </div>
            <div>
                <label className="Titulo" > Acepta los Terminos y Condiciones</label>
                <input  type="checkbox" {...register('terminosYcondiciones',{
                    required: true
                })}></input>
            </div>
           
            <input className="submit-rg" type="submit" value="Enviar"/>
            <a href="/login">Ya tengo una cuenta</a>
        </form>

        <div className='right-section-rg'>
        <Carrousel />
        </div>
    </div>
);










}