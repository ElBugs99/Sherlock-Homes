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

           <div className="registro-form-datos">
            <div>
                <h4 className="Titulo">Datos de Usuario</h4>
                
                <input className="form-input-rg" placeholder="Nombre Usuario" type="text" {...register('usuario', {
                    required: true,
                    maxLength: 10,
                    minLength: 4,
                    pattern:/^(?=.*[0-9])[a-zA-Z0-9]{4,}$/
                })}/>
                <div className="validacion">
                {errors.usuario?.type === 'required' && <p>Este campo no puede estar vacio</p>}
                {errors.usuario?.type === 'maxLength' && <p>El maximo de caracteres es 10</p>}
                {errors.usuario?.type === 'minLength' && <p>El minimo de caracteres es 4</p>}
                {errors.usuario?.type === 'pattern' && <p>Debe contener por lo menos un numero</p>}
                </div>
                 
            </div>
            <div>
                
                <input className="form-input-rg" placeholder="Correo" type="email" {...register('email',{
                    required: true
                })}/>
            </div>
            <div>
                
                <input className="form-input-rg" placeholder="Contraseña" type="password" {...register('password',{
                    required: true,
                    pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
                    maxLength: 8,
                    minLength:5
                })}/>
                <div className="validacion">
                {errors.password?.type === 'required' && <p>Este campo no puede estar vacio</p>}
                {errors.password?.type === 'maxLength' && <p>El maximo de caracteres es 8</p>}
                {errors.password?.type === 'minLength' && <p>El minimo de caracteres es 5</p>}
                {errors.password?.type === 'pattern' && <p>Debe contener por lo menos un numero, una mayuscula y un caracter especial</p>}
                </div>
            </div>
            <div>
                
                <input className="form-input-rg" placeholder="Repite la contraseña" type="password" {...register('password2', {
                    required: true,
                    validate: (value) => value === register.password
                    
                })}/>
                <div className="validacion">
                {errors.password2?.type && <p> La contraseña no coincide</p>}
                </div>
            </div>
            <div>
                <label className="Titulo" > Acepta los Terminos y Condiciones
                <input className="caja"  type="checkbox" {...register('terminosYcondiciones',{
                    required: true
                })}></input>
                </label>
            </div>
            </div>
            <input className="submit-rg" type="submit" value="Enviar"/>
            <a className="yatengoCuenta" href="/login">Ya tengo una cuenta</a>
        </form>


        <div className='right-section-rg'>
        <Carrousel />
        </div>
    </div>
);










}