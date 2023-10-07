import React, { useMemo } from "react";
import { Text, View, TouchableOpacity, } from "react-native";
import { SearchPopularStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const TabletListFlat = (props) => {
    const { item, onPress } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const SearchPopularStyles = useMemo(() => SearchPopularStyle(Colors), [Colors]);
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <View style={SearchPopularStyles.setbgborderview}>
                <Text style={SearchPopularStyles.textstyleset}>{t(item.text)}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TabletListFlat