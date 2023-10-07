import React, { useMemo } from "react";
import { Text, View, TouchableOpacity, } from "react-native";
import { SettingScreenStyle } from '../../styles';
import { Colors } from "../../utils";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const SettingFlatList = (props) => {
    const { item, onPress } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const SettingScreenStyles = useMemo(() => SettingScreenStyle(Colors), [Colors]);

    return (
        <TouchableOpacity onPress={() => onPress()}>
            <View style={SettingScreenStyles.textminview}>
                <Text style={SettingScreenStyles.addatextstyle}>{t(item.textbold)}</Text>
                <Text style={SettingScreenStyles.paregraphtext}>{t(item.text)}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SettingFlatList