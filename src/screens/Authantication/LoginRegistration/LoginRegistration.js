import React, { useState, useMemo } from "react";
import { Text, View, Image, ScrollView, StatusBar, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { LoginScreenStyle } from '../../../styles';
import images from '../../../index';
import { SignUpScreen, LoginScreen } from '../../../screens';
import { Colors, SH } from "../../../utils";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { RouteName } from "../../../routes";

const LoginRegistration = (props) => {
  const { navigation } = props;

  const { t } = useTranslation();
  const { Colors } = useTheme();
  const LoginScreenStyles = useMemo(() => LoginScreenStyle(Colors), [Colors]);
  const [tabShow, SettabShow] = useState('1');
  return (
    <View style={LoginScreenStyles.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgwhite} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={LoginScreenStyles.contentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={LoginScreenStyles.minflexview}>
            <View style={LoginScreenStyles.minviewsigninscreen}>
              <View style={LoginScreenStyles.whiteboxshadow}>
                <View style={LoginScreenStyles.setimagviewlogin}>
                  <Image style={LoginScreenStyles.imagesetus} resizeMode='cover' source={images.medicine_image} />
                </View>
                <View style={LoginScreenStyles.bgcolortabset}>
                  <TouchableOpacity onPress={() => SettabShow('1')}>
                    <Text style={LoginScreenStyles.tabsettext}>{t("Login_Label")}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => SettabShow('2')}>
                    <Text style={LoginScreenStyles.tabsettext}>{t("Signup_Label")}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {tabShow == '1' ?
                <View style={LoginScreenStyles.paddingbottom}>
                  <Text style={[LoginScreenStyles.bordersetactive, tabShow == '1' && LoginScreenStyles.bordersetactivetwo]}></Text>
                  <LoginScreen Rediredt={() => navigation.navigate(RouteName.OTP_VERIFY_SCREEN)}
                    OtpButton={() => navigation.navigate(RouteName.LOGIN_AND_REGISTRATION)}
                  />
                </View>
                :
                null
              }
              {
                tabShow === '2' ?
                  <View style={LoginScreenStyles.paddingbottom}>
                    <Text style={tabShow === '2' ? LoginScreenStyles.bordersetactivetwo : LoginScreenStyles.bordersetactive}></Text>
                    <SignUpScreen 
                    SignUpOnPress={() => navigation.navigate(RouteName.OTP_VERIFY_SCREEN)}
                    LoginRedirect={()=> SettabShow('1')}
                    />
                  </View>
                  :
                  null
              }
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default LoginRegistration;
