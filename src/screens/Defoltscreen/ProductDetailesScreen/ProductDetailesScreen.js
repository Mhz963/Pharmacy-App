import React, { useState, useEffect, useMemo } from "react";
import { Text, View, Image, ScrollView, StatusBar, Modal, FlatList, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { DetailsScreenStyle } from '../../../styles';
import { SF, SH, Colors, Fooditemname, additionData } from '../../../utils';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../../routes';
import { useSelector, useDispatch } from "react-redux";
import { price_symbol_action } from '../../../redux/action/CommonAction';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { VectoreIcons, SelectOptionFlatFun, IngedientsFlatList } from "../../../components";

const ProductDetailesScreen = ({ route }, props) => {
  const { img, title, hname } = route.params;
  const [count, setCount] = useState(1);
  const { doctoreDetaile } = useSelector(state => state.doctorDataReducer) || { doctoreDetaile };
  const { pricesymboldata } = useSelector(state => state.commonReducer) || {};

  const dispatch = useDispatch();
  let PriceSymbol = '£';

  useEffect(() => {
    dispatch(price_symbol_action(PriceSymbol));
  }, []);

  const navigation = useNavigation();
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const DetailsScreenStyles = useMemo(() => DetailsScreenStyle(Colors), [Colors]);

  const backarrow = () => {
    navigation.navigate(RouteName.HOME_TAB);
  }
  const [modalVisibletwo, setModalVisibletwo] = useState(false);
  const [sleact, setsleact] = useState('');
  const [hearticonset, sethearticonset] = useState(0);

  return (
    <View style={DetailsScreenStyles.minstyleviewphotograpgy}>
      <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={DetailsScreenStyles.contentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={[DetailsScreenStyles.minflexview, DetailsScreenStyles.bgcolorset]} >
            <View style={[DetailsScreenStyles.minviewsigninscreen, DetailsScreenStyles.bgcolorset]}>
              <TouchableOpacity style={DetailsScreenStyles.flrxfireiocnview} onPress={() => navigation.navigate(RouteName.RATING_SCREEN_SET)}>
                <TouchableOpacity style={DetailsScreenStyles.setdotflex}>
                  <Text style={DetailsScreenStyles.caltextstyle}>4.5</Text>
                  <Text><VectoreIcons icon="Entypo" name="star" color={Colors.white_text_color} size={SF(19)} /></Text>
                </TouchableOpacity>
              </TouchableOpacity>
              <View style={DetailsScreenStyles.setimagestylewidth}>
                <Image style={DetailsScreenStyles.imagsetstyle} source={img} />
              </View>
              <TouchableOpacity onPress={() => backarrow()} style={DetailsScreenStyles.settextstyle}>
                <View style={DetailsScreenStyles.setbgcolorviewtwoview}>
                  <Text style={DetailsScreenStyles.textstyle}>
                    <VectoreIcons icon="Feather" name="chevrons-left" size={SF(27)} color={Colors.white_text_color} />
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={[DetailsScreenStyles.bgwhiteboxminview, DetailsScreenStyles.bgcolorset]} >
                <View style={DetailsScreenStyles.bgwhiteboxsmall}>
                  <Text style={DetailsScreenStyles.settextweight}>{t(title)}</Text>
                </View>
                {hearticonset === 0 ?
                  <TouchableOpacity onPress={() => sethearticonset(1)} style={[DetailsScreenStyles.HeartIconLike, DetailsScreenStyles.setbgcolorborder]}>
                    <VectoreIcons icon="FontAwesome" name="heart" size={SF(25)} color={Colors.theme_background} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => sethearticonset(0)} style={[DetailsScreenStyles.HeartIconLike, DetailsScreenStyles.setbgcolorborder]}>
                    <VectoreIcons icon="FontAwesome" name="heart-o" size={SF(25)} color={Colors.black_text_color} />
                  </TouchableOpacity>
                }

                <View style={[DetailsScreenStyles.setallpading, DetailsScreenStyles.bgcolorset]}>
                  <View style={[DetailsScreenStyles.descripitionviewone, DetailsScreenStyles.bgcolorset]}>
                    <Text style={DetailsScreenStyles.descriptiontextset}>{t("Description_Label")}</Text>
                    <Text style={DetailsScreenStyles.paregraphtextset}>{t("Discription_Item_Label")}</Text>
                    <View style={DetailsScreenStyles.thretexztflexview}>
                      <View style={DetailsScreenStyles.flexclockandtext}>
                        <Text style={DetailsScreenStyles.paregraphtextsettwo}>{t(hname)}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={[DetailsScreenStyles.descripitionviewtwo, DetailsScreenStyles.bgcolorset]}>
                    <View style={DetailsScreenStyles.borderbottomview}>
                      <Text style={DetailsScreenStyles.nuteialtext}>{t("Nutritional_Value_Label")}</Text>
                      <View style={DetailsScreenStyles.flextextset}>
                        <Text style={DetailsScreenStyles.proteintextset}>{t("Protein_Label")}</Text>
                        <Text style={DetailsScreenStyles.setdigitaltextview}>2.5{t("gLabel")}</Text>
                      </View>
                      <View style={DetailsScreenStyles.flextextset}>
                        <Text style={DetailsScreenStyles.proteintextset}>{t("Carbohydrates_Label")}</Text>
                        <Text style={DetailsScreenStyles.setdigitaltextview}>14.7{t("gLabel")}</Text>
                      </View>
                      <View style={DetailsScreenStyles.flextextset}>
                        <Text style={DetailsScreenStyles.proteintextset}>{t("Sodium_Label")}</Text>
                        <Text style={DetailsScreenStyles.setdigitaltextview}>19%*</Text>
                      </View>
                      <View style={DetailsScreenStyles.flextextset}>
                        <Text style={DetailsScreenStyles.proteintextset}>{t("Potassium_Label")}</Text>
                        <Text style={DetailsScreenStyles.setdigitaltextview}>5%*</Text>
                      </View>
                      <Text style={DetailsScreenStyles.proteintextset}>{t("Rich_in_Vitamin_Label")}</Text>
                    </View>
                    <View style={DetailsScreenStyles.thretexztflexviewtwo}>
                      <View style={DetailsScreenStyles.flexclockandtextwo}>
                        < VectoreIcons icon="MaterialIcons" name="local-fire-department" color={Colors.bittersweet_color} size={SF(14)} />
                        <Text style={DetailsScreenStyles.textcolorgray}>{t("Food_Item_Cal_Label")}</Text>
                      </View>
                      <View>
                        <Text style={DetailsScreenStyles.textcolorgraytwo}>{t("Daily_value_Label")}</Text>
                      </View>
                    </View>
                  </View>
                  <View>
                  </View>
                </View>
                <View style={[DetailsScreenStyles.setwidthbox, DetailsScreenStyles.bgcolorset]}>
                  <View style={DetailsScreenStyles.setboxshadowimage}>
                    <Text style={DetailsScreenStyles.smalltextsetingredients}>{t("Ingredients_Label")}</Text>
                    <FlatList
                      data={Fooditemname}
                      renderItem={({ item, index }) => (<IngedientsFlatList item={item} />)}
                      keyExtractor={item => item.id}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      style={DetailsScreenStyles.setflex}
                    />
                  </View>
                </View>
                <View style={[DetailsScreenStyles.setminviewwidth, DetailsScreenStyles.bgcolorset]}>
                  <Text style={DetailsScreenStyles.additionstextstyletwo}>{t("Additions_Label")}</Text>
                  <TouchableOpacity style={DetailsScreenStyles.setdropdownstyle} onPress={() => setModalVisibletwo(true)}>
                    {sleact === '' ?
                      <Text style={DetailsScreenStyles.additionstextstyle}>{t("AntiD_Injection_Label")}</Text>
                      :
                      <Text style={DetailsScreenStyles.additionstextstyle}>{t(sleact)}</Text>
                    }
                    <VectoreIcons icon="FontAwesome" name="angle-down" color={Colors.theme_background} size={SF(30)} />
                  </TouchableOpacity>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisibletwo}
                  >
                    <View style={DetailsScreenStyles.centeredView}>
                      <TouchableOpacity style={DetailsScreenStyles.icomvloseselectwrap} onPress={() => setModalVisibletwo(!modalVisibletwo)}>
                        <VectoreIcons icon="MaterialIcons"
                          size={SF(30)}
                          name="close"
                          style={DetailsScreenStyles.icomvloseselect}
                        />
                      </TouchableOpacity>
                      <View style={DetailsScreenStyles.modalView}>
                        <TouchableOpacity style={DetailsScreenStyles.setselectmedicineview}>
                          <Text style={DetailsScreenStyles.settextstylecolor}>{t("Select_Medicines_Label")}</Text>
                        </TouchableOpacity>
                        <FlatList
                          data={additionData}
                          renderItem={({ item, index }) => (<SelectOptionFlatFun item={item} onPress={() => { setsleact(item.textsimple); setModalVisibletwo(!modalVisibletwo); }} />)}
                          keyExtractor={item => item.id}
                          style={DetailsScreenStyles.setflex}
                        />
                      </View>
                    </View>
                  </Modal>
                </View>
              </View>
              <View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={DetailsScreenStyles.setbgcolorviewtwo}>
        <TouchableOpacity style={DetailsScreenStyles.setwidthprice}>
          <Text style={DetailsScreenStyles.pricetextsetviewtwo}>{pricesymboldata} {125 * count}</Text>
        </TouchableOpacity>
        <View style={DetailsScreenStyles.plusandminusflexview}>
          <TouchableOpacity onPress={() => { if (count > 1) { setCount(count - 1) } }}>
            <VectoreIcons icon="Entypo" name="minus" size={SF(20)} color={Colors.white_text_color} />
          </TouchableOpacity>
          <Text style={DetailsScreenStyles.pricetextsetview}>{count}</Text>
          <TouchableOpacity onPress={() => setCount(count + 1)}>
            <VectoreIcons icon="Entypo" name="plus" size={SF(20)} color={Colors.white_text_color} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={DetailsScreenStyles.setbgcolorwhite} onPress={() => navigation.navigate(RouteName.CART_TAB)}>
            <VectoreIcons icon="Ionicons" name="cart" color={Colors.black_text_color} size={SF(24)} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailesScreen;
