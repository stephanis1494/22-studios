import React, { Component } from 'react'
import { secondaryColor, logoFont } from '../../util/theme'

class Placeholder extends Component {
  constructor(props) {
  super(props)

    this.state = {
      images: [
        'https://res.cloudinary.com/df0ll615k/image/upload/v1550511321/kary-background-crop.jpg',
        'https://res.cloudinary.com/df0ll615k/image/upload/v1550545470/ph-image5.jpg',
        'https://res.cloudinary.com/df0ll615k/image/upload/v1550512610/ph-image1.jpg',
        'https://res.cloudinary.com/df0ll615k/image/upload/v1550512609/ph-image2.jpg'

      ],
      imageCounter: 0,
      opacity: 0,
      climb: true
    }

    this._handleImageFade = this._handleImageFade.bind(this)
  }

  componentDidMount() {
    const { _handleImageFade } = this

    setInterval(_handleImageFade, 25)
  }

  _handleImageFade() {
    const { opacity, climb, images, imageCounter } = this.state

    if (opacity >= 0.85 && climb === true) {
      this.setState({climb: false, opacity: opacity - 0.005})
    } else if (opacity < 0) {
      this.setState({
        climb: true,
        opacity: opacity + 0.005,
        imageCounter: images[imageCounter + 1] === undefined ? 0 : imageCounter + 1
      })
    } else if (climb === true) {
      this.setState({opacity: opacity + 0.005})
    } else if (climb === false){
      this.setState({opacity: opacity - 0.005})
    }
  }

  render() {
    const { images, imageCounter, opacity } = this.state

    const styles = {
      container: {
        position: 'relative'
      },
      image: {
        opacity: opacity,
        position: 'absolute',
        padding: 'none',
        margin: 'none',
        pointerEvents: 'none'
      },
      centered: {
        textAlign: 'center',
        paddingTop: '400px'
      },
      logo: {
        fontFamily: logoFont,
        fontSize: '100px',
        color: secondaryColor,
        fontWeight: '300',
        marginBottom: '0px'
      },
      subHeader: {
        fontFamily: logoFont,
        color: 'lightGrey',
        fontSize: '40px',
        marginTop: '0px'
      },
      email: {
        color: secondaryColor,
        fontFamily: logoFont,
        fontSize: '25px',
        textDecoration: 'none'
      },
      icon: {
        height: '50px',
        marginTop: '20px'
      }
    }

    return(
      <div style={styles.container}>
        <img
          src={images[imageCounter]}
          style={styles.image}
          alt='background'
        />
        <div style={styles.centered}>
          <h1 style={styles.logo}> 22 Studios</h1>
          <h2 style={styles.subHeader}> Coming soon</h2>
          <a style={styles.email} href='mailto:photography@22-studios.com'> photography@22-studios.com</a>
          <br />
          <a href='https://www.instagram.com/22_._studios/' target='_blank' rel='noopener noreferrer'>
          <img
            src='https://res.cloudinary.com/df0ll615k/image/upload/v1550529258/insta-icon-green.png'
            style={styles.icon}
            alt='instagram'
          />
          </a>
        </div>
      </div>
    )

  }
}


export default Placeholder
