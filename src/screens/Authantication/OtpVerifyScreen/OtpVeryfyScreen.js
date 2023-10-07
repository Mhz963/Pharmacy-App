import React, { useState, useMemo } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity, } from "react-native";
import { OtpVeryfyScreenStyle } from '../../../styles';
import images from '../../../index';
import { RouteName } from '../../../routes';
import { ConfirmationAlert, OTPInput, Button, } from '../../../components';
import { Colors } from "../../../utils";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const OtpVeryfyScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const OtpVeryfyScreenStyles = useMemo(() => OtpVeryfyScreenStyle(Colors), [Colors]);

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const [alertOtpVisible, setAlertOtpVisible] = useState(false);
  const [alertOtpMessage, setAlertOtpMessage] = useState('');

  let alertdata = {
    'logout': t("Login_Successfull"),
  }
  const onoknutton = () => {
    navigation.navigate(RouteName.WELCOME_SCREEN);
  }
  let alerOtptdata = {
    'logout': t("Resend_Otp_Massage_Label"),
  }
  const OtpButton = () => {
    navigation.navigate(RouteName.OTP_VERIFY_SCREEN);
  }

  return (
    <View style={OtpVeryfyScreenStyles.minstyleviewphotograpgy}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={OtpVeryfyScreenStyles.contentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={OtpVeryfyScreenStyles.minflexview}>
            <View style={OtpVeryfyScreenStyles.minviewsigninscreen}>
              <View style={OtpVeryfyScreenStyles.whiteboxshadow}>
                <View style={OtpVeryfyScreenStyles.setimagviewlogin}>
                  <Image style={OtpVeryfyScreenStyles.imagesetus} resizeMode='cover' source={images.medicine_image} />
                </View>
              </View>
              <View style={OtpVeryfyScreenStyles.tabminview}>
                <Text style={OtpVeryfyScreenStyles.signintextset}>{t("Enter_Six_Digit_OTP")}</Text>
                <Text style={OtpVeryfyScreenStyles.paregraph}>{t("Enter_The_Otp_Title")}</Text>
                <OTPInput
                  style={OtpVeryfyScreenStyles.otpinputstyleaet}
                  pinCount={6}
                  autoFocusOnLoad
                  codeInputFieldStyle={OtpVeryfyScreenStyles.otpbuttonstyle}
                />
                <View style={OtpVeryfyScreenStyles.flexrowsettext}>
                  <Text style={OtpVeryfyScreenStyles.paregraphotpbottom}>{t("Did_Recieve_Otp_Screen")}</Text>
                  <TouchableOpacity onPress={() => {
                    setAlertOtpVisible(true);
                    setAlertOtpMessage(alerOtptdata.logout);
                  }}>
                    <Text style={OtpVeryfyScreenStyles.resendtextbold}>{t("Resend_Text")}</Text>
                  </TouchableOpacity>
                </View>
                <View style={OtpVeryfyScreenStyles.buttonstylviewset}>
                  <View style={OtpVeryfyScreenStyles.accountbutton}>
                    <Button
                      title={t("Reviews_Submit")}
                      buttonTextStyle={OtpVeryfyScreenStyles.textinputcolorbutton}
                      onPress={() => {
                        setAlertVisible(true);
                        setAlertMessage(alertdata.logout);
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <ConfirmationAlert
        message={alertMessage}
        modalVisible={alertVisible}
        setModalVisible={setAlertVisible}
        onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
        buttonText={t("ok_Label")}
        animationIcon={true}
        source={images.loginsuccessful}
        Lottiewidthstyle={OtpVeryfyScreenStyles.logoutStyel}
        buttonminview={OtpVeryfyScreenStyles.centerBtn}
      />
      <ConfirmationAlert
        iconVisible={true}
        message={alertOtpMessage}
        modalVisible={alertOtpVisible}
        setModalVisible={setAlertOtpVisible}
        onPress={() => { setAlertOtpVisible(!alertOtpVisible), OtpButton() }}
        buttonText={t("ok_Label")}
        source={images.loginsuccessful}
        Lottiewidthstyle={OtpVeryfyScreenStyles.logoutStyel}
        buttonminview={OtpVeryfyScreenStyles.centerBtn}
      />
    </View>
  );
};

export default OtpVeryfyScreen;
