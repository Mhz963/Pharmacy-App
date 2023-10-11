import React, { useMemo } from 'react';
import { Text, View, Image, ScrollView, KeyboardAvoidingView, FlatList, TouchableOpacity, } from "react-native";
import { OffersTabStyle } from '../../styles';
import images from '../../index';
import { RouteName } from '../../routes';
import { SearchHeaderScreen } from '../../screens';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { OfferTabFlatFun, VectoreIcons } from '../../components';
import { SF, FastPharmacyOfferTab } from '../../utils';
import data from "../../../data.json"
import StylishButton from './StylishButton';
import {useDispatch, useSelector} from 'react-redux';
import {add_cart} from '../../redux/action/cartAction';

const Offer = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const dispatch = useDispatch();
    const {cartData} = useSelector(state => state.cartInfo)
    const OffersTabStyles = useMemo(() => OffersTabStyle(Colors), [Colors]);
    const Largediscount = () => {
        navigation.navigate(RouteName.PRODUCT_LIST_ITEM);
    }
    return (
        <View style={OffersTabStyles.minstyleviewphotograpgy}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={OffersTabStyle.contentContainerStyle}>
                <KeyboardAvoidingView enabled>
                    <View style={OffersTabStyles.minflexview}>
                        <View style={OffersTabStyles.minviewsigninscreen}>
                            {/* <SearchHeaderScreen onPress={() => navigation.navigate(RouteName.POPULAR_SCREEN)} /> */}
                            <View style={OffersTabStyles.setwidthfullset}>

                                {/* My code to display products from local datbase*/}



                                {data.map((product, index) => (
                                    <View key={index}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Image source={{ uri: product.image }} style={{ width: 250, height: 200 }} />
                                        </View>
                                        <Text style={{ fontWeight: 'bold' }}>Name: {product.name}</Text>
                                        <Text style={{ fontWeight: 'bold' }}>Price: {product.price}</Text>
                                        <Text style={{ fontWeight: 'bold' }}>Category: {product.category}</Text>
                                        <Text style={{ fontWeight: 'bold' }}>SKU: {product.SKU}</Text>


                                        <StylishButton
                                            title="Add to Cart"
                                            onPress={() => {
                                                dispatch(add_cart([...cartData, product]));
                                                navigation.navigate(RouteName.CART_TAB);
                                            }}
                                        />



                                        <Text>{"\n"}</Text>
                                    </View>
                                ))}

                                <Text style={OffersTabStyles.settextviewtitle}>{t("Happy_Deals_Label")}</Text>
                                <Text style={OffersTabStyles.textstylerelish}>{t("Big_Deal_Label")}</Text>
                                <View style={OffersTabStyles.setwhiteboxviewtwo}>
                                    <Text style={OffersTabStyles.twxtstylewhite}>{t("Rescued_Pharmacy_Label")}</Text>
                                    <View style={OffersTabStyles.setwhiteboxview}>
                                        <View style={OffersTabStyles.setwidthfifty}>
                                            <Text style={OffersTabStyles.savingtextstyle}>{t("Saving_Pharmacy_And_Hunger_Label")}</Text>
                                            <Text style={OffersTabStyles.paregraphtextstyule}>{t("Confirm_City_Label")}</Text>
                                        </View>
                                        <View>
                                            <Image style={OffersTabStyles.settrestyele} resizeMode='cover' source={images.offerImg} />
                                        </View>
                                    </View>
                                </View>
                                <View style={OffersTabStyles.flexrtowsetbox}>
                                    <View style={OffersTabStyles.largwhiteboxone}>
                                        <Text style={OffersTabStyles.largetextOffersTabStyleset}>{t("LARGE_DISCOUNT_Label")}</Text>
                                        <Text style={OffersTabStyles.settextupto}>{t("Upto_Label")}<Text style={OffersTabStyles.digittextstyleline}>{t("12Off_Label")}</Text></Text>
                                        <Text style={OffersTabStyles.noupperlimittext}>{t("No_Upper_Limit_Label")}</Text>
                                        <TouchableOpacity onPress={() => Largediscount()} style={OffersTabStyles.setbgcolorican}>
                                            <VectoreIcons icon="AntDesign" name="right" size={SF(13)} color={Colors.search_text_color} />
                                        </TouchableOpacity>
                                        <View style={OffersTabStyles.flexendimage} >
                                            <Image style={OffersTabStyles.setboxinimage} resizeMode='cover' source={images.offerDisTabImg1} />
                                        </View>
                                    </View>
                                    <View style={OffersTabStyles.largwhiteboxtwo}>
                                        <Text style={OffersTabStyles.largetextOffersTabStyleset}>{t("Try_New_Labels")}</Text>
                                        <Text style={OffersTabStyles.settextupto}>{t("Saving_Pharmacy_And_Hunger_Label")}</Text>
                                        <TouchableOpacity onPress={() => Largediscount()} style={OffersTabStyles.setbgcoloricantwo}>
                                            <VectoreIcons icon="AntDesign" name="right" size={SF(13)} color={Colors.search_text_color} />
                                        </TouchableOpacity>
                                        <View style={OffersTabStyles.flexendimage} >
                                            <Image style={OffersTabStyles.setboxinimage} resizeMode='cover' source={images.offerDisTabImg2} />
                                        </View>
                                    </View>
                                </View>
                                <View style={OffersTabStyles.setviewspacetext}>
                                    <Text style={OffersTabStyles.settextviewtitle}>{t("Exclusively_Pharmacy_Label")}</Text>
                                    <Text style={OffersTabStyles.textstylerelish}>{t("Dealicious_Offers_Label")}</Text>
                                </View>
                            </View>
                            <View>
                                <FlatList
                                    data={FastPharmacyOfferTab}
                                    renderItem={({ item, index }) => (<OfferTabFlatFun item={item} onPress={() => Largediscount()} />)}
                                    keyExtractor={item => item.id}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    style={OffersTabStyles.flatelistGrid}
                                />
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
};
export default Offer;
