import React from 'react'
import './terminoscondiciones.css'
import NavBar from "../UI/NavBar/NavBar";
import Footer from "../UI/Footer/Footer";
import Fondo from '../../assets/images/Fondo.jpg'

export default function terminoscondiciones() {
    return (
        <div className="terminoscondiciones">
            <NavBar searchHidden={true} />

            <div className='header'>
                <div className='encabezado'>
                    <h2 className="titulo">Terminos y Condiciones</h2>
                </div>

            </div>
            <div className='background' style={{ backgroundImage: `url(${Fondo})` }}></div>
            <div className='tc-content'>
            <div className='info'>
                <h3 className='sub-seccion'>
                    1-Aceptación
                </h3>
                <h1 className='TyC-text'>
                En el presente documento se establecen los términos y condiciones de Sherlock Homes, que serán de aplicación al acceso y uso por parte del Usuario de esta página web. Les rogamos lean atentamente el presente Contrato. 
                Al acceder, consultar o utilizar el Sitio Web, los Usuario aceptan cumplir los términos y condiciones establecidos en este Contrato. En caso de que usted no acepte quedar vinculado por los presentes términos y condiciones, no podrá acceder a, ni utilizar, el Sitio Web. 
                Sherlock Homes se reserva el derecho de actualizar el presente Contrato siempre que lo considere oportuno. En consecuencia, recomendamos al Usuario revisar periódicamente las modificaciones efectuadas al Contrato.
                El presente Sitio Web está dirigido exclusivamente a personas residentes en Chile. Los Usuarios residentes o domiciliados en otro país que deseen acceder y utilizar el Sitio Web, lo harán bajo su propio riesgo y responsabilidad, por lo que deberán asegurarse de que dichos accesos y/o usos cumplen con la legislación aplicable en su país.
                </h1>

                <h3 className='sub-seccion'>
                    2-Requisitos Relativos al Usuario
                </h3>
                <h1 className='TyC-text'>
                El Sitio Web y los servicios relacionados con el mismo se ofrecen a los Usuarios que tengan capacidad legal para otorgar contratos legalmente vinculantes según la legislación aplicable. 
                Los menores no están autorizados para utilizar el Sitio Web. Si usted es menor de edad, por favor, no utilice esta web. 
                </h1>

                <h3 className='sub-seccion'>
                    3-Licencia
                </h3>
                <h1 className='TyC-text'>
                Todo el material mostrado u ofrecido en el Sitio Web, entre otros ejemplos, el material gráfico, los documentos, textos, imágenes, sonido, video, audio, las ilustraciones, el software y el código HTML (en conjunto, el “Contenido”), es de  exclusiva propiedad de SH o de las empresas que facilitan dicho material. 
                </h1>

                <h3 className='sub-seccion'>
                    4-Información facilitada por el usuario
                </h3>
                <h1 className='TyC-text'>
                El Sitio Web ofrece al Usuario una página recopilatoria de anuncios.
                El Usuario reconoce y acepta que SH es solamente una pagina de recopilación a través del cual los usuarios pueden encontrar avisos inmobiliarios más facilmente. SH no comprueba ni controla la Información del Usuario. En consecuencia, SH no asume garantía alguna en cuanto a la fiabilidad, precisión, integridad, validez o veracidad de la Información remitida por los usuarios. 
                SH se reserva el derecho de, a su libre JUICIO, eliminar, retirar, negarse a reflejar o bloquear toda Información del Usuario que SH considere como inaceptable. En caso de que SH reciba alguna notificación sobre la inaceptabilidad de determinada información facilitada por los usuarios, SH podrá, con total discrecionalidad, investigar dicha información.
                El Usuario asume y acepta que SH podrá conservar copia de la Información del Usuario, y revelar dicha información a terceros si lo considera necesario para:
                <h1 className='TyC-text'>
                (i) proteger la integridad del Sitio Web;
                </h1>
                <h1 className='TyC-text'>
                (ii) proteger los derechos de RH;
                </h1>
                <h1 className='TyC-text'>
                (iii) cumplir una orden judicial;
                </h1>
                <h1 className='TyC-text'>
                (iv) cumplir cualquier trámite legal;
                </h1>
                <h1 className='TyC-text'>
                (v) hacer valer los derechos y acciones que asisten a RH a tenor de este Contrato; y
                </h1>
                <h1 className='TyC-text'>
                (vi) satisfacer cualquier petición relativa a la infracción de derechos de terceros.
                </h1>
                </h1>

                <h3 className='sub-seccion'>
                    5-Prohibición General
                </h3>
                <h1 className='TyC-text'>
                Al acceder a y utilizar el Sitio Web, el Usuario se compromete a NO:
                </h1>
                <h1 className='TyC-text'>
                (a) incumplir todas las leyes, reglamentos y normas aplicables a nivel local, estatal, provincial, nacional (Chile), así como cualquier otra legislación aplicable.
                </h1>
                <h1 className='TyC-text'>
                (b) infringir los derechos de propiedad intelectual y de privacidad, entre otros, los derechos de patente (copyright), los derechos sobre la base de datos, las marcas registradas o el know how de terceros;
                </h1>
                <h1 className='TyC-text'>
                (c) descargar, enviar, transmitir o almacenar material que:
                sea ilegal, ofensivo, difamatorio, fraudulento, engañoso, que induzca a error, dañino, amenazador, hostil, obsceno o censurable;
                infrinja las obligaciones contractuales o de confidencialidad del Usuario;
                perjudique o interfiera en las aplicaciones normales del Sitio Web, como el envío o la transmisión de virus, gusanos o troyanos, el envío continuado de material repetido o el envío de archivos desacostumbradamente grandes; o
                que no esté permitido por SH, como, por ejemplo, material publicitario no autorizado, material promocional no solicitado, “correo basura”, “spams”, “cartas en cadena”, mensajes de venta directa piramidal, franquicias, material de distribución, de asociación a un club, contratos de venta o cualquier otro material inaceptable;
                </h1>
                <h1 className='TyC-text'>
                (d) vulnerar los derechos personales y de privacidad de terceros abusando del Contenido, como, por ejemplo, acosando o molestando continuadamente a dichas personas enviándoles correos electrónicos no solicitados, o recabando información de carácter personal;
                </h1>
                <h1 className='TyC-text'>
                (e) contravenir, o intentar contravenir, las medidas de seguridad del Sitio Web;
                </h1>
                <h1 className='TyC-text'>
                (f) utilizar cualquier aparato, procedimiento o mecanismo como, por ejemplo, spiders y robots de rastreo, para localizar, rescatar, buscar, o acceder al Sitio Web o al Contenido, sin el previo consentimiento por escrito de parte de SH;
                </h1>
                <h1 className='TyC-text'>
                (g) acceder o intentar acceder a la cuenta o al login de las terceras personas o empresas indicadas en el Sitio Web;
                </h1>
                <h1 className='TyC-text'>
                (h) hacerse pasar por otra persona o empresa;
                </h1>
                <h1 className='TyC-text'>
                (i) utilizar el Sitio Web de forma no autorizada o para alguna actividad delictiva;
                </h1>
                <h1 className='TyC-text'>
                (l) falsificar la información de cabecera en el correo electrónico
                </h1>
            </div>
            </div>
            <Footer />
        </div>
    );
}