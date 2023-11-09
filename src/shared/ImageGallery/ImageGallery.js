import React from "react";
import ImageGallery from "react-image-gallery";

export class MyImageGallery extends React.Component {
  render() {
    const images = this.props.images
      return <ImageGallery items={images} autoPlay={true}/>;
    }
  }