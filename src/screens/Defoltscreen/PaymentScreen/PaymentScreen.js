import React, { useState, useMemo } from "react";
import { Text, View, Image, ScrollView, StatusBar, FlatList, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { PaymentStyle } from '../../../styles';
import images from '../../../index';
import { RouteName } from '../../../routes';
import { Colors, SF, Paymentdata } from "../../../utils";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { VectoreIcons, PaymentAccordian } from "../../../components";

const PaymentScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const PaymentStyles = useMemo(() => PaymentStyle(Colors), [Colors]);

  const [show, setShow] = useState(null);

  const toggleHandler = (id) => {
    (id === show) ? setShow(null) : setShow(id)
  };


  return (
    <View style={PaymentStyles.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgwhite} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={PaymentStyles.contentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={PaymentStyles.minflexview}>
            <View style={PaymentStyles.minviewsigninscreen}>
              <View>
                <Text style={PaymentStyles.cardtextstyle}>{t("Cards_Label")}</Text>
                <TouchableOpacity style={PaymentStyles.setflexrowarrowleft} onPress={() => navigation.navigate(RouteName.CREDIT_CARD_SCREEN_SET)}>
                  <View style={PaymentStyles.flexrowcreditcard}>
                    <View style={PaymentStyles.iconsetborderwidth}>
                      <VectoreIcons icon="AntDesign" name="creditcard" size={SF(25)} color={Colors.gray_text_color} />
                    </View>
                    <Text style={PaymentStyles.creditcardtext}>{t("Creadit_Debit_ATM_Cards_Label")}</Text>
                  </View>
                  <View>
                    <VectoreIcons icon="AntDesign" name="right" size={SF(21)} color={Colors.gray_text_color} />
                  </View>
                </TouchableOpacity>
                <View style={PaymentStyles.setflexrowarrowlefttwo}>
                </View>
                <Text style={PaymentStyles.cardtextstyletwo}>{t("UPI_Label")}</Text>
                <TouchableOpacity style={PaymentStyles.flexrowcreditcardtwo} onPress={() => navigation.navigate(RouteName.PAYMENT_SUCCESSFULLY)}>
                  <View style={PaymentStyles.iconsetborderwidth}>
                    <Image source={images.Paytem_image} resizeMode='center' style={PaymentStyles.setbgimage} />
                  </View>
                  <Text style={PaymentStyles.creditcardtext}>{t("Paytm_UPI_Label")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={PaymentStyles.flexrowcreditcardtwo} onPress={() => navigation.navigate(RouteName.PAYMENT_SUCCESSFULLY)}>
                  <View style={PaymentStyles.iconsetborderwidth}>
                    <Image source={images.google_pay_image} resizeMode='center' style={PaymentStyles.setbgimage} />
                  </View>
                  <Text style={PaymentStyles.creditcardtext}>{t("Google_Pay_Label")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={PaymentStyles.flexrowcreditcardtwo} onPress={() => navigation.navigate(RouteName.PAYMENT_SUCCESSFULLY)}>
                  <View style={PaymentStyles.iconsetborderwidth}>
                    <Image source={images.Phone_Pay_Image} resizeMode='center' style={PaymentStyles.setbgimage} />
                  </View>
                  <Text style={PaymentStyles.creditcardtext}>{t("Phone_Pay_Label")}</Text>
                </TouchableOpacity>
                <Text style={PaymentStyles.cardtextstylethree}>{t("Wallets_Label")}</Text>
                <FlatList
                  data={Paymentdata}
                  renderItem={({ item, index }) => (<PaymentAccordian item={item} show={show} onPress={() => toggleHandler(item.id)} />)}
                  keyExtractor={item => item.id}
                  style={PaymentStyles.flatelist}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default PaymentScreen;
