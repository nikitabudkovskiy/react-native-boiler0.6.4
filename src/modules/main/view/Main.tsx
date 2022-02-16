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


interface IProps {

}

const personalInsightsFakeData = ['Is it possible to eat at night', 'Food on holiday', 'Is it possible to eat at night', 'Food on holiday', 'Is it possible to eat at night']

export const Main = (props: IProps): JSX.Element => {
  const [isShowBanner, setIsShowBanner] = useState<boolean>(true);

  const hideBannerHandler = (): void => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsShowBanner(false);
  }


  return (
    <View style={styles.container}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <View style={styles.headerNameUserContainer}>
            <Text style={styles.headerName}>
              Hi, Helen
            </Text>
            <Text style={styles.headerNotification}>
              You have done 10 fasts
            </Text>
          </View>
          <View style={styles.headerAvatarContainer}>
            <Image
              source={ImageRepository.fakeAvatar}
              style={styles.headerAvatar}
              resizeMode="contain"
            />
          </View>
        </View>

        {
          isShowBanner && (
            <View style={styles.tracker}>
              <Image source={ImageRepository.paperclip} style={styles.trackerPaperclip} />
              <View style={styles.trackerHeader}>
                <Text style={styles.trackerHeaderTitle}>
                  Fasting tracker
                </Text>
                <TouchableOpacity
                  hitSlop={{ left: 20, top: 20, right: 20, bottom: 20}}
                  onPress={hideBannerHandler}
                >
                  <Image
                    source={ImageRepository.closeMessage}
                    style={styles.progressDetailImage}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.trackerSubtitle}>
                Start losing weight with{"\n"}interval fasting
              </Text>
            </View>
          )
        }

        <View style={styles.progress}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>
              Progress today
            </Text>
            <TouchableOpacity style={styles.progressDetailContainer}>
              <Text style={styles.progressDetailText}>
                details
              </Text>
              <Image
                source={ImageRepository.progressArrow}
                style={styles.progressDetailImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.caloriesContainer}>
            <View style={styles.caloriesIndicator}>

            </View>
            <View style={styles.caloriesBlock}>
              <Text style={styles.caloriesBlockTitle}>
                Intake
              </Text>
              <Text style={styles.caloriesBlockDone}>
                2453 kcal
              </Text>
              <Text style={styles.caloriesBlockAll}>
                3000 kcal
              </Text>
            </View>

            <View style={styles.caloriesBlock}>
              <Text style={styles.caloriesBlockTitle}>
                Burned
              </Text>
              <Text style={styles.caloriesBlockDone}>
                2453 kcal
              </Text>
            </View>

          </TouchableOpacity>

          <View style={styles.waterAndActivityContainer}>

            <TouchableOpacity style={styles.activity}>
              <Text style={styles.activityTitle}>
                Activity
              </Text>

              <View style={styles.activityInfoContainer}>

                <View style={styles.activityIndicatorContainer}>
                  <View style={styles.activityIndicatorActiveLine} />
                </View>

                <View style={styles.activityInfo}>
                  <Text style={styles.activityMinDone}>
                    120 min
                  </Text>
                  <Text style={styles.activityMinAll}>
                    130 min
                  </Text>
                </View>

              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.water}>
              <Text style={styles.waterTitle}>
                Water
              </Text>
              <ImageBackground resizeMode="stretch" style={styles.waterBackground} source={ImageRepository.waterCard}>
                <View style={styles.waterInfo}>
                  <Text style={styles.waterDone}>
                    2 L
                  </Text>
                  <Text style={styles.waterAll}>
                    3 L
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>

          </View>

        </View>


        <View style={styles.personalInsightsHeader}>
          <Text style={styles.personalInsightsTitle}>
            My personal insights
          </Text>
          <TouchableOpacity style={styles.personalInsightsSeeAllContainer}>
            <Text style={styles.personalInsightsSeeAllText}>
              see all
            </Text>
            <Image
              source={ImageRepository.progressArrow}
              style={styles.personalInsightsSeeAllImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.personalInsights}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            {
              personalInsightsFakeData.map((data => {
                return (
                  <TouchableOpacity
                    key={Math.random().toString()}
                  >
                    <ImageBackground
                      source={ImageRepository.fakePersonalImage}
                      style={styles.personalInsightsCardImage}
                    >
                      <Text style={styles.personalInsightsCardText}>
                        {data}
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                )
              }))
            }
          </ScrollView>
        </View>
      </ScrollView>

      <View style={styles.tabbarContainer}>
        <TouchableOpacity
          style={styles.tabbbarButton}
        >
          <Image style={styles.tabbbarButtonIcon} source={ImageRepository.tabbarHome} />
          <Text style={styles.tabbbarButtonActiveText}>
            main
          </Text>
        </TouchableOpacity>
        <TouchableOpacity

        >
          <Image
            source={ImageRepository.tabbarAdd}
            style={styles.tabbarAdd}
            resizeMode="contain"
          />

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabbbarButton}
        >
          <Image  style={styles.tabbbarButtonIcon} source={ImageRepository.tabbarWaterJournal} />
          <Text style={styles.tabbbarButtonInactiveText}>
            journal
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}


const styles = styleSheetCreate({
  container: style.view({
    flex: 1,
    backgroundColor: Color.white,
    paddingTop: isIphoneX() ? windowWidth * 0.12 : windowWidth * 0.05,
  }),
  header: style.view({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: windowWidth * 0.042,
  }),
  headerNameUserContainer: style.view({}),
  headerName: style.text({
    color: Color.cetaceanBlue,
    fontFamily: fonts.manropeExtraBold,
    fontSize: windowWidth * 0.062,
  }),
  headerNotification: style.text({
    color: Color.romanSilver,
    fontFamily: fonts.manropeMedium,
    fontSize: windowWidth * 0.042,
  }),
  headerAvatarContainer: style.view({
    width: windowWidth * 0.18,
    height: windowWidth * 0.18 ,
    borderRadius: windowWidth * 0.032,
    borderColor: Color.brightGray,
    borderWidth: windowWidth * 0.0025,
    backgroundColor: Color.white,
  }),
  headerAvatar: style.view({
    width :'100%',
    height: '100%',
  }),
  tracker: style.view({
    backgroundColor: Color.mediumSlateBlue,
    height: windowWidth * 0.3,
    marginHorizontal: windowWidth * 0.042,
    borderRadius: windowWidth * 0.042,
    marginTop: windowWidth * 0.064,
    padding: windowWidth * 0.053,
  }),
  trackerPaperclip: style.view({
    width: windowWidth * 0.45,
    height: windowWidth * 0.32,
    position: 'absolute',
    bottom: 0,
    right: 0,
  }),
  trackerHeader: style.view({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: windowWidth * 0.01,
  }),
  trackerHeaderTitle: style.text({
    color: Color.white,
    fontFamily: fonts.manropeBold,
    fontSize: windowWidth * 0.048,
  }),
  trackerHeaderClose: style.image({
    width: windowWidth * 0.042,
    height: windowWidth * 0.042,
  }),
  trackerSubtitle: style.text({
    color: Color.white,
    fontFamily: fonts.manropeRegular,
    fontSize: windowWidth * 0.048,
  }),
  progress: style.view({
    paddingHorizontal: windowWidth * 0.042,
    marginTop: windowWidth * 0.085,
  }),
  progressHeader: style.view({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: windowWidth * 0.042,
  }),
  progressTitle: style.text({
    color: Color.cetaceanBlue,
    fontFamily: fonts.manropeBold,
    fontSize: windowWidth * 0.048,
  }),
  progressDetailContainer: style.text({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  progressDetailText: style.text({
    color: Color.cetaceanBlue,
    fontFamily: fonts.manropeRegular,
    fontSize: windowWidth * 0.038,
    marginRight: windowWidth * 0.01,
  }),
  progressDetailImage: style.image({
    width: windowWidth * 0.032,
    height: windowWidth * 0.032,
  }),
  personalInsights: style.view({
    paddingLeft: windowWidth * 0.042,
    // marginBottom: windowWidth * 0.1,
  }),
  personalInsightsHeader: style.view({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.042,
    marginBottom: windowWidth * 0.042,
    marginTop: windowWidth * 0.085,
  }),
  personalInsightsTitle: style.text({
    color: Color.cetaceanBlue,
    fontFamily: fonts.manropeBold,
    fontSize: windowWidth * 0.048,
  }),
  personalInsightsSeeAllContainer: style.text({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  personalInsightsSeeAllText: style.text({
    color: Color.cetaceanBlue,
    fontFamily: fonts.manropeRegular,
    fontSize: windowWidth * 0.038,
    marginRight: windowWidth * 0.01,
  }),
  personalInsightsSeeAllImage: style.image({
    width: windowWidth * 0.032,
    height: windowWidth * 0.032,
  }),
  personalInsightsCardImage: style.view({
    borderRadius: windowWidth * 0.032,
    overflow: 'hidden',
    width: windowWidth * 0.385,
    height: windowWidth * 0.385,
    padding: windowWidth * 0.032,
    marginRight: 12,
    justifyContent: 'flex-end',
  }),
  personalInsightsCardText: style.text({
    fontSize: windowWidth * 0.038,
    color: Color.cetaceanBlue,
    fontFamily: fonts.manropeBold,
  }),
  waterAndActivityContainer: style.view({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: windowWidth * 0.02,
  }),
  activity: style.view({
    width: windowWidth * 0.44,
    height: windowWidth * 0.328,
    backgroundColor: Color.ghostWhite,
    padding: windowWidth * 0.042,
    paddingBottom: windowWidth * 0.053,
    borderRadius: windowWidth * 0.042,
  }),
  activityTitle: style.text({
    color: Color.cetaceanBlue,
    fontFamily: fonts.manropeBold,
    fontSize: windowWidth * 0.042,
    marginBottom: windowWidth * 0.016,
  }),
  activityInfoContainer: style.view({
    flexDirection: 'row',
    alignItems: 'flex-end',
  }),
  activityIndicatorContainer: style.view({
    width: windowWidth * 0.016,
    height: windowWidth * 0.16,
    backgroundColor: Color.brightGray,
    borderRadius: windowWidth * 0.12,
  }),
  activityIndicatorActiveLine: style.view({
    width: windowWidth * 0.016,
    height: windowWidth * 0.12,
    backgroundColor: Color.teaGreen,
    borderRadius: windowWidth * 0.12,
    position: 'absolute',
    bottom: 0,
  }),
  activityInfo: style.view({
    marginLeft: windowWidth * 0.021,
  }),
  activityMinDone: style.text({
    color: Color.cetaceanBlue,
    fontFamily: fonts.manropeExtraBold,
    fontSize: windowWidth * 0.053,
  }),
  activityMinAll: style.text({
    color: Color.blackCoral,
    fontFamily: fonts.manropeRegular,
    fontSize: windowWidth * 0.042,
  }),
  water: style.view({
    width: windowWidth * 0.44,
    height: windowWidth * 0.328,
    backgroundColor: Color.ghostWhite,
    padding: windowWidth * 0.042,
    paddingBottom: windowWidth * 0.053,
    borderRadius: windowWidth * 0.042,
    overflow: 'hidden',
  }),
  waterTitle: style.text({
    color: Color.cetaceanBlue,
    fontFamily: fonts.manropeBold,
    fontSize: windowWidth * 0.042,
    marginBottom: windowWidth * 0.016,
  }),
  waterBackground: style.view({
    width: windowWidth * 0.44,
    height: windowWidth * 0.22,
    position: 'absolute',
    bottom: 0,
  }),
  waterInfo: style.view({
    marginTop: windowWidth * 0.05,
    marginLeft: windowWidth * 0.04,
  }),
  waterDone: style.text({
    color: Color.cetaceanBlue,
    fontFamily: fonts.manropeExtraBold,
    fontSize: windowWidth * 0.053,
  }),
  waterAll: style.text({
    color: Color.blackCoral,
    fontFamily: fonts.manropeRegular,
    fontSize: windowWidth * 0.042,
  }),
  caloriesContainer: style.view({
    backgroundColor: Color.ghostWhite,
    width: windowWidth * 0.92,
    height: windowWidth * 0.32,
    borderRadius: windowWidth * 0.042,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  }),
  caloriesIndicator: style.view({
    ...StyleSheet.absoluteFillObject,
    width: '50%',
    backgroundColor: Color.apricot,
  }),
  caloriesBlock: style.view({
    width: '50%',
    height: '100%',
    padding: windowWidth * 0.042,
    paddingBottom: windowWidth * 0.053,
  }),
  caloriesBlockTitle: style.text({
    color: Color.cetaceanBlue,
    fontFamily: fonts.manropeBold,
    fontSize: windowWidth * 0.042,
    marginBottom: windowWidth * 0.01,
  }),
  caloriesBlockDone: style.text({
    color: Color.cetaceanBlue,
    fontFamily: fonts.manropeExtraBold,
    fontSize: windowWidth * 0.058,
  }),
  caloriesBlockAll: style.text({
    color: Color.cetaceanBlue,
    fontFamily: fonts.manropeRegular,
    fontSize: windowWidth * 0.037,
  }),
  tabbarContainer: style.view({
    backgroundColor: Color.white,
    marginHorizontal: windowWidth * 0.042,
    flexDirection: 'row',
    marginBottom: windowWidth * 0.085,
    height: windowWidth * 0.18,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderColor: Color.brightGray,
    borderWidth: windowWidth * 0.0025,
    borderRadius: windowWidth * 0.085,
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    marginTop: windowWidth * 0.08,

  }),
  tabbarAdd: style.view({
    width: windowWidth * 0.128,
    height: windowWidth * 0.128,
  }),
  tabbbarButton: style.view({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  tabbbarButtonIcon: style.image({
    width: windowWidth * 0.058,
    height: windowWidth * 0.058,
    marginRight: windowWidth * 0.02,
  }),
  tabbbarButtonActiveText: style.text({
    fontSize: windowWidth * 0.032,
    fontFamily: fonts.manropeMedium,
    color: Color.cetaceanBlue,
  }),
  tabbbarButtonInactiveText: style.text({
    fontSize: windowWidth * 0.032,
    fontFamily: fonts.manropeMedium,
    color: Color.metallicSilver,
  }),
})

