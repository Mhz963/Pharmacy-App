import React, { useMemo } from 'react';
import { Text, View, Image, TouchableOpacity, } from "react-native";
import { CartTabStyle } from '../../styles';
import images from '../../index';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const CheckOutFlatFun = (props) => {
    const { Applycoupon, item, onPress, pricesymboldata, count } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const CartTabStyles = useMemo(() => CartTabStyle(Colors), [Colors]);
    return (
        <View style={CartTabStyles.flexminviewcount}>
            <View style={CartTabStyles.flexiconandimagetext}>
                <View>
                    <Image style={CartTabStyles.setimagehightwidth} resizeMode="contain" source={{uri: item.image}} />
                </View>
                <View>
                    <Text style={CartTabStyles.pistahouse}>{t(item.name)}</Text>
                </View>
            </View>
            <View style={CartTabStyles.flexiconandimagetext}>
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

export default CheckOutFlatFun
