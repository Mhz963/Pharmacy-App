import React, { useMemo } from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { AllBookMarkStyle } from '../../styles';

const StateModalSelectFun = (props) => {
    const { item, index, setsleact, setModalVisible, modalVisible, } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const AllBookMarkStyles = useMemo(() => AllBookMarkStyle(Colors), [Colors]);
    return (
        <TouchableOpacity onPress={() => { setsleact(item.textsimple); setModalVisible(!modalVisible); }}>
            <View style={AllBookMarkStyles.descountbox}>
                <Text style={AllBookMarkStyles.simplestatetext}>{t(item.textsimple)}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default StateModalSelectFun