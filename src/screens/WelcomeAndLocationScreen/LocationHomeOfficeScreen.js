import React, { useMemo, useState } from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, StatusBar, TouchableOpacity, } from "react-native";
import { LocationHomeOfficeScreenStyle } from '../../styles';
import images from '../../index';
import { RouteName } from '../../routes';
import { Colors, SF, SH } from "../../utils";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { VectoreIcons, Input, Spacing } from "../../components";

const LocationHomeOfficeScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const LocationHomeOfficeScreenStyles = useMemo(() => LocationHomeOfficeScreenStyle(Colors), [Colors]);
  const [search, setSearch] = useState();

  const OnLoginPress = () => {
    navigation.replace(RouteName.CONFORMLOCATION_SET);
  }
  const Welcomesumnaya = () => {
    navigation.replace(RouteName.WELCOME_SCREEN);
  }
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.theme_background} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={LocationHomeOfficeScreenStyles.contentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={LocationHomeOfficeScreenStyles.minflexview}>
            <View style={LocationHomeOfficeScreenStyles.minviewsigninscreen}>
              <View style={LocationHomeOfficeScreenStyles.setflexcenter}>
                <Image style={LocationHomeOfficeScreenStyles.homeimage} resizeMode='cover' source={images.medicine_image} />
              </View>
            </View>
            <View style={LocationHomeOfficeScreenStyles.minstyleviewphotograpgy}>
              <View style={LocationHomeOfficeScreenStyles.bgwhiteview}>
                <TouchableOpacity onPress={() => Welcomesumnaya()} style={LocationHomeOfficeScreenStyles.flexrowdilevericon}>
                  <VectoreIcons icon="Entypo" name="chevron-small-left" size={SF(30)} color={Colors.deep_koamaru} />
                  <Text style={LocationHomeOfficeScreenStyles.dilivertotextstyle}>{t("Deliver_To_Label")}</Text>
                </TouchableOpacity>
                <Spacing space={SH(20)} />
                <Input
                  placeholder={t("Search_Location_Label")}
                  value={search}
                  onChangeText={(searchInput) => setSearch(searchInput)}
                  containerStyle={LocationHomeOfficeScreenStyles.containerStyle}
                  inputContainerStyle={LocationHomeOfficeScreenStyles.inputContainerStyle}
                  leftIcon={<VectoreIcons icon="AntDesign" name={"search1"} size={SF(20)}
                  />}
                />
                <Spacing space={SH(15)} />
                <TouchableOpacity style={LocationHomeOfficeScreenStyles.flexrowhomeimage} onPress={() => (navigation.replace(RouteName.CONFORMLOCATION_SET))}>
                  <View style={LocationHomeOfficeScreenStyles.marginright}>
                    <VectoreIcons icon="Ionicons" name="home-outline" size={SF(25)} color={Colors.deep_koamaru} />
                  </View>
                  <View>
                    <Text style={LocationHomeOfficeScreenStyles.satyanilaym}>{t("Satya_Nilayam_Label")}</Text>
                    <Text style={LocationHomeOfficeScreenStyles.satyanilaymtwo}>{t("ConfirmLocation_Label")}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={LocationHomeOfficeScreenStyles.flexrowhomeimage} onPress={() => (navigation.replace(RouteName.ConfirmLocation_SET))}>
                  <View style={LocationHomeOfficeScreenStyles.marginright}>
                    <VectoreIcons icon="Ionicons" name="ios-location-outline" size={SF(25)} color={Colors.deep_koamaru} />
                  </View>
                  <View>
                    <Text style={LocationHomeOfficeScreenStyles.satyanilaym}>{t("Current_Location_label")}</Text>
                    <Text style={LocationHomeOfficeScreenStyles.satyanilaymtwo}>{t("ConfirmLocation_Label")}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={LocationHomeOfficeScreenStyles.flexrowhomeimage} onPress={() => (navigation.replace(RouteName.CONFORMLOCATION_SET))}>
                  <View style={LocationHomeOfficeScreenStyles.marginright}>
                    <VectoreIcons icon="FontAwesome5" name="search-location" size={SF(22)} color={Colors.deep_koamaru} />
                  </View>
                  <View>
                    <Text style={LocationHomeOfficeScreenStyles.satyanilaym}>{t("Look_Up_The_Map")}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={LocationHomeOfficeScreenStyles.flexrowset}>
                <TouchableOpacity>
                  <Text style={LocationHomeOfficeScreenStyles.saveaddresh}>{t("Saved_Addresses_Label")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={LocationHomeOfficeScreenStyles.edittextflexpencil} onPress={() => (navigation.replace(RouteName.EDIT_LOCATION_SCREEN))}>
                  <Text style={LocationHomeOfficeScreenStyles.saveaddresh}>{t("Edit_Label")}</Text>
                  <VectoreIcons icon="FontAwesome5" name="pencil-alt" size={SF(17)} color={Colors.philippine_gray} />
                </TouchableOpacity>
              </View>
              <View style={LocationHomeOfficeScreenStyles.setbgminviewhome}>
                <TouchableOpacity onPress={() => OnLoginPress()} style={LocationHomeOfficeScreenStyles.setwhiteboxinhome}>
                  <View>
                    <View style={LocationHomeOfficeScreenStyles.iconcenter}>
                      <VectoreIcons icon="Ionicons" name="home-outline" size={SF(25)} color={Colors.deep_koamaru} />
                    </View>
                    <Text style={LocationHomeOfficeScreenStyles.sethometext}>{t("Home_Label")}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => OnLoginPress()} style={LocationHomeOfficeScreenStyles.setwhiteboxinhome}>
                  <View>
                    <View style={LocationHomeOfficeScreenStyles.iconcenter}>
                      <VectoreIcons icon="Feather" name="user" size={SF(25)} color={Colors.deep_koamaru} />
                    </View>
                    <Text style={LocationHomeOfficeScreenStyles.sethometext}>{t("Office_Text")}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default LocationHomeOfficeScreen;
