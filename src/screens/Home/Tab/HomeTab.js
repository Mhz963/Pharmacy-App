import React, { useEffect, useState, useMemo } from 'react';
import { View, ScrollView, Text, FlatList, StatusBar } from "react-native";
import { HometabStyle } from '../../../styles';
import { RouteName } from '../../../routes';
import { useDispatch } from "react-redux";
import { TrendingHomeFlatFun, HomeFirstImageSlider, HomeCategoryFlatFun, DealsOfTheDay, PopularHomeFlatFun, Spacing } from '../../../components';
import { get_doctore_category_action } from '../../../redux/action/DoctoreCategoryAction';
import { useSelector } from "react-redux";
import { get_doctore_detailes_action } from '../../../redux/action/DoctoreDataAction';
import { SearchHeaderScreen } from '../../../screens';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { price_symbol_action } from '../../../redux/action/CommonAction';
import { SH, MedicineCategoryHomeTab, MegaMedicine } from '../../../utils';
import TodayDeals from "../../../../data.json"
import {add_cart} from '../../../redux/action/cartAction';

const HomeTabset = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { pricesymboldata } = useSelector(state => state.commonReducer) || {};
  const [liked, setLiked] = useState([]);
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const HometabStyles = useMemo(() => HometabStyle(Colors), [Colors]);
  const {cartData} = useSelector(state => state.cartInfo)

  let PriceSymbol = '£';
  useEffect(() => {
    dispatch(price_symbol_action(PriceSymbol))
  }, []);

  const doctordata = (docterdata) => {
    dispatch(add_cart([...cartData, docterdata]));
    dispatch(get_doctore_detailes_action(docterdata))
    navigation.navigate(RouteName.CART_TAB)
  }

  const doctordatatendingmenu = (docterdata) => {
    dispatch(add_cart([...cartData, docterdata]));
    dispatch(get_doctore_detailes_action(docterdata))
    navigation.navigate(RouteName.CART_TAB)
  }
  const LikeUnlikeFun = (index) => {
    if (liked.includes(index)) {
      let unlike = liked.filter((elem) => elem !== index);
      setLiked(unlike);
    } else {
      setLiked([...liked, index]);
    }
  }

  const doctordatacategoryes = (doctordatacategoryes) => {
    dispatch(get_doctore_category_action(doctordatacategoryes))
    navigation.navigate(RouteName.PRODUCT_LIST_ITEM)
  }

  return (
    <View style={[HometabStyles.minstyleviewphotograpgy, HometabStyles.bgcolorset]}>
      <StatusBar backgroundColor={Colors.bgwhite} barStyle={'dark-content'} />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={HometabStyles.contentContainerStyle}>
        <View style={HometabStyles.minflexview}>
          {/* componets import */}
          <SearchHeaderScreen onPress={() => navigation.navigate(RouteName.POPULAR_SCREEN)} />
          <HomeFirstImageSlider onPress={() => navigation.navigate(RouteName.PRODUCT_LIST_ITEM)} />
          {/* componets end */}
          <View style={HometabStyles.marginsetminview}>
            <Text style={HometabStyles.settopcategoriesnine}>{t("Trending_Categories_Label")}</Text>
            <FlatList
              data={MedicineCategoryHomeTab}
              renderItem={({ item, index }) => (<HomeCategoryFlatFun item={item} onPress={() => doctordatacategoryes(item)} />)}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={HometabStyles.setflex}
              contentContainerStyle={HometabStyles.categoryContainer}
            />
            <View style={[HometabStyles.settopmargin, HometabStyles.bgcolorset]}>
              <Text style={HometabStyles.settopcategories}>{t("Deals_Of_The_Day_Label")}</Text>
              <FlatList
                data={TodayDeals}
                renderItem={({ item, index }) => (
                  <DealsOfTheDay key={index} item={item}
                    onPress={() => navigation.navigate(RouteName.PRODUCT_DETAILS_SCREEN, { img: item.image, sku: item.SKU, name: item.name })}
                    DoctorHandle={() => doctordata(item)}
                    pricesymboldata={pricesymboldata}
                  />)}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={HometabStyles.dealsContainer}
              />
            </View>
            <Text style={HometabStyles.settopcategories}>{t("Popular_Medicine_Label")}</Text>
            <FlatList
              data={TodayDeals}
              renderItem={({ item, index }) => (
                <PopularHomeFlatFun key={index} item={item}
                  onPress={() => navigation.navigate(RouteName.PRODUCT_DETAILS_SCREEN, { img: item.image, sku: item.SKU, name: item.name })}
                  CartTabHandle={() => {
                    dispatch(add_cart([...cartData, item]));
                    navigation.navigate(RouteName.CART_TAB);
                  }}
                  pricesymboldata={pricesymboldata}
                />)}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={HometabStyles.setflex}
              contentContainerStyle={HometabStyles.dealsContainer}
            />
          </View>
          <Spacing />
          <Text style={HometabStyles.settopcategories}>{t("Trending_Store_Label")}</Text>
          <Spacing space={SH(5)} />
          <FlatList
            data={MegaMedicine}
            renderItem={({ item, index }) => (
              <TrendingHomeFlatFun item={item} index={index}
                LikeUnlikeFun={(index) => LikeUnlikeFun(index)}
                onPress={() => navigation.navigate((RouteName.PRODUCT_DETAILS_SCREEN), { img: item.image, title: item.text, hname: item.hospitalname })}
                doctordatatendingmenu={() => doctordatatendingmenu(item)}
                pricesymboldata={pricesymboldata}
                liked={liked}
              />)}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={HometabStyles.setflex}
            contentContainerStyle={HometabStyles.dealsContainer}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default HomeTabset;
