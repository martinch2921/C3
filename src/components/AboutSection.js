import React from 'react';
import AboutUs from '../img/AboutUs.png'
import {Link} from 'react-router-dom';
import { About, Description, Image, Hide } from '../styles';


const AboutSection = () => {
    return(
        <About>
            <Description>
                <div className= "title">
                    <Hide>
                        <h2>Trabajamos</h2>
                    </Hide>
                    <Hide>
                        <h2>para<span> crear</span> tus sueños</h2>
                    </Hide>
                    <Hide>
                        <h2>realidad.</h2>
                        <p>Ofrecemos desarrollo de software de aplicaciones móviles y web de alta calidad para satisfacer las demandas únicas de nuestros clientes. Usamos toda nuestra experiencia y mejores prácticas para entregar soluciones exitosas que se ajustan a sus requisitos.
</p>
                        <button> <Link to="/contact" style={{ textDecoration: 'none' }}>Contáctanos</Link></button>
                    </Hide>
                </div>
            </Description>
            <Image>
                 <img src={AboutUs} alt="woman analysis"/>
            </Image>
        </About>

    );
};



export default AboutSection;