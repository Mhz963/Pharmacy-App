import React, { useState, useMemo } from 'react';
import { Text, View, Image, ScrollView, KeyboardAvoidingView, FlatList, StatusBar, TouchableOpacity, } from "react-native";
import { AccountTabStyle } from '../../../styles';
import images from '../../../index';
import { RouteName } from '../../../routes';
import { Colors, SF, setAccountuserdata, setuserdata } from '../../../utils';
import { ConfirmationAlert, Button, VectoreIcons, AccountSubLinkFun, AccountLinkFlat } from '../../../components';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const AccountTab = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const AccountTabStyles = useMemo(() => AccountTabStyle(Colors), [Colors]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVisibleUpdate, setAlertVisibleUpdate] = useState(false);
  const [alertMessageUpdate, setAlertMessageUpdate] = useState('');

  let alertdata = {
    'logout': t("Are_You_Sure_logout"),
  }
  let alertdataUpdate = {
    updateAlet: t("Update_SuccessFull_Label"),
  }
  const onoknutton = () => {
    navigation.navigate(RouteName.LOGIN_AND_REGISTRATION);
  }
  const profileUpdate = () => {
    navigation.navigate(RouteName.HOME_TAB);
  }

  const PaymentScreen = () => {
    navigation.navigate(RouteName.PAYMENT_SCREEN);
  }
  const bookmarkscreen = () => {
    navigation.navigate(RouteName.ALL_BOOK_MARK_SCREEN);
  }
  const SettingScreen = () => {
    navigation.navigate(RouteName.SETTTING_SCREEN);
  }
  const notificationscreen = () => {
    navigation.navigate(RouteName.NOTIFICATION_SCREEN);
  }



  return (
    <View style={AccountTabStyles.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgwhite} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={AccountTabStyles.contentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={AccountTabStyles.minflexview}>
            <View style={AccountTabStyles.minviewsigninscreen}>
              <View style={AccountTabStyles.flexrowtwxtspace}>
                <Text style={AccountTabStyles.persnaltext}>{t("Personal_details_Label")}</Text>
                <TouchableOpacity onPress={() => navigation.navigate(RouteName.EDIT_PROFILE_SCREEN)}>
                  <Text style={AccountTabStyles.edittextset}>{t("Edit_label")}</Text>
                </TouchableOpacity>
              </View>
              <View style={AccountTabStyles.useraccountwhitebox}>
                <View style={AccountTabStyles.fleximageandtext}>
                  <TouchableOpacity>
                    <Image style={AccountTabStyles.imagesetus} resizeMode='cover' source={images.Account_image_user} />
                  </TouchableOpacity>
                  <TouchableOpacity style={AccountTabStyles.setviewwidth}>
                    <Text style={AccountTabStyles.sumanyatextset}>{t("Sumanya_label")}</Text>
                    <Text style={AccountTabStyles.setgimailtext}>{t("GamilId_Label")}</Text>
                    <Text style={AccountTabStyles.setgimailtextwo}>+91 xxxxxxxxxxx</Text>
                    <Text style={AccountTabStyles.addreshtext}>{t("Address_profile_Label")}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={AccountTabStyles.flexrowsetbgcolor}>
                <TouchableOpacity onPress={() => bookmarkscreen()} style={AccountTabStyles.setbgcolorwhite}>
                  <View>
                    <View style={AccountTabStyles.flexrowsettile}>
                      <VectoreIcons icon="Feather" name="bookmark" size={SF(20)} color={Colors.dark_liver} />
                    </View>
                    <Text style={AccountTabStyles.bookmarktextstyle}>{t("Bookmarks_Label")}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => notificationscreen()} style={AccountTabStyles.setbgcolorwhite}>
                  <View>
                    <View style={AccountTabStyles.flexrowsettile}>
                      <VectoreIcons icon="Ionicons" name="notifications-outline" size={SF(20)} color={Colors.dark_liver} />
                    </View>
                    <Text style={AccountTabStyles.bookmarktextstyle}>{t("Notifications_Label")}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => SettingScreen()} style={AccountTabStyles.setbgcolorwhite}>
                  <View>
                    <View style={AccountTabStyles.flexrowsettile}>
                      <VectoreIcons icon="AntDesign" name="setting" size={SF(20)} color={Colors.dark_liver} />
                    </View>
                    <Text style={AccountTabStyles.bookmarktextstyle}>{t("Settings_Label")}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => PaymentScreen()} style={AccountTabStyles.setbgcolorwhite}>
                  <View>
                    <View style={AccountTabStyles.flexrowsettile}>
                      <VectoreIcons icon="Ionicons" name="md-wallet-outline" size={SF(20)} color={Colors.dark_liver} />
                    </View>
                    <Text style={AccountTabStyles.bookmarktextstyle}>{t("Payments_Label")}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <FlatList
                data={setuserdata}
                renderItem={({ item, index }) => (<AccountLinkFlat item={item} onPress={() => navigation.navigate(item.url)} />)}
                keyExtractor={item => item.id}
                numColumns={1}
                style={AccountTabStyles.flatelistGrid}
              />
              <FlatList
                data={setAccountuserdata}
                renderItem={({ item, index }) => (<AccountSubLinkFun item={item} onPress={() => navigation.navigate(item.url)} />)}
                keyExtractor={item => item.id}
                numColumns={1}
                style={AccountTabStyles.flatelistGrid}

              />
              {/* <View style={AccountTabStyles.fourtextminview}>
                <TouchableOpacity onPress={() => navigation.navigate(RouteName.RATING_SCREEN_SET)}>
                  <Text style={AccountTabStyles.sendfeedbacktext}>{t("Send_Feedback_Label")}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}>
                  <Text style={AccountTabStyles.sendfeedbacktext}>{t("Report_Emergency_Label")}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}>
                  <Text style={AccountTabStyles.sendfeedbacktext}>{t("Rate_Play_Store_Label")}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  setAlertVisible(true);
                  setAlertMessage(alertdata.logout);
                }}>
                  <Text style={AccountTabStyles.sendfeedbacktext}>{t("Log_Out_Label")}</Text>
                </TouchableOpacity>
              </View> */}
              {/* <TouchableOpacity style={AccountTabStyles.setbgwhiteabout}>
                <VectoreIcons icon="Entypo" name="info-with-circle" size={SF(20)} color={Colors.dark_liver} />
                <Text style={AccountTabStyles.abouttextstyle}>{t("About_Label")}</Text>
              </TouchableOpacity> */}
              <Text>{'\n'}</Text>
              <View style={AccountTabStyles.setbuttonstyleview}>
                <Button onPress={() => {
                  setAlertVisibleUpdate(true);
                  setAlertMessageUpdate(alertdataUpdate.updateAlet);
                }} buttonTextStyle={AccountTabStyles.textstyleupdate} title={t("Update_Label")} />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
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
        Lottiewidthstyle={AccountTabStyles.logoutStyel}
      />
      <ConfirmationAlert
        message={alertMessageUpdate}
        modalVisible={alertVisibleUpdate}
        setModalVisible={setAlertVisibleUpdate}
        onPressCancel={() => setAlertVisible(!alertVisibleUpdate)}
        onPress={() => { setAlertVisibleUpdate(!alertVisibleUpdate), profileUpdate() }}
        buttonText={t("Ok")}
        animationIcon={true}
        source={images.loginsuccessful}
        Lottiewidthstyle={AccountTabStyles.successtyle}
        buttonminview={AccountTabStyles.centerBtn}
      />
    </View>
  );
};
export default AccountTab;
