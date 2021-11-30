import React from 'react';
import '../styles/components/pages/NosotrosPage.css'

const NosotrosPage = (props) => {
    return (
        <section className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Somos una empresa familiar fundada en 1976 que, desde 1986, nos dedicamos a la fabricación y comercialización de la marca Harapos. Harapos es una marca de reconocida trayectoria de ropa informal, calzado y accesorios para hombres y mujeres.
                    Los productos de Harapos son reconocidos por su excelente calidad y terminación a un precio justo.
                    Desde sus orígenes, la empresa se destacó en el diseño, confección y venta de productos básicos , llegando a posicionarse como líder en ese segmento del mercado textil. Para lograrlo, la empresa invierte en nuevas tecnologías,
                    apuesta al crecimiento de su gente y cumple con los más altos estándares internacionales de calidad y diseño.
                </p>
            </div>

            <h2>Staff</h2>
            <div className="personas">
                <div className="persona">
                    <img src="images/nosotros/nosotros1.png" width="75" alt="Juan" />
                    <h5>Brad Brown</h5>
                    <h6>Gerente General</h6>
                    <p>45 años de edad, lleva 15 años en la empresa, ha logrado llevar a cabo todos sus objetivos, y superado las expectativas
                    </p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/nosotros2.png" width="75" alt="Tomy" />
                    <h5>Tomy Kull</h5>
                    <h6>Diseñador</h6>
                    <p>50 años de edad, lleva 10 años en la empresa, Uno de los referentes de la moda internacional, con mas de 30 años  en el rubro
                    </p>
                </div><div className="persona">
                    <img src="images/nosotros/nosotros3.png" width="75" alt="Katy" />
                    <h5>Katy Mendez</h5>
                    <h6>Diseñadora</h6>
                    <p>26 años de edad, lleva 8 años en la empresa, ha logrado que la marca incremente en un 100% sus ventas, diseños frescos
                    </p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/nosotros4.png" width="75" alt="Victoria" />
                    <h5>Victoria Sur</h5>
                    <h6>Diseñadora</h6>
                    <p>36 años de edad, lleva 7 años en la empresa, sus diseños juveniles han revolucionado el mercado, trayendo nuevos clientes
                    </p>
                </div>
            </div>
       
        </section >
    );
}
export default NosotrosPage;