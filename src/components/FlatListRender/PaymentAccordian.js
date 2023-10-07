import React, { useState, useMemo } from "react";
import { Text, View, Image, TouchableOpacity, } from "react-native";
import { PaymentStyle } from '../../styles';
import { Colors, SF } from "../../utils";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { VectoreIcons } from "../../components";

const PaymentAccordian = (props) => {
    const { item, show, id, onPress } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();

    const PaymentStyles = useMemo(() => PaymentStyle(Colors), [Colors]);

    return (
        <TouchableOpacity onPress={() => onPress()}>
            <View>
                <View style={PaymentStyles.setflexrowarrowleftthree}>
                    <View style={PaymentStyles.flexrowcreditcard}>
                        <View style={PaymentStyles.iconsetborderwidth}>
                            <Image source={item.image} resizeMode='center' style={PaymentStyles.setbgimage} />
                        </View>
                        <View style={PaymentStyles.settextwidth}>
                            <Text style={PaymentStyles.creditcardtext}>{t(item.smalltext)}</Text>
                            <Text style={PaymentStyles.youneedstext}>{t(item.paymentparegraph)}</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => toggleHandler(item.id)}>
                            {<VectoreIcons icon="AntDesign" name={show === item.id ? 'up' : 'down'} size={SF(21)} />}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {show === item.id && <View>
                <View style={PaymentStyles.setparegraphviewstyle}>
                    <Text style={PaymentStyles.paregraphtextstyleset}>{t("Paytm_Summury_Label")}</Text>
                </View>
            </View>}
        </TouchableOpacity>
    )
}

export default PaymentAccordian