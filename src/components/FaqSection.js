import React from 'react';
import styled from 'styled-components';
import {About} from '../styles';
import Toggle from './Toggle';



const FaqSection = () => {
    
    return (
        <Faq>

            <h2>Preguntas <span>frecuentes</span></h2>
            <Toggle title="¿Qué incluye?">
            <div className="question"> 
                
                
                <div className="answer">
                    <p>Cualquier paquete incluye el desarrollo web, consultorías y diseño web. No incluye creación de marca, branding, marketing o creación de contenido.  </p>                  
                    <p>
                    El aspecto más importante del diseño es comunicar información con éxito. El mensaje en sí lo determina usted, pero el diseño es un factor vital en la forma en que el público objetivo percibe el mensaje. Un buen consejo es la mitad de la batalla. Como cliente, simplemente no puede saber todo sobre algo que no es su negocio principal. Sin embargo, nuestro negocio principal es precisamente conocer temas como: Desarrollo Web, Posicionamiento, Usabilidad,  Diseño Adaptable, SEO, SEA, Estadísticas y Analíticas Web.
                        </p>                    
                </div>
            </div>
            </Toggle>

            <Toggle title="Importancia de digitalizar tu negocio">
            <div className="question">
                
               
                <div className="answer">
                    <p>Hoy en día los clientes buscan un negocio en la web.</p>
                    <p>
                    La transformación digital ayuda a una organización a mantenerse al día con las demandas emergentes de los clientes y, por lo tanto, a sobrevivir de cara al futuro. Permite a las empresas competir mejor en un entorno económico que cambia constantemente en respuesta a la evolución de la tecnología. 86% de los usuarios prefieren no descargar una aplicación en su teléfono. Con las aplicaciones web, los usuarios simplemente inician sesión y la utilizan. No tienen que preocuparse por descargar e instalar, esperando que funcione. Es de uso instantáneo.
                        </p>
                </div>       
            </div>
            </Toggle>

            <Toggle title="Métodos de pago">
            <div className="question">
                
                <div className="answer">
                    <p>La seguridad y disponibilidad con la facilidad de los pagos es importante para una mejor experiencia.</p>
                    <p>
                        Los pagos se pueden realizar por diversas plataformas, incluyendo tarjetas de crédito y transferencias.
                        </p>
                </div>
            </div>
            </Toggle>

            <Toggle title="Tipos de productos">
            <div className="question">
                
                <div className="answer">
                    <p>Contamos con una gran variedad de productos de e-commerce hasta páginas con herramientas complejas de análisis.</p>
                    <p>
                    ¡Sí, también ayudamos a las marcas personales! Les ayudamos a crear una presencia web destacada. La construcción del mejor sitio web de marca personal comienza con su capacidad para representar claramente su mensaje, propósito y misión, tanto visualmente como a través de una excelente copia y contenido.
                        </p>
                </div>
            </div>
            </Toggle>

            <Toggle title="Satisfacción del cliente">
            <div className="question">
                
                <div className="answer">
                    <p>Nuestros paquetes se adaptan a lo que necesita tu negocio. </p>
                    <p>
                    Para llevar tu negocio a un nuevo nivel, no se limitan a métodos estándar. Este enfoque en el diseño y desarrollo web nos ayuda a encontrar soluciones especificas para su negocio. En pocas palabras, creamos herramientas de desarrollo.
                        </p>
                </div>
                
            </div>
            </Toggle>
        </Faq>

    );
};

const Faq = styled(About)`
display: block;
span{
    display: block;
}
h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
.faq-line {
    height: 0.5rem;
    background: #90e0ef;
    margin-bottom: 3rem;
}
.question{
    padding: 3rem 0rem;
    cursor: pointer;
}
.answer{
    padding: 2rem 0rem;
    p{
        padding: 1rem 0rem;
    }
}
`

export default FaqSection;