import React, { useMemo } from 'react';
import { View, TouchableOpacity, Text, Image } from "react-native";
import { HometabStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { RatingFun, Spacing } from '../../components';

const DealsOfTheDay = (props) => {
    const { item, onPress, DoctorHandle, pricesymboldata } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HometabStyles = useMemo(() => HometabStyle(Colors), [Colors]);

    return (
        <View style={HometabStyles.setbgcolorviewtime}>
            <TouchableOpacity style={HometabStyles.flexrowsecenterimage} onPress={() => onPress()}>
                <Image style={HometabStyles.whiteboximage} resizeMode="contain" source={item.image} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress()}>
                <Text style={HometabStyles.setnormatextstyle}>{t(item.text)}</Text>
            </TouchableOpacity>
            <Text style={[HometabStyles.settextcolorcenterthree, HometabStyles.settextcolorcenterthreetow]}>{t(item.hospitalname)}</Text>
            <View style={HometabStyles.flexrowjuctycenter}>
                <RatingFun
                    type='custom'
                    ratingColor={Colors.amber_color}
                    ratingBackgroundColor={Colors.border_color}
                    ratingCount={5}
                    tintColor={Colors.white_text_color}
                    imageSize={15}
                    startingValue={5}
                    isDisabled={false}
                />
            </View>
            <Spacing />
            <View style={HometabStyles.flexrowsettext}>
                <Text style={HometabStyles.settextprice}> {pricesymboldata + ' ' + item.dolardpricetext}</Text>
                <Text style={HometabStyles.settextpricetwo}>{pricesymboldata + ' ' + item.dolardpricetexttwo}</Text>
            </View>
            <View style={HometabStyles.flexrocenterjusty}>
                <View style={HometabStyles.addbutttonwidth}>
                    <TouchableOpacity style={HometabStyles.addBtnStyle} onPress={() => DoctorHandle(item)}>
                        <Text style={HometabStyles.textBtnStyle}>{t("ADD_Label")}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={HometabStyles.settextinbgcolor}>
                <Text style={HometabStyles.setdescounrtextstyle}>{t(item.offdecount)}</Text>
            </View>
            <Text style={HometabStyles.outoftextset}>{t(item.outofstock)}</Text>
        </View>
    )
}

export default DealsOfTheDay