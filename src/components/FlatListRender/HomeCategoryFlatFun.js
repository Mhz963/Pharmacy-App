import React, { useMemo } from 'react';
import { View, TouchableOpacity, Text, Image } from "react-native";
import { HometabStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const HomeCategoryFlatFun = (props) => {
    const { item, onPress } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HometabStyles = useMemo(() => HometabStyle(Colors), [Colors]);
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <View style={HometabStyles.flexcenterviewTWO}>
                <View style={HometabStyles.widtsetnew}>
                    <View>
                        <View style={HometabStyles.imagecenterstyle}>
                            <Image style={HometabStyles.imagsetstylefoodyitemdata} resizeMode="cover" source={item.image} />
                        </View>
                        <View>
                            <Text style={HometabStyles.textsetfood}>{t(item.text)}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default HomeCategoryFlatFun