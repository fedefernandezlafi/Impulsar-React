import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin} from "react-icons/fa";
import { Formik } from "formik"
import { schema } from "./schema"
import './Contacto.scss'

export const Contacto = () => {
    return(
        <section id="sectionContacto" className="section_contacto">
            <h2 id="contactoTitle" className="h2">
                CONTACTATE CON EL EQUIPO
            </h2>
            <article className="contacto_redes_container">
                <div className="contacto_redes">
                    <a href="https://www.facebook.com/Impulsardev/" type="button" className="contacto_redes_anchord" target="_blank">
                        <FaFacebook/>
                    </a>
                    <a href="https://instagram.com/impulsardev?igshid=YmMyMTA2M2Y=" type="button" className="contacto_redes_anchord" target="_blank">
                        <FaInstagram/>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5492616307131" type="button" className="contacto_redes_anchord" target="_blank">
                        <FaWhatsapp/>   
                    </a>
                    <a href="https://www.linkedin.com/in/impulsar-dev-solutions-030bb3240/" type="button" className="contacto_redes_anchord" target="_blank"> 
                        <FaLinkedin/> 
                    </a>
                </div>
            </article>
            <Formik
                initialValues={{
                    nombre : "",
                    mail: "",
                    telefono: ""
                }}
                validationSchema={schema}
            >
                {
                    (formik) => (
                        <form action="https://formspree.io/f/xoqrplko" id="contactoFormulario" className="contacto_formulario" method="post" enctype="">
                            <div id="formularioContenedorDatos" className="formulario_contenedor_datos">
                                <h3 className="h3">DATOS DE CONTACTO</h3>
                                <div className="mb-3 separador-leve contenedor_inputs">
                                    <label for="email" name="_replyto" className="form-label">Email</label>
                                    <input 
                                        className="section__formulario__contenedor__form-input" 
                                        type="email" 
                                        name="email" 
                                        placeholder="Ejemplo: contacto@impulsardev.com.ar" 
                                        id="correo" 
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                    />
                                    {formik.errors.email && <p className="alert alert-danger">{formik.errors.email}</p>}
                                    <br/>
                                </div>
                                <div className="mb-3 separador-leve contenedor_inputs">
                                    <label for="nombre" className="form-label">Nombre</label>
                                    <input 
                                        className="section__formulario__contenedor__form-input" 
                                        type="text" 
                                        name="nombre" 
                                        placeholder="Escribe tus nombres" 
                                        onChange={formik.handleChange}
                                        value={formik.values.nombre}
                                    />
                                    {formik.errors.nombre && <p className="alert alert-danger">{formik.errors.nombre}</p>}
                                    <br/>
                                </div>
                                <div className="mb-3 separador-leve contenedor_inputs">
                                    <label for="telefono" className="form-label">Teléfono</label>
                                    <input 
                                        className="section__formulario__contenedor__form-input" 
                                        type="tel" 
                                        name="telefono" 
                                        placeholder="+549 261 6307131"
                                        onChange={formik.handleChange}
                                        value={formik.values.telefono}
                                    />
                                    {formik.errors.telefono && <p className="alert alert-danger">{formik.errors.telefono}</p>}
                                    <br/>
                                </div>
                            </div>
                            <div id="formularioContenedorTextarea" className="formulario_contenedor_textarea">  
                                <h3 className="h3">¡ENVÍANOS TU MENSAJE!</h3>
                                <div className="mb-3 contenedor_inputs">
                                    <textarea 
                                        className="form-control textarea" 
                                        placeholder="En breve te respondemos 😉" 
                                        name="message" 
                                        id="mensaje" 
                                        rows="3" 
                                        onChange={formik.handleChange}
                                        value={formik.values.message}
                                    >
                                    </textarea>
                                </div>
                                <div id="contenedorBotonFormulario" className="contenedor_btn_formulario">
                                    <button type="submit" className="btn btn_formulario">Enviar mensaje</button>
                                </div>
                            </div>
                        </form>
                    )
                }
            </Formik>            
        </section>
    )
}