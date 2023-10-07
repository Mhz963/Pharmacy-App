import React, { useState, useMemo } from "react";
import { Text, View, Image, ScrollView, StatusBar } from "react-native";
import { SaveCardScreenStyle } from '../../styles';
import { AppHeader, Button, Container, Input, Spacing } from '../../components';
import images from '../../index';
import { RouteName } from '../../routes';
import { Colors, SH } from "../../utils";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const CreditCardScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const SaveCardScreenStyles = useMemo(() => SaveCardScreenStyle(Colors), [Colors]);

  const array = {
    name: '',
    cardNumber: '',
    expNum: '',
    cvv: '',
  }

  const [state, setState] = useState(array);

  return (
    <Container backgroundColor={Colors.anti_flash_white}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgwhite} /> 
      <Spacing />  
      <AppHeader Iconname={true} headerTitle={t("Credit_Card_Label")} onPress={() => navigation.navigate(RouteName.PAYMENT_SCREEN)} />
      <View style={SaveCardScreenStyles.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
        >
          <View style={SaveCardScreenStyles.keybordtopviewstyle}>
            <View style={SaveCardScreenStyles.minflexview}>
              <View style={SaveCardScreenStyles.minviewsigninscreen}>
                <View style={SaveCardScreenStyles.setwidthimage}>
                  <Image source={images.Crideit_card} resizeMode='cover' style={SaveCardScreenStyles.creditcard} />
                </View>
                <View style={SaveCardScreenStyles.setstyleinputtext}>
                  <Text style={SaveCardScreenStyles.textstyle}>{t("Name_Label")}</Text>
                  <Input
                    placeholder={t("Devid_Warner_Label")}
                    value={state.name}
                    onChangeText={(text) => setState({ ...state, name: text })}
                  />
                </View>
                <Text></Text>
                <View style={SaveCardScreenStyles.setstyleinputtext}>
                  <Text style={SaveCardScreenStyles.textstyle}>{t("Card_Number_Label")}</Text>
                  <Input
                    placeholder="1234567812345678"
                    value={state.cardNumber}
                    onChangeText={(text) => setState({ ...state, cardNumber: text })}
                  />
                </View>
                <View style={SaveCardScreenStyles.flexrowsetinput}>
                  <View style={SaveCardScreenStyles.setstyleinputtexttwo}>
                    <Text style={SaveCardScreenStyles.textstyle}>{t("Card_MM_YY_Label")}</Text>
                    <Input
                      placeholder="00/00"
                      value={state.expNum}
                      onChangeText={(text) => setState({ ...state, expNum: text })}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={SaveCardScreenStyles.setstyleinputtexttwo}>
                    <Text style={SaveCardScreenStyles.textstyle}>{t("Cvv_Label")}</Text>
                    <Input
                      placeholder="502"
                      value={state.cvv}
                      onChangeText={(text) => setState({ ...state, cvv: text })}
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                <Spacing space={SH(25)} />
                <View style={SaveCardScreenStyles.setbuttonstyle}>
                  <Button title={t("Save_Card_Label")}
                    onPress={() => navigation.navigate(RouteName.PAYMENT_SUCCESSFULLY)}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};

export default CreditCardScreen;
