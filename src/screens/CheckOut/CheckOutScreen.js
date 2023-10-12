import React, { useState, useEffect, useMemo } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, TouchableOpacity, FlatList, } from "react-native";
import { CartTabStyle } from '../../styles';
import { Button, ConfirmationAlert, CheckOutFlatFun, Spacing, VectoreIcons, Input, AppHeader } from '../../components';
import { RouteName } from '../../routes';
import { useSelector, useDispatch } from "react-redux";
import { price_symbol_action } from '../../redux/action/CommonAction';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { SH, SF, Colors, checkoutItemData } from '../../utils';
import images from '../../index';

const CheckOutScreen = (props) => {
  const {cartData: cartDataInfo} = useSelector(state => state.cartInfo)
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const CartTabStyles = useMemo(() => CartTabStyle(Colors), [Colors]);
  const { doctoreDetaile } = useSelector(state => state.doctorDataReducer) || { doctoreDetaile };
  const { pricesymboldata } = useSelector(state => state.commonReducer) || {};
  const [alertVisibleUpdate, setAlertVisibleUpdate] = useState(false);
  const [alertMessageUpdate, setAlertMessageUpdate] = useState('');
  const [count, setCount] = useState(1);
  const [Applycoupon, setApplycoupon] = useState(0);
  const [value, onChangeText] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);

  const dispatch = useDispatch();
  let PriceSymbol = '£';

  useEffect(() => {
    dispatch(price_symbol_action(PriceSymbol));
  }, []);

  useEffect(() => {
    let total = Number(0)
    setTotalAmount(0)
    cartDataInfo.forEach(data => {
      total = Number(total) + Number(Number(data.price.split(' – ')[0].replace('£', '')).toFixed(2))
    })
    setTotalAmount(total)
  }, [cartDataInfo]);

  let alertdataUpdate = {
    updateAlet: t("Apply_Successfully_Label"),
  }
  const profileUpdate = () => {
    navigation.navigate(RouteName.CHECK_OUT);
  }
  return (
    <View style={[CartTabStyles.minstyleviewphotograpgy, CartTabStyles.bgcolorset]}>
      <Spacing />
      <AppHeader Iconname={true} headerTitle={t("Checkout_Label")} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={CartTabStyles.contentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={[CartTabStyles.minflexview, CartTabStyles.checkoutboxwrap]}>
            <View style={CartTabStyles.minviewsigninscreen}>
              <View style={CartTabStyles.setwhitebox}>
                <View style={CartTabStyles.flexsetviewwhitebox}>
                  <View style={CartTabStyles.twoflexview}>
                    <View style={CartTabStyles.settextflexview}>
                      <Text style={CartTabStyles.yourordertextset}>{t("Order_Label")}</Text>
                    </View>
                    <View style={CartTabStyles.flexicondighit}>
                      <Text><VectoreIcons icon="Feather" name="shopping-bag" size={SF(20)} color={Colors.black_text_colorss} /></Text>
                      <Text style={CartTabStyles.twodigitset}>2</Text>
                    </View>
                  </View>
                </View>
                <View style={CartTabStyles.bgcolorhomeaddresh}>
                  <View style={CartTabStyles.minflehomeandedit}>
                    <View style={CartTabStyles.flexhomeaddresh}>
                      <View>
                        <VectoreIcons icon="Ionicons" name="md-home-outline" size={SF(27)} color={Colors.white_text_color} />
                      </View>
                      <View>
                        <Text style={CartTabStyles.satyanilayam}>{t("Satya_Nilayam_Label")}</Text>
                        <Text style={CartTabStyles.homeaddress_text_color}>{t("ConfirmLocation_Label")}</Text>
                      </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate(RouteName.EDIT_LOCATION_SCREEN)}>
                      <VectoreIcons icon="Feather" name='edit' size={SF(25)} color={Colors.white_text_color} />
                    </TouchableOpacity>
                  </View>
                  <View style={CartTabStyles.minflehomeandedittwo}>
                    <View style={CartTabStyles.flexhomeaddreshtwo}>
                      <View style={CartTabStyles.setclockbgview}>
                        <VectoreIcons icon="AntDesign" name="clockcircleo" size={SF(20)} color={Colors.deep_koamaru_color} />
                      </View>
                      <View>
                        <Text style={CartTabStyles.satyanilayamtwo}>{t("Addition_Data_Label_1")}</Text>
                      </View>
                    </View>
                    <TouchableOpacity>
                      <VectoreIcons icon="MaterialIcons" name='schedule' size={SF(27)} color={Colors.white_text_color} />
                    </TouchableOpacity>
                  </View>
                </View>
                <Spacing space={SH(20)} />
                <View style={CartTabStyles.padH20}>
                  <FlatList
                    data={cartDataInfo}
                    renderItem={({ item, index }) => (<CheckOutFlatFun item={item} onPress={() => navigation.navigate(RouteName.PRODUCT_DETAILS_SCREEN)} Applycoupon={Applycoupon} pricesymboldata={pricesymboldata} count={count} />)}
                  />
                  <Spacing space={SH(20)} />
                  <View style={CartTabStyles.textinputandbuttonflex}>
                    <View style={CartTabStyles.containerStyle}>
                      <Input
                        placeholder={t("Enter_Promo_Code_Label")}
                        keyboardType={'number-pad'}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        containerStyle={CartTabStyles.inputContainerStyle}
                        inputContainerStyle={CartTabStyles.inputInContainerStyle}
                      />
                    </View>
                    <View style={CartTabStyles.setbutttonview}>
                      <Button onPress={() => {
                        setAlertVisibleUpdate(true);
                        setAlertMessageUpdate(alertdataUpdate.updateAlet);
                        setApplycoupon(1);
                      }} buttonTextStyle={CartTabStyles.textstyle} title={t("Apply_Label")} />
                    </View>
                  </View>
                  <Spacing space={SH(20)} />
                  <View style={CartTabStyles.setviewlistbill}>
                    {Applycoupon === 0 ?
                      <View style={CartTabStyles.flexrowspacebeetveen}>
                        <Text style={CartTabStyles.subtotaltext}>{t("Subtotal_Label")}</Text>
                        <Text style={CartTabStyles.digitaltext}>{pricesymboldata} {totalAmount.toFixed(2)}</Text>
                      </View>
                      :
                      <View style={CartTabStyles.flexrowspacebeetveen}>
                        <Text style={CartTabStyles.subtotaltext}>{t("Subtotal_Label")}</Text>
                        <Text style={CartTabStyles.digitaltext}>{pricesymboldata} {totalAmount.toFixed(2)}</Text>
                      </View>
                    }
                    {Applycoupon === 0 ?
                      <View style={CartTabStyles.flexrowspacebeetveen}>
                        <Text style={CartTabStyles.subtotaltext}>{t("Delivery_Label")}</Text>
                        <Text style={CartTabStyles.digitaltext}>{pricesymboldata} 45</Text>
                      </View>
                      :
                      <View style={CartTabStyles.flexrowspacebeetveen}>
                        <Text style={CartTabStyles.subtotaltext}>{t("Delivery_Label")}</Text>
                        <Text style={CartTabStyles.digitaltext}>{pricesymboldata} 35</Text>
                      </View>
                    }
                    {Applycoupon === 0 ?
                      <View style={CartTabStyles.flexrowspacebeetveen}>
                        <Text style={CartTabStyles.digitaltextsettwo}>{t("Total_Label")}</Text>
                        <Text style={CartTabStyles.digitaltextsettwo}>{pricesymboldata} {Number(totalAmount.toFixed(2)) + 45}</Text>
                      </View>
                      :
                      <View style={CartTabStyles.flexrowspacebeetveen}>
                        <Text style={CartTabStyles.digitaltextsettwo}>{t("Total_Label")}</Text>
                        <Text style={CartTabStyles.digitaltextsettwo}>{pricesymboldata} {Number(totalAmount.toFixed(2)) + 45}</Text>
                      </View>
                    }
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={[CartTabStyles.positionabsolutesetbutton, CartTabStyles.bgcolorset]}>
        <View style={CartTabStyles.accountbutton}>
          {Applycoupon === 0 ?
            <View style={CartTabStyles.textcenyet}>
              <View>
                <Text style={CartTabStyles.digitaltextsettwo}>{pricesymboldata} {Number(totalAmount.toFixed(2)) + 45}</Text>
                <Text style={CartTabStyles.viewdetailesbilltext}>{t("View_Detailed_Bill_Label")}</Text>
              </View>
            </View>
            :
            <View style={CartTabStyles.textcenyet}>
              <View>
                <Text style={CartTabStyles.digitaltextsettwo}>{pricesymboldata} {Number(totalAmount.toFixed(2)) + 45}</Text>
                <Text style={CartTabStyles.viewdetailesbilltext}>{t("View_Detailed_Bill_Label")}</Text>
              </View>
            </View>
          }
          <View style={CartTabStyles.setbuttonwidthview}>
            <Button title={t("Proceed_Pay_Label")}
              onPress={() => navigation.navigate(RouteName.PAYMENT_SCREEN)}
            />
          </View>
        </View>
      </View>

      <ConfirmationAlert
        message={alertMessageUpdate}
        modalVisible={alertVisibleUpdate}
        setModalVisible={setAlertVisibleUpdate}
        onPressCancel={() => setAlertVisible(!alertVisibleUpdate)}
        onPress={() => { setAlertVisibleUpdate(!alertVisibleUpdate), profileUpdate() }}
        buttonText={t("Ok")}
        animationIcon={true}
        source={images.loginsuccessful}
        Lottiewidthstyle={CartTabStyles.successtyle}
        buttonminview={CartTabStyles.centerBtn}
      />
    </View>
  );
};
export default CheckOutScreen;
