import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { 
  styleSheetCreate, 
  style,
  Color,
  styleSheetFlatten,
 } from 'app/system/helpers'
import { localization } from 'app/system/localization'
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message"

interface IProps {
  isFloating?: boolean
}

interface IState {

}

export class Loader extends PureComponent<IProps, IState>{
  refFlash: any

  componentDidMount() {
    // console.log('ref', this.refFlash.toggleVisibility())
  }

  refFlashHandler = (ref: any) => this.refFlash = ref

  render() {
    const { isFloating } = this.props

    const container = styleSheetFlatten([
      styles.container,
      isFloating ? styles.floating : null
    ])

    return (
      <View style={container}>
      {/* <FlashMessage position="top" style={{ zIndex: 9999 }} animated /> */}
        <TouchableOpacity
          // onPress={this.testHandler}
        >
        <Text>
          {localization.list.pleaseWait}
        </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = styleSheetCreate({
  container: style.view({
    flex: 1,
    backgroundColor: Color.white,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  floating: style.view({
    
  }),
})