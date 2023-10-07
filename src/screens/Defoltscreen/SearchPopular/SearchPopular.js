import React, { useState, useMemo } from "react";
import { View, ScrollView, StatusBar, FlatList, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { SearchPopularStyle } from '../../../styles';
import { RouteName } from '../../../routes';
import { useSelector } from "react-redux";
import { Colors, SF, Tabletname, HospitalListingdata, } from "../../../utils";
import { AppHeader, Input, VectoreIcons, TabletListFlat, SearchPopularFlattFun, Spacing } from "../../../components";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const SearchPopular = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const [search, setSearch] = useState();
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const SearchPopularStyles = useMemo(() => SearchPopularStyle(Colors), [Colors]);

  return (
    <View style={SearchPopularStyles.minstyleviewphotograpgy}>
      <Spacing />
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgwhite} />
      <AppHeader Iconname={true} headerTitle={t("Search_By_Popular_Label")} onPress={() => navigation.navigate(RouteName.POPULAR_SCREEN)} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={SearchPopularStyles.contentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={SearchPopularStyles.minflexview}>
            <View style={SearchPopularStyles.minviewsigninscreen}>
              <View style={SearchPopularStyles.setbgcolorred}></View>
              <View style={SearchPopularStyles.flexinputstyle}>
                <View style={SearchPopularStyles.flextextinput}>
                  <Input
                    placeholder={t("Search_Place_Label")}
                    value={search}
                    onChangeText={(searchInput) => setSearch(searchInput)}
                    leftIcon={<VectoreIcons icon="AntDesign" name={"search1"} size={SF(20)} />}
                  />
                </View>
                <TouchableOpacity style={SearchPopularStyles.seticonborder}>
                  <VectoreIcons icon="FontAwesome" name="filter" size={SF(20)} color={Colors.filterIcon} />
                </TouchableOpacity>
              </View>
              <View style={SearchPopularStyles.setspacecomeview}>
                <FlatList
                  data={Tabletname}
                  renderItem={({ item, index }) => (<TabletListFlat item={item} onPress={() => navigation.navigate((RouteName.PRODUCT_DETAILS_SCREEN), { img: item.image })} />)}
                  horizontal={true}
                  contentContainerStyle={SearchPopularStyles.pad20}
                />
              </View>
              <View style={SearchPopularStyles.bgcolorwhiteset}>
                <FlatList
                  data={HospitalListingdata}
                  renderItem={({ item, index }) => (<SearchPopularFlattFun item={item} onPress={() => navigation.navigate((RouteName.PRODUCT_DETAILS_SCREEN), { img: item.image, title: item.text, hname: item.hospitalname })} />)}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default SearchPopular;
