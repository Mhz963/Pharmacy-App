import React, { useMemo, useState } from "react";
import { View, ScrollView, StatusBar, FlatList, Text, TouchableOpacity } from "react-native";
import { SettingScreenStyle, LanguageStyles } from '../../../styles';
import { Colors, SF, Settingdatalist } from "../../../utils";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { SettingFlatList, VectoreIcons, ModalLanguage, Spacing } from '../../../components';

const SettingScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const SettingScreenStyles = useMemo(() => SettingScreenStyle(Colors), [Colors]);
  const LanguageStyless = useMemo(() => LanguageStyles(Colors), [Colors]);

  let englishLanguage = t("English");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectLabel, setSelectLabel] = useState(t(englishLanguage));

  const changeLang = (e) => {
    setSelectLabel(e)
  }

  return (
    <View style={SettingScreenStyles.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgwhite} />
      <ScrollView>
        <View style={SettingScreenStyles.minflexview}>
          <View style={SettingScreenStyles.minviewsigninscreen}>
            <FlatList
              data={Settingdatalist}
              renderItem={({ item, index }) => (<SettingFlatList item={item} onPress={() => navigation.navigate(item.uri)} />)}
              keyExtractor={item => item.id}
            />
            <Spacing />
            <Text style={LanguageStyless.Settingtext}>{t("Select_Your_Language")}</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={LanguageStyless.SettingStyle}>
              <Text style={LanguageStyless.SelectText}>{selectLabel}</Text>
              <View style={LanguageStyless.DropDownIcon}>
                <VectoreIcons icon="Feather" name="chevron-down" color={Colors.black_text_color} size={SF(25)} /></View>
            </TouchableOpacity>
            <ModalLanguage modalVisible={modalVisible}
              setModalVisible={() => {
                setModalVisible(!modalVisible);
              }}
              close={() => setModalVisible(!modalVisible)}
              OnClose={() => setModalVisible(false)}
              changeLang={changeLang}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingScreen;
