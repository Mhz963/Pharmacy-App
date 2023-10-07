import React, { useMemo } from "react";
import { Image, View, } from "react-native";
import { DetailsScreenStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';


const IngedientsFlatList = (props) => {
    const { item } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const DetailsScreenStyles = useMemo(() => DetailsScreenStyle(Colors), [Colors]);
    return (
        <View>
            <Image style={DetailsScreenStyles.boximage} resizeMode="cover" source={item.image} />
        </View>
    )
}

export default IngedientsFlatList