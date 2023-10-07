import React, { useState, useMemo } from 'react';
import { SafeAreaView, View, Text, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { GetstartedSliderStyle } from '../../styles';
import { Button, VectoreIcons, Lottie } from '../../components';
import { RouteName } from '../../routes';
import { Colors, SF, sliderData } from '../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const GetstartedSliderscreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const GetstartedSliderStyles = useMemo(() => GetstartedSliderStyle(Colors), [Colors]);

  const [showRealApp, setShowRealApp] = useState(false);
  const Getstarted = () => {
    setShowRealApp(false);
  };

  const RenderItem = ({ item }) => {
    return (
      <View>
        <View style={GetstartedSliderStyles.minstyleviewphotograpgy}>
          <StatusBar barStyle="dark-content" backgroundColor={Colors.theme_background} />
          <View>
            <ScrollView
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={GetstartedSliderStyles.contentContainerStyle}>
              <View style={GetstartedSliderStyles.textcenterview}>
                <Text style={GetstartedSliderStyles.longtitlestyletwo}>
                  {t(item.longtitle)}
                </Text>
              </View>
              <View style={GetstartedSliderStyles.aligncenterview}>
                <View style={GetstartedSliderStyles.setimagviewtwo}>
                  <Lottie
                    source={item.animation}
                  />
                </View>
              </View>
            </ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} style={GetstartedSliderStyles.settextstyle}>
              <View style={GetstartedSliderStyles.setbgcolorviewtwoview}>
                <VectoreIcons icon="Feather" name="chevrons-right" size={SF(27)} color={Colors.white_text_color} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={GetstartedSliderStyles.setbgbuttondiv}>
        <View style={GetstartedSliderStyles.buttonCircle}>
          <Button
            title={t("Get_Started")}
            onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}
            buttonStyle={GetstartedSliderStyles.bgwhite}
            buttonTextStyle={GetstartedSliderStyles.btnTextStyle}

          />
        </View>
      </View>
    );
  };
  const _renderNextButton = () => {
    return (
      <View style={GetstartedSliderStyles.setbgbuttondiv}>
        <Text style={GetstartedSliderStyles.nextbuttoncolorset}></Text>
      </View>
    );
  };
  const _renderSkipButton = () => {
    return (
      <View style={GetstartedSliderStyles.setbgbuttondiv}>
        <TouchableOpacity>
          <Text style={GetstartedSliderStyles.nextbuttoncolorset}></Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <StatusBar backgroundColor={Colors.theme_background} barStyle={'light-content'} />
      {showRealApp ? (
        <SafeAreaView>
          <View>
            <Button
              title={t("Show_Intro_Slider_Label")}
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={sliderData}
          renderItem={RenderItem}
          onDone={Getstarted}
          renderNextButton={_renderNextButton}
          renderSkipButton={_renderSkipButton}
          renderDoneButton={_renderDoneButton}
          showSkipButton={true}
          activeDotStyle={GetstartedSliderStyles.activebutonGetstartedSliderStyleset}
          dotstyle={GetstartedSliderStyles.dotGetstartedSliderStyleset}
        />
      )}
    </>
  );
};
export default GetstartedSliderscreen;

