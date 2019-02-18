import React, { Component } from 'react'

class Placeholder extends Component {
  constructor(props) {
  super(props)

    this.state = {
      images: [
        'https://res.cloudinary.com/df0ll615k/image/upload/v1550511321/kary-background-crop.jpg',
        'https://res.cloudinary.com/df0ll615k/image/upload/v1550512615/ph-image3.jpg',
        'https://res.cloudinary.com/df0ll615k/image/upload/v1550512612/ph-image4.jpg',
        'https://res.cloudinary.com/df0ll615k/image/upload/v1550512610/ph-image1.jpg',
        'https://res.cloudinary.com/df0ll615k/image/upload/v1550512609/ph-image2.jpg'

      ],
      imageCounter: 0,
      opacity: 0,
      climb: true
    }

    this._handleImageChange = this._handleImageChange.bind(this)
    this._handleImageFade = this._handleImageFade.bind(this)
  }

  componentDidMount() {
    const { _handleImageChange, _handleImageFade } = this

    setInterval(_handleImageChange, 7100)

    setInterval(_handleImageFade, 50)
  }

  _handleImageChange() {
    const { imageCounter, images } = this.state

    images[imageCounter + 1] === undefined ?
    this.setState({ imageCounter: 0 }) :
    this.setState({ imageCounter: imageCounter + 1 })
  }

  _handleImageFade() {
    const { opacity, climb } = this.state

    if (opacity >= 0.7 && climb === true) {
      this.setState({climb: false, opacity: opacity - 0.01})
    } else if (opacity < 0) {
      this.setState({climb: true, opacity: opacity + 0.01})
    } else if (climb === true) {
      this.setState({opacity: opacity + 0.01})
    } else if (climb === false){
      this.setState({opacity: opacity - 0.01})
    }
  }

  render() {
    const { images, imageCounter, opacity } = this.state

  const styles = {
    image: {
      padding: '0px',
      opacity: opacity
    }
  }

    return(
      <div>
        <img
          src={images[imageCounter]}
          style={styles.image}
        />
      </div>
    )

  }
}

export default Placeholder
