import React, { useState, useMemo } from 'react';
import '../SelectLanguage/i18n'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Container, Lottie, Spacing, VectoreIcons, Button, ModalLanguage } from '../../../components';
import { LanguageStyles } from '../../../styles';
import { RouteName } from '../../../routes';
import images from '../../../index';
import { SH, Colors, SF, } from '../../../utils';

const Translation = (props) => {
  const { navigation } = props;
  const { t, i18n } = useTranslation();
  let englishLanguage = t("English");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectLabel, setSelectLabel] = useState(t(englishLanguage));
  const LanguageStyless = useMemo(() => LanguageStyles(Colors), [Colors]);

  const changeLang = (e) => {
    setSelectLabel(e)
  }

  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} />
      <View style={LanguageStyless.MinView}>
        <Lottie source={images.Languageanimation} />
        <Spacing space={SH(50)} />
        <TouchableOpacity onPress={() => setModalVisible(true)} style={LanguageStyless.SelectTagWrap}>
          <Text style={LanguageStyless.SelectText}>{selectLabel}</Text>
          <View style={LanguageStyless.DropDownIcon}>
            <VectoreIcons icon="Feather" name="chevron-down" color={Colors.theme_background} size={SF(25)} /></View>
        </TouchableOpacity>
        <Spacing space={SH(20)} />
        <ModalLanguage modalVisible={modalVisible}
          setModalVisible={() => {
            setModalVisible(!modalVisible);
          }}
          close={() => setModalVisible(!modalVisible)}
          OnClose={() => setModalVisible(false)}
          changeLang={changeLang}
        />
        <View style={LanguageStyless.BtnVieStyle}>
          <Button title={t("Confirm_Text")} onPress={() => navigation.navigate(RouteName.GET_STARTED_SCREEN)} />
        </View>
      </View>
    </Container>
  );
};
export default Translation;