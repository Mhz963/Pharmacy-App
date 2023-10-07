import React, { useMemo } from 'react';
import { Text, View, TouchableOpacity, Image } from "react-native";
import { OffersTabStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const OfferTabFlatFun = (props) => {
    const { item, onPress } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const OffersTabStyles = useMemo(() => OffersTabStyle(Colors), [Colors]);

    return (
        <TouchableOpacity onPress={() => onPress()}>
            <View>
                <View style={{ ...OffersTabStyles.setsinglebox, backgroundColor: item.backgroundColor }}>
                    <View>
                        <View style={OffersTabStyles.flextocenterimage}>
                            <Image style={OffersTabStyles.setboxtopimage} resizeMode='cover' source={item.image} />
                        </View>
                        <Text style={OffersTabStyles.usertextstyle}>{t(item.title)}</Text>
                        <Text style={OffersTabStyles.testalignwhite}>{t(item.settext)}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default OfferTabFlatFun