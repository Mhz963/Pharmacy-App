import React, { useMemo } from 'react';
import { Text, View, Image, TouchableOpacity, } from "react-native";
import { CartTabStyle } from '../../styles';
import images from '../../index';
import { Colors, SF } from '../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { VectoreIcons } from '../../components';

const CartFlatListFun = (props) => {

    const { Applycoupon, item, count, onPress, pricesymboldata, RemoveItemFun, AddItemFun } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const CartTabStyles = useMemo(() => CartTabStyle(Colors), [Colors]);

    return (
        <View style={[CartTabStyles.flexminviewcount, CartTabStyles.bgcolorset]}>
            <View style={CartTabStyles.flexiconandimagetext}>
                <View>
                    <Image style={CartTabStyles.setimagehightwidth} resizeMode="contain" source={{uri: item.image}} />
                </View>
                <View>
                    <Text style={CartTabStyles.pistahouse}>{t(item.name)}</Text>
                </View>
            </View>
            <View style={[CartTabStyles.flexiconandimagetext, CartTabStyles.bgcolorset]}>
                <View style={[CartTabStyles.setplusminusflex, CartTabStyles.bgcolorset]}>
                    <TouchableOpacity onPress={() => RemoveItemFun()}>
                        <VectoreIcons icon="Entypo" name="minus" size={SF(20)} color={Colors.text_red} />
                    </TouchableOpacity>
                    <Text style={CartTabStyles.minustextstyle}>{count}</Text>
                    <TouchableOpacity onPress={() => AddItemFun()}>
                        <VectoreIcons icon="Entypo" name="plus" size={SF(20)} color={Colors.filterIcon} />
                    </TouchableOpacity>
                </View>
                {Applycoupon === 0 ?
                    <TouchableOpacity>
                        <Text style={CartTabStyles.digitalsawtwext}>{item.price.split(" – ")[0]}</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity>
                        <Text style={CartTabStyles.digitalsawtwext}>{item.price.split(" – ")[0]}</Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default CartFlatListFun
