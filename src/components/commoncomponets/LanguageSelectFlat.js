import React, { useMemo } from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import { Colors, SF } from '../../utils';
import { VectoreIcons } from '../../components';
import { LanguageStyles } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const LanguageSelectFlat = (props) => {
    const { Colors } = useTheme();
    const LanguageStyless = useMemo(() => LanguageStyles(Colors), [Colors]);
    const { t, i18n } = useTranslation();
    const changeLanguage = data => {
        // console.log('value', data)
        i18n
            .changeLanguage(data)
            .then(() => setLanguage(data))
            .catch(err => console.log(err));
        {
            setIsFocus(false);
        }
    };
    const { onPress, setSelectLanguage, item, index, IconChange, setIsFocus, SetIconChange } = props;
    return (
        <TouchableOpacity style={LanguageStyless.LanguageMinView} onPress={() => {
            setSelectLanguage(item.value); changeLanguage(item.value);
            SetIconChange(index); onPress();
        }}>
            <View>
                <Text style={LanguageStyless.TextStyle}>{t(item.label)}</Text>
            </View>
            <View>
                <VectoreIcons icon="Fontisto" name={IconChange == index ? 'radio-btn-active' : 'radio-btn-passive'} color={Colors.theme_background} size={SF(25)} />
            </View>
        </TouchableOpacity>
    )
}
export default LanguageSelectFlat;