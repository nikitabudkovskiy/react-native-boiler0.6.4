import React, { PureComponent } from 'react'
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps, ViewStyle,
} from 'react-native'
import {
  styleSheetCreate,
  style, Color, windowWidth, fonts, styleSheetFlatten,
} from 'app/system/helpers'

interface IProps extends TouchableOpacityProps {
  text: string
  styleContainer: ViewStyle
}

interface IState {

}

export class CommonButton extends PureComponent<IProps,IState>{
  render() {
    const containerStyle = styleSheetFlatten([
      styles.container,
      this.props.styleContainer,
    ])
    return (
      <TouchableOpacity
        {...this.props}
        style={containerStyle}
      >
        <Text style={styles.text}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = styleSheetCreate({
  container: style.view({
    backgroundColor: Color.mediumSlateBlue,
    width: windowWidth * 0.91,
    height: windowWidth * 0.144,
    borderRadius: windowWidth * 0.16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }),
  text: style.text({
    color: Color.white,
    fontSize: windowWidth * 0.042,
    fontFamily: fonts.manropeMedium,
  }),
})

