import React, { useMemo } from 'react';
import { Text, View, Image, ScrollView, KeyboardAvoidingView, } from "react-native";
import { TrackOrderScreen } from '../../../styles';
import images from '../../../index';
import { Colors } from '../../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { AppHeader, Spacing } from '../../../components';
import { RouteName } from '../../../routes';

const TrackOrderitem = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const TrackOrderScreens = useMemo(() => TrackOrderScreen(Colors), [Colors]);

  return (
    <View style={TrackOrderScreens.minstyleviewphotograpgy}>
      <Spacing />
      <AppHeader Iconname={true} headerTitle={t("Track_Order_Label")} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={TrackOrderScreens.contentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={TrackOrderScreens.minflexview}>
            <View style={TrackOrderScreens.minviewsigninscreen}>
              <View style={TrackOrderScreens.trackorderviewwhite}>
                <View style={TrackOrderScreens.setminviewflex}>
                  <View style={TrackOrderScreens.setimagewisdth}>
                    <Image style={TrackOrderScreens.imagesetus} resizeMode='cover' source={images.Docter_tablet_imag} />
                  </View>
                  <View style={TrackOrderScreens.setviewwoidth70}>
                    <Text style={TrackOrderScreens.settextcolor}>{t("OrderItem_Label")}</Text>
                    <Text style={[TrackOrderScreens.settextcolortwo]}>{t("Order_Arriving_Label")}</Text>
                  </View>
                </View>
              </View>
              <View style={TrackOrderScreens.trackorderscreenset}>
                <View style={TrackOrderScreens.dotviewmin}>
                  <Text style={TrackOrderScreens.dotstyle}></Text>
                  <Text style={TrackOrderScreens.setline}></Text>
                  <Text style={TrackOrderScreens.dotstyle}></Text>
                  <Text style={TrackOrderScreens.setlinetwo}></Text>
                  <Text style={TrackOrderScreens.dotstyletwo}></Text>
                  <Text style={TrackOrderScreens.setlinetwo}></Text>
                  <Text style={TrackOrderScreens.dotstyletwo}></Text>
                </View>
                <View>
                  <Text style={TrackOrderScreens.settextcolor}>{t("Order_Confirmed_Label")}</Text>
                  <Text style={[TrackOrderScreens.settextcolorthree]}>{t("OrderDate_Label")}</Text>
                  <View style={TrackOrderScreens.topspaceminview}>
                    <Text style={TrackOrderScreens.settextcolor}>{t("Shipped_Label")}</Text>
                    <Text style={[TrackOrderScreens.settextcolorthree]}>{t("OrderDate_Label2")}</Text>
                  </View>
                  <View style={TrackOrderScreens.topspaceminviewtwo}>
                    <Text style={TrackOrderScreens.settextcolor}>{t("Order_DisPatch_Label")}</Text>
                    <Text style={[TrackOrderScreens.settextcolorthree]}>{t("OrderDate_Label3")}</Text>
                  </View>
                  <View style={TrackOrderScreens.topspaceminviewthree}>
                    <Text style={TrackOrderScreens.settextcolor}>{t("Expected_Label")}</Text>
                    <Text style={[TrackOrderScreens.settextcolorthree]}>{t("OrderDate_Label4")}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default TrackOrderitem;
