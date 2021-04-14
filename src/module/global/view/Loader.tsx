import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
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
   console.log('ref', this.refFlash)
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
        
      <FlashMessage ref={this.refFlashHandler} position="top" animated />
      <Button
          onPress={() => {
            showMessage({
              message: "My message title",
              description: "My message description",
              type: "default",
              backgroundColor: "purple", // background color
              color: "#606060", // text color
            });
          }}
          title="Request Details"
          color="#841584"
        />
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