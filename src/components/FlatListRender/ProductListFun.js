import React, { useMemo } from "react";
import { Text, View, Image, TouchableOpacity, } from "react-native";
import { ProductItemListStyle } from '../../styles';
import { Colors, SH, SF } from '../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { Spacing, VectoreIcons, RatingFun } from "../../components";

const ProductListFun = (props) => {
    const { item, CartHandle, ProductDatilsHandle, index, pricesymboldata, liked, LikUnlikeFun } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const ProductItemListStyles = useMemo(() => ProductItemListStyle(Colors), [Colors]);

    return (
        <TouchableOpacity style={ProductItemListStyles.bgwhiteboxminviewWrap}>
            <View style={ProductItemListStyles.bgwhiteboxminview}>
                <TouchableOpacity style={ProductItemListStyles.setimageviewstyle} onPress={() => ProductDatilsHandle()}>
                    <Image style={ProductItemListStyles.pharamacyimagestyle} resizeMode="contain" source={{uri: item.image}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ProductDatilsHandle()}>
                    <Text style={ProductItemListStyles.textProductItemListStylesimple}>{t(item.name)}</Text>
                </TouchableOpacity>
                <Text style={ProductItemListStyles.settextcolorcenterlist}>{t(item.category)}</Text>
                <View style={ProductItemListStyles.setflexstadr}>
                    <RatingFun
                        type='custom'
                        ratingColor={Colors.amber_color}
                        ratingBackgroundColor='#c8c7c8'
                        ratingCount={5}
                        tintColor={Colors.white_text_color}
                        imageSize={16}
                        startingValue={4.5}
                        isDisabled={true}
                    />
                    <Text style={ProductItemListStyles.setratingtextstyle}>4.5</Text>
                </View>
                <View style={ProductItemListStyles.justicenterflexrow}>
                    <Text style={ProductItemListStyles.textProductItemListStylesimple}>{item.price.split(" – ")[0]}</Text>
                    <TouchableOpacity style={ProductItemListStyles.setplusbgcolorset} onPress={() => CartHandle()}>
                        <VectoreIcons icon="Entypo" name="plus" size={SF(20)} color={Colors.white_text_color} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => LikUnlikeFun(index)} style={ProductItemListStyles.HeartIconLike}>
                    <VectoreIcons icon="AntDesign"
                        name="heart"
                        size={SF(25)}
                        style={{ color: liked.includes(index) ? Colors.text_red : Colors.LighGrey }}
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ProductListFun
