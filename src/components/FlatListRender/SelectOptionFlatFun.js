import React, { useMemo } from "react";
import { Text, View, TouchableOpacity, } from "react-native";
import { DetailsScreenStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const SelectOptionFlatFun = (props) => {
    const { item, onPress } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const DetailsScreenStyles = useMemo(() => DetailsScreenStyle(Colors), [Colors]);

    return (
        <TouchableOpacity onPress={() => onPress()}>
            <View style={DetailsScreenStyles.descountbox}>
                <Text style={DetailsScreenStyles.simplestatetext}>{t(item.textsimple)}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SelectOptionFlatFun