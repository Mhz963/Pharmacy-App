import React, { useState, useMemo } from "react";
import { View, ScrollView, StatusBar, FlatList, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { SearchPopularMedicineStyle } from '../../../styles';
import { RouteName } from '../../../routes';
import { useSelector } from "react-redux";
import { SearchFilter, VectoreIcons, Input, SearchPopularFlattFun, AppHeader, Spacing } from '../../../components';
import { Colors, SF, HospitalListingdata, searchdataset } from "../../../utils";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const SearchPopularMedicine = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const SearchPopularMedicineStyles = useMemo(() => SearchPopularMedicineStyle(Colors), [Colors]);
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const [search, setSearch] = useState();

  return (
    <View style={SearchPopularMedicineStyles.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgwhite} />
      <Spacing />
      <AppHeader Iconname={true} headerTitle={t("Search_Text")} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={SearchPopularMedicineStyles.contentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={SearchPopularMedicineStyles.minflexview}>
            <View style={SearchPopularMedicineStyles.minviewsigninscreen}>
              <View style={SearchPopularMedicineStyles.setbgcolorred}></View>
              <View style={SearchPopularMedicineStyles.flexinputstyle}>
                <View style={SearchPopularMedicineStyles.flextextinput}>
                  <Input
                    placeholder={t("Search_Place_Label")}
                    value={search}
                    onChangeText={(searchInput) => setSearch(searchInput)}
                    leftIcon={<VectoreIcons icon="AntDesign" name={"search1"} size={SF(20)} />}
                  />
                </View>
                <TouchableOpacity style={SearchPopularMedicineStyles.seticonborder}>
                  <VectoreIcons icon="FontAwesome" name="filter" size={SF(20)} color={Colors.filterIcon} />
                </TouchableOpacity>
              </View>
              <View style={SearchPopularMedicineStyles.setbgcolorviewmin}>
                <View style={SearchPopularMedicineStyles.bgcolorsetvikewstyle}>
                  <FlatList
                    data={searchdataset}
                    renderItem={({ item, index }) => (<SearchFilter item={item} />)}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
                <View style={SearchPopularMedicineStyles.setspacecomeview}>
                  <FlatList
                    data={HospitalListingdata}
                    renderItem={({ item, index }) => (<SearchPopularFlattFun item={item} onPress={() => navigation.navigate((RouteName.HOSPITAL_MEDICINE_SCREEN), { img: item.image })} />)}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>

  );
};

export default SearchPopularMedicine;
