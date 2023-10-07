import React, { useState, useMemo } from "react";
import { Text, View, TouchableOpacity, ScrollView, } from "react-native";
import { CustomeSlidebar } from '../../styles';
import { RouteName } from '../../routes';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { VectoreIcons, ConfirmationAlert } from "../../components";
import { SF } from "../../utils";
import images from "../../index";

const CustomSidebarMenu = (props) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const CustomeSlidebars = useMemo(() => CustomeSlidebar(Colors), [Colors]);
  const { navigation } = props;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  let alertdata = {
    'logout': t("Are_You_Sure_logout"),
  }
  const onoknutton = () => {
    navigation.navigate(RouteName.LOGIN_AND_REGISTRATION);
  }
  const Onpressfunction = (e) => {
    navigation.toggleDrawer();
    navigation.navigate(e)
  };

  return (
    <ScrollView>
      <Text>{'\n'}</Text>
      <View style={CustomeSlidebars.customslidebarmenu}>
        <TouchableOpacity style={CustomeSlidebars.flexrowset} onPress={
          () => Onpressfunction(RouteName.HOME_TAB)
        }>
          <VectoreIcons icon="Feather" name="home" style={CustomeSlidebars.setwidth} size={SF(23)} color={Colors.theme_background} />
          <Text style={CustomeSlidebars.hometextstyle}>{t("Home_Label")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={CustomeSlidebars.flexrowset} onPress={
          () => Onpressfunction(RouteName.OFFERS_TAB)
        }>
          <VectoreIcons icon="MaterialIcons" name="local-offer" style={CustomeSlidebars.setwidth} color={Colors.theme_background} size={SF(23)} />
          <Text style={CustomeSlidebars.hometextstyle}>{t("Offers_Label")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={CustomeSlidebars.flexrowset} onPress={
          () => Onpressfunction(RouteName.CART_TAB)
        }>
          <VectoreIcons icon="AntDesign" name="shoppingcart" style={CustomeSlidebars.setwidth} color={Colors.theme_background} size={SF(23)} />
          <Text style={CustomeSlidebars.hometextstyle}>{t("Cart_Label")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={CustomeSlidebars.flexrowset} onPress={
          () => Onpressfunction(RouteName.ACCOUNT_TAB_SET)
        }>
          <VectoreIcons icon="Feather" name="user" size={SF(23)} style={CustomeSlidebars.setwidth} color={Colors.theme_background} />
          <Text style={CustomeSlidebars.hometextstyle}>{t("Account_Label")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={CustomeSlidebars.flexrowset} onPress={
          () => Onpressfunction(RouteName.EDIT_LOCATION_SCREEN)
        }>
          <VectoreIcons icon="FontAwesome" name="map-marker" size={SF(23)} style={CustomeSlidebars.setwidth} color={Colors.theme_background} />
          <Text style={CustomeSlidebars.hometextstyle}>{t("Saved_Addresses_Label")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={CustomeSlidebars.flexrowset} onPress={
          () => Onpressfunction(RouteName.YOUR_ORDER_SCREEN)
        }>
          <VectoreIcons icon="Ionicons" name="refresh" size={SF(23)} style={CustomeSlidebars.setwidth} color={Colors.theme_background} />
          <Text style={CustomeSlidebars.hometextstyle}>{t("My_Orders_Label")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={CustomeSlidebars.flexrowset} onPress={
          () => Onpressfunction(RouteName.ORDER_TAB_SCREEN)
        }>
          <VectoreIcons icon="MaterialIcons" name="track-changes" size={SF(23)} style={CustomeSlidebars.setwidth} color={Colors.theme_background} />
          <Text style={CustomeSlidebars.hometextstyle}>{t("Track_Order_Label")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={CustomeSlidebars.flexrowset} onPress={
          () => Onpressfunction(RouteName.NOTIFICATION_SCREEN)
        }>
          <VectoreIcons icon="Ionicons" name="notifications-outline" style={CustomeSlidebars.setwidth} size={SF(23)} color={Colors.theme_background} />
          <Text style={CustomeSlidebars.hometextstyle}>{t("Notification_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={CustomeSlidebars.flexrowset} onPress={
          () => Onpressfunction(RouteName.SETTTING_SCREEN)
        }>
          <VectoreIcons icon="AntDesign" name="setting" style={CustomeSlidebars.setwidth} size={SF(23)} color={Colors.theme_background} />
          <Text style={CustomeSlidebars.hometextstyle}>{t("Setting_Label")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={CustomeSlidebars.flexrowset} onPress={
          () => Onpressfunction(RouteName.CHAT_SCREEN)
        }>
          {/* <VectoreIcons icon="Ionicons" name="chatbox-ellipses-outline" style={CustomeSlidebars.setwidth} size={SF(23)} color={Colors.theme_background} />
          <Text style={CustomeSlidebars.hometextstyle}>{t("Chat_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={CustomeSlidebars.flexrowset} onPress={
          () => Onpressfunction(RouteName.HELP_SCREEN)
        }> */}
          <VectoreIcons icon="FontAwesome5" name="hands-helping" size={SF(23)} style={CustomeSlidebars.setwidth} color={Colors.theme_background} />
          <Text style={CustomeSlidebars.hometextstyle}>{t("Help_Text")}</Text>
        </TouchableOpacity>

        <View style={CustomeSlidebars.settingandlogout}>
          <TouchableOpacity style={CustomeSlidebars.flexrowset} onPress={() => {
            setAlertVisible(true);
            setAlertMessage(alertdata.logout);
          }}>
            <VectoreIcons icon="Feather" name="log-out" style={CustomeSlidebars.setwidth} size={SF(23)} color={Colors.theme_background} />
            <Text style={CustomeSlidebars.hometextstyle}>{t("Log_Out")}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ConfirmationAlert
        message={alertMessage}
        modalVisible={alertVisible}
        setModalVisible={setAlertVisible}
        onPressCancel={() => setAlertVisible(!alertVisible)}
        onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
        cancelButtonText={t("Cancel_Button")}
        buttonText={t("Ok")}
        animationIcon={true}
        source={images.logout}
        Lottiewidthstyle={CustomeSlidebars.logoutStyel}
      />
    </ScrollView>
  );
};
export default CustomSidebarMenu;

