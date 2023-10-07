import React, { useState, useMemo } from "react";
import { Text, View, TouchableOpacity, } from "react-native";
import { LoginScreenStyle } from '../../../styles';
import { LoginScreen } from '../../../screens';
import { Colors, SF } from "../../../utils";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { Input, Spacing, VectoreIcons, ConfirmationAlert } from "../../../components";
import { RouteName } from "../../../routes";

const ForgotPassword = (props) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const LoginScreenStyles = useMemo(() => LoginScreenStyle(Colors), [Colors]);
  const [screenhide, setscreenhide] = useState(0);
  const [textInputName, setTextInputName] = useState('');
  const [alertOtpVisible, setAlertOtpVisible] = useState(false);
  const [alertOtpMessage, setAlertOtpMessage] = useState('');

  let alerOtptdata = {
    'logout': t("Help_sand_mail_Successful"),
  }
  const OtpButton = () => {
    setscreenhide()
  }
  return (
    <View>
      {screenhide === 0 ?
        <View style={LoginScreenStyles.tabminview}>
          <TouchableOpacity onPress={setscreenhide} style={LoginScreenStyles.padH20}>
            <VectoreIcons icon="Entypo" name="chevron-left" size={SF(30)} color={Colors.black_text_colors} />
          </TouchableOpacity>
          <View style={[LoginScreenStyles.setforgettext, LoginScreenStyles.padH20]}>
            <Text style={LoginScreenStyles.forgettextset}>{t("Forgot_password_Label")}</Text>
          </View>
          <View style={LoginScreenStyles.padH20}>
            <Input
              placeholder={t("Enter_Your_Email")}
              leftIcon={<VectoreIcons icon="MaterialIcons" name="email" size={SF(25)} color={Colors.old_silver_color} />}
              value={textInputName}
              onChangeText={(value) => { setTextInputName(value); }}
            />
          </View>
          <Spacing />
          <Text style={LoginScreenStyles.settextstyleforget}><Text style={LoginScreenStyles.starcolor}> * </Text>{t("We_Will_Send_Label")}</Text>
          <View style={[LoginScreenStyles.centerarrow, LoginScreenStyles.padH20]}>
            <TouchableOpacity style={LoginScreenStyles.setpositionabsolute} onPress={() => {
              setAlertOtpVisible(true);
              setAlertOtpMessage(alerOtptdata.logout);
            }}>
              <VectoreIcons icon="AntDesign" name="arrowright" size={SF(25)} color={Colors.bgwhite} />
            </TouchableOpacity>
          </View>
        </View>
        : <LoginScreen />
      }
      <ConfirmationAlert
        iconVisible={true}
        message={alertOtpMessage}
        modalVisible={alertOtpVisible}
        setModalVisible={setAlertOtpVisible}
        onPress={() => { setAlertOtpVisible(!alertOtpVisible), OtpButton() }}
        buttonText={t("ok_Label")}
        buttonminview={LoginScreenStyles.centerBtn}
      />
    </View>
  );
};

export default ForgotPassword;
