import React from 'react';
import '../../styles/components/layout/Header.css'

const Header = (props) => {
    return (
        <header>
            <div className='holder'>
                <img src="images/logo.png" alt="transportes x" width="100" />
                <h1>HARAPOS</h1>
                {/* <p>Ropa Urbana</p> */}

            </div>

            {/* <section >
                <img src="images/portada1.jpg" alt="" width="100%" />

            </section> */}
        </header>

    )

}

export default Header;