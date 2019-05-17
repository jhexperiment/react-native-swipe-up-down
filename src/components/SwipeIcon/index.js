import React, { Component } from 'react';
import { Image, View, Animated } from 'react-native';
import images from '../../assets/images';

export default class SwipeIcon extends Component {
  constructor(props) {
    super(props);
    console.log('SwipeIcon props', props)
    this.darkIcon = !!props.darkIcon;


    this.state = {
      icon: this.darkIcon ? images.minus_dark : images.minus,
      showIcon: false
    };


    this.style = props.style || {};
  }
  componentDidMount() {
    this.props.hasRef && this.props.hasRef(this);
  }

  toggleShowHide(val) {
    this.setState({ showIcon: val });
  }

  render() {
    const { icon, showIcon } = this.state;
    
    return (
      <View
        style={[
          {
            alignItems: 'center',
            height: 10,
            marginBottom: 5
          },
          this.style
        ]}
      >
        {showIcon && (
          <Image
            source={icon}
            style={{
              width: 35,
              height: ( (icon === images.minus) || (icon === images.minus_dark) ) ? 5 : 10
            }}
          />
        )}
      </View>
    );
  }
}
