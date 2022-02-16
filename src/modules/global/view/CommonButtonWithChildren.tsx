import React, { PureComponent } from 'react'
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import {
  styleSheetCreate,
  style, styleSheetFlatten,
} from 'app/system/helpers'

interface IProps extends TouchableOpacityProps {
  children: JSX.Element[]
}

interface IState {

}

export class CommonButtonWithChildren extends PureComponent<IProps,IState>{
  render() {
    const style = styleSheetFlatten([
      styles.container,
      this.props.style,
    ])
    return (
      <TouchableOpacity
        {...this.props}
        style={style}
      >
        {this.props.children}
      </TouchableOpacity>
    )
  }
}

const styles = styleSheetCreate({
  container: style.view({

  }),
})

