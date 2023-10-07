import React, { useMemo } from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, StatusBar, TouchableOpacity, } from "react-native";
import { WelcomeSumnayaStyle } from '../../styles';
import images from '../../index';
import { Button, VectoreIcons } from '../../components';
import { RouteName } from '../../routes';
import { Colors, SF } from '../../utils';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const WelcomeSumnya = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const WelcomeSumnayaStyles = useMemo(() => WelcomeSumnayaStyle(Colors), [Colors]);

  const Homescreendiraction = () => {
    navigation.replace(RouteName.HOME_SCREEN);
  }

  return (
    <View style={WelcomeSumnayaStyles.minstyleviewphotograpgy}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.theme_background} />
      <View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={WelcomeSumnayaStyles.contentContainerStyle}>
          <KeyboardAvoidingView enabled>
            <View style={WelcomeSumnayaStyles.minflexview}>
              <View style={WelcomeSumnayaStyles.minviewsigninscreen}>
                <View style={WelcomeSumnayaStyles.smallimagcenter}>
                  <View style={WelcomeSumnayaStyles.imagsetview}>
                    <Image style={WelcomeSumnayaStyles.imagesetus} resizeMode='cover' source={images.medicine_image} />
                  </View>
                </View>
                <View style={WelcomeSumnayaStyles.textcenterview}>
                  <Text style={WelcomeSumnayaStyles.longtitlestyle}>
                    {t("Welcome_Label")},
                  </Text>
                  <Text style={WelcomeSumnayaStyles.longtitlestyle}>
                    {t("Pharmacy_Label")}
                  </Text>
                </View>
                <View style={WelcomeSumnayaStyles.textcenterviewlongtext}>
                  <Text style={WelcomeSumnayaStyles.longtitlestyletwo}>
                    {t("Pharmacy_Welcome_Text_Label")}
                  </Text>
                </View>
                <View style={WelcomeSumnayaStyles.setbottomviewwidth}>
                  <Text style={WelcomeSumnayaStyles.sllectlocationscreen}>{t("SELECT_LOCATION_Label")}</Text>
                  <Button title={t("Locate_Me_Label")}
                    onPress={() => navigation.navigate(RouteName.LOCATION_HOME_OFFICE_SCREEN)}
                    icon={<VectoreIcons icon="AntDesign" name="search1" color={Colors.theme_background} size={SF(20)} />}
                    buttonStyle={WelcomeSumnayaStyles.buttonsearchstyle}
                    buttonTextStyle={WelcomeSumnayaStyles.locateMeBtnStyle}
                  />
                  <Button title={t("Provide_Delivery_Location_Label")}
                    onPress={() => navigation.navigate(RouteName.CONFORMLOCATION_SET)}
                    icon={<VectoreIcons icon="FontAwesome5" name="search-location" color={Colors.theme_background} size={SF(20)} />}
                    buttonStyle={WelcomeSumnayaStyles.buttonsearchstyle}
                    buttonTextStyle={WelcomeSumnayaStyles.provideDeliveryBtnStyle}
                  />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <TouchableOpacity onPress={() => Homescreendiraction()} style={WelcomeSumnayaStyles.settextstyle}>
          <View style={WelcomeSumnayaStyles.setbgcolorviewtwoview}>
            <Text style={WelcomeSumnayaStyles.textstyle}>
              <VectoreIcons icon="Feather" name="chevrons-right" size={SF(27)} color={Colors.anti_flash_white} />
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default WelcomeSumnya;
