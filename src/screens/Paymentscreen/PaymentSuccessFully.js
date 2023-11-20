import React, { useMemo, useEffect, useState } from "react";
import { Text, View, Image, ScrollView, StatusBar, TouchableOpacity, } from "react-native";
import { PaymentSuccessfully } from '../../styles';
import images from '../../index';
import { Colors } from "../../utils";
import {Container, AppHeader, Spacing, Button} from '../../components';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { RouteName } from "../../routes";
import moment from 'moment';
import {useSelector} from 'react-redux';

const PaymentSuccessFully = (props) => {
  const {cartData: cartDataInfo} = useSelector(state => state.cartInfo)
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const PaymentSuccessfullys = useMemo(() => PaymentSuccessfully(Colors), [Colors]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let total = Number(0)
    setTotalAmount(0)
    cartDataInfo.forEach(data => {
      total = Number(total) + Number(data.price.split(' – ')[0].replace('£', ''))
    })
    setTotalAmount(total)
  }, [cartDataInfo]);

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgwhite} />
      <Spacing />
      <AppHeader Iconname={true} headerTitle={t("Payment_SuccessFul_Labe")} onPress={() => navigation.navigate(RouteName.PAYMENT_SCREEN)} />
      <View style={PaymentSuccessfullys.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={PaymentSuccessfullys.contentContainerStyle}>
          <View style={PaymentSuccessfullys.keybordtopviewstyle}>
            <View style={PaymentSuccessfullys.minflexview}>
              <View style={PaymentSuccessfullys.minviewsigninscreen}>
                <TouchableOpacity style={PaymentSuccessfullys.imagecebter}>
                  <Image source={images.Payment_succeful_one_image} resizeMode='cover' style={PaymentSuccessfullys.paymentsuccesfullimg} />
                </TouchableOpacity>
                <View style={PaymentSuccessfullys.textcenterview}>
                  <Text style={PaymentSuccessfullys.textcenterpayment}>{t("PAYMENT_SUCCESSFUL_Label")}</Text>
                </View>
                <Text style={PaymentSuccessfullys.textcenterpaymenttwo}>{t("Your_Payment_processed_Label")}</Text>
                <TouchableOpacity>
                  <Text style={PaymentSuccessfullys.burgeritemname}>{t("Black_Coffee_Label")}</Text>
                </TouchableOpacity>
                <View style={PaymentSuccessfullys.flexrowcoffitext}>
                  <TouchableOpacity>
                    <Text style={PaymentSuccessfullys.totalamountpaid}>{t("TOTAL_AMOUNT_PAID_Label")}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={PaymentSuccessfullys.proicetextset}>£{totalAmount.toFixed(2)}</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={PaymentSuccessfullys.flexrowcoffitext}>
                  <Text style={PaymentSuccessfullys.totalamountpaid}>{t("PAYED_BY_Label")}</Text>
                  <Text style={PaymentSuccessfullys.proicetextset}>{t("PAYTM_Label")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={PaymentSuccessfullys.flexrowcoffitexttwo}>
                  <Text style={PaymentSuccessfullys.totalamountpaid}>{t("TRANCATION_DATE_Label")}</Text>
                  <Text style={PaymentSuccessfullys.proicetextset}>{moment().format('DD MMM YYYY, HH:MM A')}</Text>
                </TouchableOpacity>
                <Button title={'My Order'} onPress={() => navigation.navigate(RouteName.YOUR_ORDER_SCREEN)} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};
export default PaymentSuccessFully;
