import React, { useState, useEffect, useMemo } from "react";
import { View, FlatList, ScrollView, } from "react-native";
import { ProductItemListStyle } from '../../../styles';
import { RouteName } from '../../../routes';
import { useDispatch } from "react-redux";
import { get_doctore_detailes_action } from '../../../redux/action/DoctoreDataAction';
import { Colors, SH, SF } from '../../../utils';
import Docterproductdata from "../../../../data.json"
import { useSelector } from "react-redux";
import { price_symbol_action } from '../../../redux/action/CommonAction';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { Spacing, ProductListFun, AppHeader, Container } from "../../../components";
import {add_cart} from '../../../redux/action/cartAction';

const ProductItemList = (props) => {
  const { pricesymboldata } = useSelector(state => state.commonReducer) || {};
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const ProductItemListStyles = useMemo(() => ProductItemListStyle(Colors), [Colors]);
  const dispatch = useDispatch();
  const [liked, setLiked] = useState([]);
  const {cartData} = useSelector(state => state.cartInfo)

  let PriceSymbol = '£';

  const doctordata = (docterdata) => {
    dispatch(get_doctore_detailes_action(docterdata))
    navigation.navigate(RouteName.PRODUCT_DETAILS_SCREEN)
  }
  useEffect(() => {
    dispatch(price_symbol_action(PriceSymbol))
  }, []);

  const LikUnlikeFun = (index) => {
    if (liked.includes(index)) {
      let unlike = liked.filter((elem) => elem !== index);
      setLiked(unlike);
    } else {
      setLiked([...liked, index]);
    }
  }

  return (
    <Container>
      <Spacing />
      <AppHeader Iconname={true} headerTitle={t("Product_List")} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} />
      <View style={[ProductItemListStyles.minstyleviewphotograpgy, ProductItemListStyles.bgcolorset]}>
        <ScrollView >
          <View style={ProductItemListStyles.minflexview}>
            <FlatList
              data={Docterproductdata}
              numColumns={2}
              renderItem={({ item, index }) => (<ProductListFun key={index} item={item} index={index} CartHandle={() => {
                dispatch(add_cart([...cartData, item]));
                navigation.navigate(RouteName.CART_TAB);
              }}
                ProductDatilsHandle={() => navigation.navigate(RouteName.PRODUCT_DETAILS_SCREEN, { img: item.image, sku: item.SKU, name: item.name })}
                pricesymboldata={pricesymboldata}
                LikUnlikeFun={() => LikUnlikeFun(index)}
                liked={liked}
              />)}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={ProductItemListStyles.listContainerStyle}
            />
            <Spacing space={SH(100)} />
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};
export default ProductItemList;
