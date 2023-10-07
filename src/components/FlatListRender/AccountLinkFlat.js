import React, { useMemo } from 'react';
import { Text, View, TouchableOpacity, } from "react-native";
import { AccountTabStyle } from '../../styles';
import { Colors, SF, } from '../../utils';
import { VectoreIcons } from '../../components';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const AccountLinkFlat = (props) => {
    const { item, onPress } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const AccountTabStyles = useMemo(() => AccountTabStyle(Colors), [Colors]);
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <View style={AccountTabStyles.setbgcolordata}>
                <Text style={AccountTabStyles.usertextstyle}>{t(item.title)}</Text>
                <VectoreIcons icon="Entypo" name="chevron-right" size={SF(20)} />
            </View>
        </TouchableOpacity>
    )
}

export default AccountLinkFlat