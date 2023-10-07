import React, { useMemo, useState } from "react";
import { Text, View, ScrollView, } from "react-native";
import { RatinsgScreenStyle } from '../../styles';
import { Button, Lottie, RatingFun, Input, ConfirmationAlert, Spacing } from '../../components';
import images from '../../index';
import { RouteName } from '../../routes';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const RatingScreen = (porps) => {
  const { navigation } = porps;

  const { t } = useTranslation();
  const { Colors } = useTheme();
  const RatinsgScreenStyles = useMemo(() => RatinsgScreenStyle(Colors), [Colors]);
  const [alertVisibleUpdate, setAlertVisibleUpdate] = useState(false);
  const [alertMessageUpdate, setAlertMessageUpdate] = useState('');
  const [value, onChangeText] = useState('');

  let alertdataUpdate = {
    updateAlet: t("Rating_Tag_Line_Label"),
  }

  const profileUpdate = () => {
    navigation.navigate(RouteName.ACCOUNT_TAB_SET);
  }

  return (
    <View style={RatinsgScreenStyles.minstyleviewphotograpgytwo}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={RatinsgScreenStyles.contentContainerStyle}>
        <View style={RatinsgScreenStyles.keybordtopviewstyle}>
          <View style={RatinsgScreenStyles.minflexview}>
            <View style={RatinsgScreenStyles.minviewsigninscreen}>
              <Lottie
                source={images.rating}
              />
              <Text style={RatinsgScreenStyles.accounttexttwo}>{t("Please_Rate_The_Pharmacy_Label")}</Text>
              <View style={RatinsgScreenStyles.flexrowsetstarsignup}>
                <RatingFun
                  type='custom'
                  ratingColor={Colors.amber_color}
                  ratingBackgroundColor={Colors.border_color}
                  ratingCount={5}
                  tintColor={Colors.bgwhite}
                  imageSize={35}
                  startingValue={3.5}
                  isDisabled={false}
                />
              </View>
              <Text style={RatinsgScreenStyles.accounttextsuccessfullytwo}>{t("Your_Searvice_Label")}</Text>
              <Input
                placeholder={t("Enter_Comment_PlaceHolder_Label")}
                inputContainerStyle={RatinsgScreenStyles.inputUnderLine}
                containerStyle={RatinsgScreenStyles.containerStyle}
                multiline={true}
                numberOfLines={5}
                onChangeText={text => onChangeText(text)}
                value={value}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={RatinsgScreenStyles.accountbutton}>
        <Button title={t("Reviews_Submit")} onPress={() => {
          setAlertVisibleUpdate(true);
          setAlertMessageUpdate(alertdataUpdate.updateAlet);
        }}></Button>
      </View>
      <Spacing />
      <ConfirmationAlert
        message={alertMessageUpdate}
        modalVisible={alertVisibleUpdate}
        setModalVisible={setAlertVisibleUpdate}
        onPressCancel={() => setAlertVisible(!alertVisibleUpdate)}
        onPress={() => { setAlertVisibleUpdate(!alertVisibleUpdate), profileUpdate() }}
        buttonText={t("ok_Label")}
        animationIcon={true}
        source={images.loginsuccessful}
        Lottiewidthstyle={RatinsgScreenStyles.successtyle}
        buttonminview={RatinsgScreenStyles.centerBtn}
      />
    </View>
  );
};

export default RatingScreen;
