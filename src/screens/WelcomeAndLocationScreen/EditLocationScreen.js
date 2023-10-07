import React, { useMemo, useState } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, StatusBar, TouchableOpacity, } from "react-native";
import { ConfirmLocationStyle } from '../../styles';
import { RouteName } from '../../routes';
import { Colors, SF, SH } from '../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { AppHeader, VectoreIcons, Input, Spacing } from "../../components";

const EditLocationScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const ConfirmLocationStyles = useMemo(() => ConfirmLocationStyle(Colors), [Colors]);
  const [search, setSearch] = useState();

  return (
    <View style={ConfirmLocationStyles.minstyleviewphotograpgys}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgwhite} />
      <Spacing />
      <AppHeader Iconname={true} headerTitle={t("Delivery_Location_Label")} onPress={() => navigation.navigate(RouteName.CONFORMLOCATION_SET)} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={ConfirmLocationStyles.contentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={ConfirmLocationStyles.minflexview}>
            <View style={ConfirmLocationStyles.modalView}>
              <Input
                placeholder={t("Search_Location_Label")}
                value={search}
                onChangeText={(searchInput) => setSearch(searchInput)}
                containerStyle={ConfirmLocationStyles.containerStyle}
                leftIcon={<VectoreIcons icon="AntDesign" name={"search1"} size={SF(20)}
                />}
              />
              <Spacing space={SH(20)} />
              <TouchableOpacity style={ConfirmLocationStyles.flexrowsetlocationmap} onPress={() => (navigation.replace(RouteName.CONFORMLOCATION_SET))}>
                <View>
                  <VectoreIcons icon="Ionicons" name="locate-sharp" size={SF(26)} color={Colors.deep_koamaru} />
                </View>
                <View style={ConfirmLocationStyles.setmarginleftgps}>
                  <Text style={ConfirmLocationStyles.cureentlocationtext}>{t("Current_Location_label")}</Text>
                  <Text style={ConfirmLocationStyles.usingtextlocation}>{t("Using_GPS_Label")}</Text>
                </View>
              </TouchableOpacity>
              <Spacing space={SH(20)} />
              <TouchableOpacity style={ConfirmLocationStyles.flexrowhomeimage} onPress={() => navigation.navigate(RouteName.CONFORMLOCATION_SET)}>
                <View style={ConfirmLocationStyles.marginright}>
                  <VectoreIcons icon="Ionicons" name="home-outline" size={SF(25)} color={Colors.deep_koamaru} />
                </View>
                <View>
                  <Text style={ConfirmLocationStyles.satyanilaym}>{t("Satya_Nilayam_Label")}</Text>
                  <Text style={ConfirmLocationStyles.satyanilaymtwo}>{t("ConfirmLocation_Label")}</Text>
                </View>
              </TouchableOpacity>
              <Spacing space={SH(20)} />
              <TouchableOpacity style={ConfirmLocationStyles.flexrowhomeimage} onPress={() => navigation.navigate(RouteName.CONFORMLOCATION_SET)}>
                <View style={ConfirmLocationStyles.marginright}>
                  <VectoreIcons icon="MaterialIcons" name="work-outline" size={SF(25)} color={Colors.deep_koamaru} />
                </View>
                <View>
                  <Text style={ConfirmLocationStyles.satyanilaym}>{t("Work_Label")}</Text>
                  <Text style={ConfirmLocationStyles.satyanilaymtwo}>{t("ConfirmLocation_Label")}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default EditLocationScreen;
