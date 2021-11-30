import React from 'react';
import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="columna left">
                <h2>Complete el siguiente formulario</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre"/>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="email"/>
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type="text" name="telefono"/>
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name="mensaje"></textarea>
                    </p>
                    <p className="centrar"><input type="submit" value="Enviar"/></p>

                </form>

            </div>
            <div className="columna right">
                <h2>Otras vias de contacto</h2>
                <p>Tambien puede contactarse con nosotros usando los isguientes medios:</p>
                <ul>
                    <li>Telefono: 12312311</li>
                    <li>Email: </li>
                    <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
                    {/* <li>Facebook</li> */}

                    <li><a href="https://www.twitter.com" target="_blank">Twitter</a></li>
                    {/* <li>Twitter</li> */}

                    <li><a href="https://www.skype.com" target="_blank">Skype</a></li>
                    {/* <li>Skype</li> */}

                    <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
                    {/* <li>Instagram</li> */}
                </ul>
            </div>
            <div className="mapa">
                <iframe src="https://maps.google.com/maps?q=222,%20avenida%20corrientes,%20buenos%20aires&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                </div>

        </main>

    );

}
export default ContactoPage;