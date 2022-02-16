import React, {useState} from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  LayoutAnimation
} from 'react-native'
import {
  Color,
  fonts,
  ImageRepository,
  platform,
  style,
  styleSheetCreate,
  windowHeight,
  windowWidth,
} from 'app/system/helpers'
import {isIphoneX} from "react-native-iphone-x-helper";
import {CommonButtonWithChildren} from "app/modules/global/view/CommonButtonWithChildren";
import {CommonButton, СommonButton} from "app/modules/global/view";


interface IProps {

}

export const GetStarted = (props: IProps): JSX.Element => {

  return (
    <View style={styles.container}>
      <View style={styles.backgroundLogo}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={ImageRepository.onboardingCadoLogo}
        />
      </View>
      <View style={styles.divider} />
      <Text style={styles.title}>
        Lose weight with Cado
      </Text>
      <Text style={styles.subtitle}>
        We will pick up food for you and help you{"\n"}achieve your goals comfortably
      </Text>
      <CommonButton styleContainer={styles.getStatedButton} text="Get started" />
      <TouchableOpacity>
        <Text style={styles.alreadyAccount}>
          Already have an account?
        </Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = styleSheetCreate({
  container: style.view({
    flex: 1,
    backgroundColor: Color.white,
    alignItems: 'center',
  }),
  backgroundLogo: style.view({
    width: windowWidth * 1.3,
    height: windowHeight * 0.6,
    backgroundColor: Color.lavender,
    borderBottomLeftRadius: windowWidth * 0.6,
    borderBottomRightRadius: windowWidth * 0.6,
    alignItems: 'center',
  }),
  logo: style.image({
    width: windowWidth,
    height: windowHeight * 0.5,
    position: 'absolute',
    bottom: 0,
  }),
  divider: style.view({
    flex: 1,
  }),
  title: style.text({
    marginBottom: windowWidth * 0.02,
    color: Color.cetaceanBlue,
    fontSize: windowWidth * 0.064,
    fontFamily: fonts.manropeExtraBold,
  }),
  subtitle: style.text({
    color: Color.cetaceanBlue,
    fontSize: windowWidth * 0.042,
    fontFamily: fonts.manropeMedium,
    textAlign: 'center',
    marginBottom: windowWidth * 0.1,
  }),
  getStatedButton: style.view({
    marginBottom: windowWidth * 0.053,
  }),
  alreadyAccount: style.text({
    color: Color.cetaceanBlue,
    fontSize: windowWidth * 0.042,
    fontFamily: fonts.manropeSemiBold,
    textAlign: 'center',
    marginBottom: windowWidth * 0.1,
  }),


})

