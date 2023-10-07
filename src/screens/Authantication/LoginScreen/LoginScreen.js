import React, { useState, useMemo } from "react";
import { Text, View, Linking, TouchableOpacity, Image } from "react-native";
import { LoginScreenStyle } from '../../../styles';
import images from '../../../index';
import { Button, VectoreIcons, Input, Spacing } from '../../../components';
import { RouteName } from '../../../routes';
import { ForgotPassword } from '../../../screens';
import { Colors, SF, SH } from "../../../utils";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const LoginScreen = (props) => {
  const { Rediredt } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const LoginScreenStyles = useMemo(() => LoginScreenStyle(Colors), [Colors]);
  const [textInputName, setTextInputName] = useState('');
  const [textInputpassword, setTextInputPassword] = useState('');
  const [Screenset, setScreenset] = useState(0);
  const [passwordVisibility, setpasswordVisibility] = useState(true);

  const onChangeText = (text) => {
    if (text === 'TextInputPassword') setpasswordVisibility(!passwordVisibility);
  };

  return (
    <View>
      {Screenset === 0 ?
        <View style={LoginScreenStyles.paddingbottom}>
          <Text style={LoginScreenStyles.bordersetactive}></Text>
          <View style={LoginScreenStyles.tabminview}>
            <Spacing />
            <View style={LoginScreenStyles.padH20}>
              <Input
                placeholder={t("Username_Or_Mobile_Number_Label")}
                value={textInputName}
                onChangeText={(value) => { setTextInputName(value); }}
                underlineColorAndroid="transparent"
                placeholderTextColor={Colors.sonic_silver}
              />
            </View>
            <Spacing space={SH(15)} />
            <View style={LoginScreenStyles.padH20}>
              <Input
                name="password"
                value={textInputpassword}
                placeholder={t("Password_Text")}
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor={Colors.gray_text_color}
                textContentType="newPassword"
                secureTextEntry={passwordVisibility}
                enablesReturnKeyAutomatically
                onChangeText={(text) => setTextInputPassword(text)}
                rightIcon={<TouchableOpacity onPress={() => { onChangeText("TextInputPassword") }}>
                  <VectoreIcons icon="Entypo" name={passwordVisibility ? "eye" : "eye-with-line"} size={SF(20)} style={LoginScreenStyles.passwordIcon} />
                </TouchableOpacity>}
              />
            </View>
            <Spacing space={SH(15)} />
            <View style={LoginScreenStyles.padH20}>
              <TouchableOpacity onPress={setScreenset}>
                <Text style={LoginScreenStyles.textstyle} >{t("Forgot_password_Label")}</Text>
              </TouchableOpacity>
              <View style={LoginScreenStyles.buttonview}>
                <Button title={t("Login_Text")}
                  onPress={Rediredt}
                  buttonTextStyle={LoginScreenStyles.buttonTextStyle}
                />
              </View>
              <Text style={LoginScreenStyles.textColorset}>{t("Or_Label")}</Text>

              <Button title={t("Log_Facebook_Label")}
                icon={<VectoreIcons icon="EvilIcons" name="sc-facebook" color={Colors.white_text_color} size={SF(25)} />}
              />
              <Spacing space={SH(35)} />
              <Button title={t("Log_Google_Label")}
                icon={<Image source={images.Googleimg_set} style={LoginScreenStyles.leftImageStyle} resizeMode='cover' />}
                buttonTextStyle={LoginScreenStyles.buttonimagtexthree}
                buttonStyle={LoginScreenStyles.setbuttonborderradiuswhite}
              />
            </View>
          </View>
        </View>
        : <ForgotPassword />
      }
    </View>
  );
};

export default LoginScreen;
