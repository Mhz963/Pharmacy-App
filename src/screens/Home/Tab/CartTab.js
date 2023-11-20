import React, { useState, useMemo, useEffect } from 'react';
import { Text, View, Image, ScrollView, KeyboardAvoidingView, StatusBar, TouchableOpacity, FlatList, } from "react-native";
import { CartTabStyle } from '../../../styles';
import { Button, VectoreIcons, CartFlatListFun, Spacing } from '../../../components';
import { RouteName } from '../../../routes';
import { useSelector, useDispatch } from "react-redux";
import { price_symbol_action } from '../../../redux/action/CommonAction';
import images from '../../../index';
import { Colors, SF, SH, cartData } from '../../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';



const CartTab = ({ route, navigation }) => {

  const {cartData: cartDataInfo} = useSelector(state => state.cartInfo)
  const { doctoreDetaile } = useSelector(state => state.doctorDataReducer) || { doctoreDetaile };
  const { pricesymboldata } = useSelector(state => state.commonReducer) || {};
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const CartTabStyles = useMemo(() => CartTabStyle(Colors), [Colors]);
  const [DisplayAlert, setDisplayAlert] = useState(0)
  const [count, setCount] = useState(1);
  const [Applycoupon, setApplycoupon] = useState(0);
  const dispatch = useDispatch();

  const [totalAmount, setTotalAmount] = useState(0);

  let PriceSymbol = '£';

  useEffect(() => {
    dispatch(price_symbol_action(PriceSymbol))
    navigation.addListener('focus', () => {
      setDisplayAlert(0);
    });
  }, [navigation]);

  useEffect(() => {
    let total = Number(0)
    setTotalAmount(0)
    cartDataInfo.forEach(data => {
      total = Number(total) + Number(data.price.split(' – ')[0].replace('£', ''))
    })
    setTotalAmount(total)
  }, [cartDataInfo]);


  const AddItemFun = () => {
    setCount(count + 1)
  }
  const RemoveItemFun = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }


  return (
    <View style={CartTabStyles.minstyleviewphotograpgy}>

      {/* My cart data is displayed here */}
      {/*<View>*/}
      {/*  {cartDataInfo.map(cart => (*/}
      {/*      <Text>Item Name in Cart: {cart ? cart.name : ''}</Text>*/}
      {/*  ))}*/}

      {/*</View>*/}


      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgwhite} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={CartTabStyles.contentContainerStyle}>
        <View >
          <View style={[CartTabStyles.setwhitebox, CartTabStyles.cartboxwrap]}>
            <View style={CartTabStyles.flexsetviewwhitebox}>
              <View style={CartTabStyles.twoflexview}>
                <View style={CartTabStyles.settextflexview}>
                  <Text style={CartTabStyles.yourordertextset}>{t("Your_Order_Label")}</Text>
                </View>
                <View style={CartTabStyles.flexicondighit}>
                  <Text><VectoreIcons icon="Feather" name="shopping-bag" size={SF(20)} color={Colors.black_text_color} /></Text>
                  <Text style={CartTabStyles.twodigitset}>{cartDataInfo ? cartDataInfo?.length : 0}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate(RouteName.HOME_TAB)}>
                <VectoreIcons icon="AntDesign" name="close" size={SF(20)} color={Colors.black_text_color} />
              </TouchableOpacity>
            </View>
            <Spacing space={SH(20)} />
            <FlatList
              data={cartDataInfo}
              renderItem={({ item, index }) => (<CartFlatListFun item={item} RemoveItemFun={() => RemoveItemFun()}
                AddItemFun={() => AddItemFun()} count={count} pricesymboldata={pricesymboldata} Applycoupon={Applycoupon}
              />)}
              contentContainerStyle={CartTabStyles.cartFaltContainerStyle}
            />
          </View>
        </View>
      </ScrollView>

      <View style={CartTabStyles.positionabsolutesetbutton}>
        <View style={CartTabStyles.accountbutton}>
          {Applycoupon === 0 ?
            <View style={CartTabStyles.textcenyet}>
              <View>
                <Text style={CartTabStyles.digitaltextsettwo}>{pricesymboldata} {totalAmount.toFixed(2)}</Text>
                <Text style={CartTabStyles.viewdetailesbilltext}>{t("Total_Amount_Label")}</Text>
              </View>
            </View>
            :
            <View style={CartTabStyles.textcenyet}>
              <View>
                <Text style={CartTabStyles.digitaltextsettwo}>{pricesymboldata} {totalAmount.toFixed(2)}</Text>
                <Text style={CartTabStyles.viewdetailesbilltext}>{t("Total_Amount_Label")}</Text>
              </View>
            </View>
          }
          <View style={CartTabStyles.setbuttonwidthview}>
            <Button title={t("Checkout_Label")}
              onPress={() => navigation.navigate(RouteName.CHECK_OUT)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default CartTab;
