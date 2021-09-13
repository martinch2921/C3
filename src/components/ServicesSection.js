import React from 'react';
import hammer from '../img/hammer.png';
import money from '../img/money.png';
import lock from '../img/lock.png';
import shopping from '../img/shopping.png';
import { About, Description, Image } from '../styles';
import styled from "styled-components"


const ServicesSection = () => {
    return(
        <Services>
        <About>
            <Description>
                <h2> Productos de<span> alta </span> calidad</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={hammer} alt="icon"/>
                            <h3>Adaptable</h3>
                            
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={lock} alt="icon2"/>
                            <h3>Confiable</h3>
                          
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="icon3"/>
                            <h3>Económico  </h3>
                            
                        </div>
                    </Card>
                    </Cards>
                </Description>
                <Image>
                <img src={shopping} alt="shopping"/>
                </Image>
                
            </About>
            </Services>

    );
};

const Services = styled(About)`
h2{
    padding-bottom: 5rem;

    
}
p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}
`;  

const Cards = styled.div`
display: flex;
flex-wrap: wrap;
@media (max-width: 1300px) {
    justify-content: center;
  }


`;

const Card = styled.div`
 flex-basis: 20rem;
 width: 80%;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
       color: black;
      padding: 1rem;
    }
}
`;


export default ServicesSection;