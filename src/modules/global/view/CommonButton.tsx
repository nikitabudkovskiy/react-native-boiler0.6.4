import React, { PureComponent } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styleSheetCreate, style, Color, fonts } from "app/system/helpers"
import { windowWidth } from 'app/system/helpers'

interface IProps extends TouchableOpacityProps {
  title: string
}

interface IState {

}

export class CommonButton extends PureComponent<IProps, IState> {

 state = {

 }

 render(): JSX.Element {
   const { title } = this.props

   return(
     <TouchableOpacity 
      {...this.props} 
      style={styles.container}
      >
       <Text style={styles.title}>
         {title}
       </Text>
     </TouchableOpacity>
    )
  }
}
const styles = styleSheetCreate({
  container: style.view({
    backgroundColor: Color.frenchFuchsia,
    width: windowWidth * 0.87,
    height: windowWidth * 0.13,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.25,
  }),
  title: style.text({
    color: Color.white,
    fontFamily: fonts.sFProDisplayBold,
  })
})
