import React from 'react';
import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/portada.jpg" alt="avion" width="100%" />

            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>
                    Nuestra misión es vestir a los jóvenes y adultos con productos de moda,
                     calidad e innovación a un precio
                     justo, creando valor para los accionistas, colaboradores, clientes, 
                     proveedores y la comunidad, siendo responsables con el medio ambiente. 
                    </p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios    </h2>
                    <div className="testimonio">
                        <span className="cita">Excelente indumentaria! </span>
                        <span className="autor">Juan Perez</span>
                    </div>
                </div>  
            </div>
        </main>

    );

}
export default HomePage;