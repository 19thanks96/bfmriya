import React from "react";
import ImageGallery from "react-image-gallery";
import foto from '../../../../../imgs/mriaText-300x300.jpg'
import photo from './img/aid-clothes.jpg'
import photo2 from './img/saint-mykolai-and-children.jpg'
import photo3 from './img/save-children-in-school.jpg'
import photo4 from './img/congratulation-newyear.jpg'
import photo5 from './img/camouflage.jpg'
import photo6 from './img/near-herson.jpg'
import photo7 from './img/mria-ashan-300x300.jpg'
import photo8 from './img/aid-for-people.jpg'
import photo9 from './img/aid-heavy-millitary.jpg'
import photo10 from './img/aid-old-woman.jpg'

const images = [
    {
        original: foto,
        originalAlt: 'slogan of Ukraine volunteers',
        originalTitle : 'slogan of Ukraine volunteers'
    },
    {
        original: photo,
        originalAlt: 'aid clothes',
        originalTitle : 'aid clothes'
    },
    {
        original: photo2,
        originalAlt: 'saint mykolai and children',
        originalTitle : 'saint mykolai and children'
    },
    {
        original: photo3,
        originalAlt: 'save the children at school and their school',
        originalTitle : 'save the children at school and their school'
    },
    {
        original: photo4,
        originalAlt: 'congratulation with new year',
        originalTitle : 'congratulation with new year'
    },
    {
        original: photo5,
        originalAlt: 'help ZSU in camouflage',
        originalTitle : 'help ZSU in camouflage'
    },
    {
        original: photo6,
        originalAlt: 'aid near Herson',
        originalTitle : 'aid near Herson'
    },
    {
        original: photo7,
        originalAlt: 'work with big corporation like Ashan',
        originalTitle : 'work with big corporation like Ashan'
    },
    {
        original: photo8,
        originalAlt: 'aid for old people',
        originalTitle : 'aid for old people'
    },
    {
        original: photo9,
        originalAlt: 'aid heavy millitary',
        originalTitle : 'aid heavy millitary'
    },
    {
        original: photo10,
        originalAlt: 'aid old humans',
        originalTitle : 'aid old humans'
    },

]

export class PhotoDesk extends React.Component {
    render() {
      return <ImageGallery items={images} className='huyeta'/>;
    }
  }