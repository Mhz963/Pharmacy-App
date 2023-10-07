import React, { useState, useMemo } from "react";
import { View } from "react-native";
import { LoginScreenStyle } from '../../styles';
import { RouteName } from '../../routes';
import { Colors, SF, SH } from "../../utils";
import { Container, AppHeader, Button, Input, Spacing, ConfirmationAlert } from "../../components";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import images from "../../index";

const EditProfileScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const LoginScreenStyles = useMemo(() => LoginScreenStyle(Colors), [Colors]);

  const array = {
    fullname: '',
    mobilenumber: '',
    email: '',
  }

  const [state, setState] = useState(array);
  const [alertOtpVisible, setAlertOtpVisible] = useState(false);
  const [alertOtpMessage, setAlertOtpMessage] = useState('');

  let alerOtptdata = {
    'logout': t("Accoutn_Update_Label"),
  }
  const OtpButton = () => {
    navigation.navigate(RouteName.ACCOUNT_TAB_SET);
  }

  return (
    <Container backgroundColor={Colors.anti_flash_white}>
      <Spacing />
      <AppHeader Iconname={true} headerTitle={t("Edit_Profile")} onPress={() => navigation.navigate(RouteName.ACCOUNT_TAB_SET)} />
      <View style={LoginScreenStyles.tabminview}>
        <View style={LoginScreenStyles.padH20}>
          <Input
            placeholder={t("Name_Label")}
            value={state.fullname}
            onChangeText={(text) => setState({ ...state, fullname: text })}
          />
        </View>
        <Spacing space={SH(15)} />
        <View style={LoginScreenStyles.padH20}>
          <Input
            placeholder={t("Mobile_Number_Label")}
            keyboardType="numeric"
            value={state.mobilenumber}
            onChangeText={(text) => setState({ ...state, mobilenumber: text })}
          />
        </View>
        <Spacing space={SH(15)} />
        <View style={LoginScreenStyles.padH20}>
          <Input
            placeholder={t("Email_Address_Label")}
            autoCorrect={false}
            value={state.email}
            onChangeText={(text) => setState({ ...state, email: text })}
          />
        </View>
        <Spacing space={SH(25)} />
        <View style={LoginScreenStyles.padH20}>
          <Button title={t("Update_Label")}
            onPress={() => {
              setAlertOtpVisible(true);
              setAlertOtpMessage(alerOtptdata.logout);
            }}
          />
        </View>
      </View>
      <ConfirmationAlert
        iconVisible={true}
        message={alertOtpMessage}
        modalVisible={alertOtpVisible}
        setModalVisible={setAlertOtpVisible}
        onPress={() => { setAlertOtpVisible(!alertOtpVisible), OtpButton() }}
        buttonText={t("ok_Label")}
        source={images.loginsuccessful}
        Lottiewidthstyle={LoginScreenStyles.logoutStyel}
        buttonminview={LoginScreenStyles.centerBtn}
      />
    </Container>
  );
};

export default EditProfileScreen;
