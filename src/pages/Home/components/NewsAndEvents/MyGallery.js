import React from "react";
import ImageGallery from "react-image-gallery";
import foto from '../../../../imgs/hands-with-papper-humans.jpg'
import foto2 from '../../../../imgs/save-lifes-zsu.jpg'
import foto3 from '../../../../imgs/saint-mykolai.jpg'

import './NewsAndEvents.scss'



const images = [
    {
        original: foto,
        originalAlt: 'hands with papper humans',
        description : 'Щомісячна допомога Квітень',
        originalTitle : 'Щомісячна допомога Квітень'
    },
    {
        original: foto2,
        originalAlt: 'save lifes zsu',
        originalTitle  : 'Допоможем ЗСУ',
    },
    {
        original: foto3,
        originalAlt: 'saint mykolai gives gift',
        originalTitle  : 'Святий Миколай діточок привітай!',
    },
];

export class MyGallery extends React.Component {
  render() {
    return <ImageGallery 
      items={images} 
    autoPlay={true}/>;
  }
}