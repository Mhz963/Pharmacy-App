import React, { useState, useMemo } from "react";
import { Text, View, Image, Linking, TouchableOpacity, } from "react-native";
import { LoginScreenStyle } from '../../../styles';
import images from '../../../index';
import { VectoreIcons, Button, Input, Spacing } from '../../../components';
import { Colors, SF, SH } from "../../../utils";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const SignUpScreen = (props) => {
  const { t } = useTranslation();
  const { SignUpOnPress, LoginRedirect } = props;
  const { Colors } = useTheme();
  const LoginScreenStyles = useMemo(() => LoginScreenStyle(Colors), [Colors]);

  const array = {
    fullname: '',
    mobilenumber: '',
    password: '',
    toggleCheckBox: false,
  }

  const [state, setState] = useState(array);
  const [textInputpassword, setTextInputPassword] = useState('');
  const [textConInputpassword, setConTextInputPassword] = useState('');
  const [passwordVisibility, setpasswordVisibility] = useState(true);
  const [passwordConVisibility, setpasswordConVisibility] = useState(true);

  const onChangeText = (text) => {
    if (text === 'TextInputPassword') setpasswordVisibility(!passwordVisibility);
    if (text === 'Conformpassword') setpasswordConVisibility(!passwordConVisibility);
  };


  return (

    <View style={LoginScreenStyles.tabminview}>
      <View style={[LoginScreenStyles.flexrowtwxtandgoogle, LoginScreenStyles.padH20]}>
        <View>
          <Text style={LoginScreenStyles.registertextstyle}>{t("Signup_Label")}</Text>
        </View>
        <View style={LoginScreenStyles.flexrowtwxtanimage}>
          <TouchableOpacity style={LoginScreenStyles.gooleiconsetwhiteshadow} onPress={() => Linking.openURL('https://accounts.google.com/signin/v2/challenge/pwd?rart=ANgoxcdbbNxH1nYXChBQ7n_DhSet9sRm1XXzUFTdrodQQJThJv3oPCktvjFuZq-YDK8WsXHW_gXYeU7G-XB1iBPG0qMJAeBgcA&TL=AKqFyY83GsHjazXV_PwFHjgH9TWEYKp_-8XvbZBPldYwb-yZ9LPv7QjDq-AK6ysc&flowName=GlifWebSignIn&cid=1&flowEntry=ServiceLogin')}>
            <Image style={LoginScreenStyles.googleimage} resizeMode='cover' source={images.Googleimg_set} />
          </TouchableOpacity>
          <TouchableOpacity style={LoginScreenStyles.gooleiconsetwhiteshadow} onPress={() => Linking.openURL('https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjU5Njk2NDc2LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D')}>
            <View style={LoginScreenStyles.facbookbgcolorset}>
              <VectoreIcons icon="EvilIcons" name="sc-facebook" size={SF(30)} color={Colors.facebook_logo_color} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={LoginScreenStyles.padH20}>
        <Input
          placeholder={t("Full_Name_Text")}
          value={state.fullname}
          onChangeText={(text) => setState({ ...state, fullname: text })}
          underlineColorAndroid="transparent"
          placeholderTextColor={Colors.sonic_silver}
        />
      </View>
      <Spacing />
      <View style={LoginScreenStyles.padH20}>
        <Input
          placeholder={t("Mobile_Number_Label")}
          inputType="numeric"
          value={state.mobilenumber}
          onChangeText={(text) => setState({ ...state, mobilenumber: text })}
          placeholderTextColor={Colors.sonic_silver}
          maxLength={10}
          underlineColorAndroid="transparent"
        />
      </View>
      <Spacing />
      <View style={LoginScreenStyles.padH20}>
        <Input
          name="password"
          value={textInputpassword}
          placeholder={t("Password_Text")}
          autoCorrect={false}
          placeholderTextColor={Colors.gray_text_color}
          textContentType="newPassword"
          secureTextEntry={passwordVisibility}
          onChangeText={(text) => setTextInputPassword(text)}
          rightIcon={<TouchableOpacity onPress={() => { onChangeText("TextInputPassword") }}>
            <VectoreIcons icon="Entypo" name={passwordVisibility ? "eye" : "eye-with-line"} size={SF(20)} style={LoginScreenStyles.passwordIcon} />
          </TouchableOpacity>}
        />
        <Spacing />
        <Input
          name="conformpassword"
          value={textConInputpassword}
          placeholder={t("Conform_Password")}
          autoCorrect={false}
          placeholderTextColor={Colors.gray_text_color}
          secureTextEntry={passwordConVisibility}
          onChangeText={(text) => setConTextInputPassword(text)}
          rightIcon={<TouchableOpacity onPress={() => { onChangeText("Conformpassword") }}>
            <VectoreIcons icon="Entypo" name={passwordConVisibility ? "eye" : "eye-with-line"} size={SF(20)} style={LoginScreenStyles.passwordIcon} />
          </TouchableOpacity>}
        />
      </View>
      <Spacing space={SH(25)} />

      <View style={[LoginScreenStyles.flexrowbutton, LoginScreenStyles.padH20]}>
        <View style={LoginScreenStyles.setbuttonviestylesinup}>
          <Button title={t("Signup_Label")}
            onPress={() => SignUpOnPress()}
          />
        </View>
        <TouchableOpacity style={LoginScreenStyles.allreadylogintext} onPress={() => LoginRedirect()}>
          <Text style={LoginScreenStyles.settextstyle}>{t("Already_Member")} {' '}<Text style={LoginScreenStyles.logintext}>{t("Login_Text")}</Text> </Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default SignUpScreen;
