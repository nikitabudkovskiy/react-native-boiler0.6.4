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
import {Color, fonts, ImageRepository, platform, style, styleSheetCreate, windowWidth,} from 'app/system/helpers'
import {isIphoneX} from "react-native-iphone-x-helper";
import {CommonButtonWithChildren} from "app/modules/global/view/CommonButtonWithChildren";


interface IProps {

}

export const Auth = (props: IProps): JSX.Element => {

  return (
    <View style={styles.container}>
      <Image
        source={ImageRepository.onboardingAuthMan}
        style={styles.man}
        resizeMode="contain"
      />
      <Text style={styles.title}>
        You’re almost in
      </Text>
      <Text style={styles.subtitle}>
        Chose a way to sign in and start reflecting on{"\n"}your life
      </Text>
      <CommonButtonWithChildren
        style={styles.googleButton}
      >
        <Image
          source={ImageRepository.onboardingAppleButton}
          style={styles.googleImage}
          resizeMode="contain"
        />
        <Text style={styles.googleText}>
          Continue with Apple
        </Text>
      </CommonButtonWithChildren>
      <CommonButtonWithChildren style={styles.appleButton}>
        <Image
          source={ImageRepository.onboardingGoogleButton}
          style={styles.appleImage}
          resizeMode="contain"
        />
        <Text style={styles.appleText}>
          Continue with Google
        </Text>
      </CommonButtonWithChildren>
      <Text style={styles.terms}>
        By clicking “Continue” you agree with our <Text style={styles.termsBold}>Terms</Text> and <Text style={styles.termsBold}>conditions</Text>
      </Text>
    </View>
  )
}


const styles = styleSheetCreate({
  container: style.view({
    flex: 1,
    backgroundColor: Color.lavender,
    paddingTop: isIphoneX() ? windowWidth * 0.12 : windowWidth * 0.05,
    alignItems: 'center',
    justifyContent: 'flex-end',
  }),
  man: style.image({
    width: windowWidth * 0.52,
    height: windowWidth * 0.52,
    marginBottom: windowWidth * 0.272,
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
  googleButton: style.view({
    backgroundColor: Color.cetaceanBlue,
    width: windowWidth * 0.91,
    height: windowWidth * 0.144,
    borderRadius: windowWidth * 0.16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: windowWidth * 0.053,
  }),
  googleText: style.text({
    color: Color.white,
    fontSize: windowWidth * 0.042,
    fontFamily: fonts.manropeMedium,
  }),
  googleImage: style.image({
    width: windowWidth * 0.064,
    height: windowWidth * 0.064,
    marginRight: windowWidth * 0.03,
  }),
  appleButton: style.view({
    backgroundColor: Color.white,
    width: windowWidth * 0.91,
    height: windowWidth * 0.144,
    borderRadius: windowWidth * 0.16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: windowWidth * 0.085,
  }),
  appleText: style.text({
    color: Color.cetaceanBlue,
    fontSize: windowWidth * 0.042,
    fontFamily: fonts.manropeMedium,
  }),
  appleImage: style.image({
    width: windowWidth * 0.064,
    height: windowWidth * 0.064,
    marginRight: windowWidth * 0.03,
  }),
  terms: style.text({
    color: Color.romanSilver,
    fontSize: windowWidth * 0.032,
    fontFamily: fonts.manropeMedium,
    marginHorizontal: windowWidth * 0.07,
    textAlign: 'center',
    marginBottom: windowWidth * 0.1,
  }),
  termsBold: style.text({
    color: Color.romanSilver,
    fontSize: windowWidth * 0.032,
    fontFamily: fonts.manropeExtraBold,
  }),
})

