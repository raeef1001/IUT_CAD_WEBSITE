import React from 'react';
import Carousel from './Carousel';
import card1 from './carouselImages/card1.svg'
import card2 from './carouselImages/card2.svg'
import card3 from './carouselImages/card3.svg'
import card4 from './carouselImages/card4.svg'
import Image from './Image';

const Main = (props) => {
   
    const imageItems = [
        <Image className ='h-full w-full ' src={props.data.data[0].attributes.image.data.attributes.formats.small.url} alt='Card1' />,
        <Image className ='h-full w-full' src={props.data.data[1].attributes.image.data.attributes.formats.small.url} alt='Card1' />,
        <Image className ='h-full w-full' src={props.data.data[2].attributes.image.data.attributes.formats.small.url} alt='Card1' />,
        <Image className ='h-full w-full' src={props.data.data[0].attributes.image.data.attributes.formats.small.url} alt='Card1' />,
       
    ]
    
    return (
       
       

  
       
    
     
        
         
    
          <Carousel items={imageItems} />
    
      
    );
};

export default Main;