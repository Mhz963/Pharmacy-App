import React, { useMemo } from 'react';
import { View, TouchableOpacity, Text, Image } from "react-native";
import { HometabStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { RatingFun, Spacing, VectoreIcons } from '../../components';
import { SF } from '../../utils';

const TrendingHomeFlatFun = (props) => {
    const { item, onPress, liked, index, pricesymboldata, LikeUnlikeFun, doctordatatendingmenu } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HometabStyles = useMemo(() => HometabStyle(Colors), [Colors]);

    return (
        <View style={HometabStyles.minbgviewset}>
            <TouchableOpacity style={HometabStyles.imagecengter} onPress={() => onPress()}>
                <Image style={[HometabStyles.whiteboximagetwoset, HometabStyles.whiteboximagetwosettwo]} resizeMode="contain" source={item.image} />
            </TouchableOpacity>
            <Spacing />
            <TouchableOpacity onPress={() => onPress()}>
                <Text style={HometabStyles.settextcolorcenter}>{t(item.text)}</Text>
            </TouchableOpacity>
            <Text style={HometabStyles.settextcolorcentertwo}>{t(item.hospitalname)}</Text>
            <View style={HometabStyles.flexrowseticon}>
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
            <View style={HometabStyles.flexrowseticon}>
                <View>
                    <Text style={HometabStyles.settextpricebold}>{pricesymboldata} {item.price}</Text>
                </View>
                <TouchableOpacity onPress={() => doctordatatendingmenu(item)} style={HometabStyles.seticonbgcolorview}>
                    <VectoreIcons icon="FontAwesome" name="plus-square" size={SF(25)} color={Colors.theme_background} />
                </TouchableOpacity>
            </View>
            <View style={HometabStyles.settextinbgcolor}>
                <Text style={HometabStyles.setdescounrtextstyle}>{t(item.discount)}</Text>
            </View>
            <TouchableOpacity
                onPress={() => LikeUnlikeFun(index)} style={HometabStyles.HeartIconLike}>
                <VectoreIcons icon="AntDesign"
                    name="heart"
                    size={SF(25)}
                    style={{ color: liked.includes(index) ? Colors.text_red : Colors.LighGrey }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default TrendingHomeFlatFun