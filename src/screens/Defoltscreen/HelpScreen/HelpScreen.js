import React, { useState, useEffect, useMemo } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, } from "react-native";
import { HelpScreenStyle } from '../../../styles';
import { ConfirmationAlert, Button, Input, Spacing } from '../../../components';
import { RouteName } from '../../../routes';
import { Colors } from "../../../utils";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const HelpScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const HelpScreenStyles = useMemo(() => HelpScreenStyle(Colors), [Colors]);
  const [value, onChangeText] = useState('');

  const [alertOtpVisible, setAlertOtpVisible] = useState(false);
  const [alertOtpMessage, setAlertOtpMessage] = useState('');

  let alerOtptdata = {
    'logout': t("Email_Send_Successful_Label"),
  }
  const OtpButton = () => {
    navigation.navigate(RouteName.HOME_TAB);
  }
  return (
    <View style={HelpScreenStyles.minstyleviewphotograpgy}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={HelpScreenStyles.contentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={HelpScreenStyles.minflexview}>
            <View style={HelpScreenStyles.minviewsigninscreen}>
              <Spacing />
              <View>
                <Input
                  placeholder={t("Type_Your_Message_Label")}
                  inputContainerStyle={HelpScreenStyles.inputUnderLine}
                  containerStyle={HelpScreenStyles.containerStyle}
                  multiline={true}
                  numberOfLines={5}
                  onChangeText={text => onChangeText(text)}
                  value={value}
                />
              </View>
              <View>
                <Text style={HelpScreenStyles.settextinputtext}>{t("Help_Some_Text_Label")}</Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={HelpScreenStyles.setbuttonstyle}>
        <Button buttonTextStyle={HelpScreenStyles.btnTextStyle}
          title={t("Help_sand_mail")}
          onPress={() => {
            setAlertOtpVisible(true);
            setAlertOtpMessage(alerOtptdata.logout);
          }} />
      </View>
      <ConfirmationAlert
        iconVisible={true}
        message={alertOtpMessage}
        modalVisible={alertOtpVisible}
        setModalVisible={setAlertOtpVisible}
        onPress={() => { setAlertOtpVisible(!alertOtpVisible), OtpButton() }}
        buttonText={t("ok_Label")}
        buttonminview={HelpScreenStyles.centerBtn}
      />


    </View>
  );
};
export default HelpScreen;
