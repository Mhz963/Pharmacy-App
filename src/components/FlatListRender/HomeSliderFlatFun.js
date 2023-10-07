import React, { useMemo } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { HometabStyle } from '../../styles';
import { Colors } from '../../utils';
import { LinearGradientFlat } from '../../components';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const HomeSliderFlatFun = (props) => {
    const { index, onPress, item } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HometabStyles = useMemo(() => HometabStyle(Colors), [Colors]);

    return (
        <>
            <TouchableOpacity style={HometabStyles.minviewfunction} onPress={() => onPress()}>
                {index === 0 || index === 2 ?
                    <LinearGradientFlat
                        start={{ x: 0.0, y: 3.25 }} end={{ x: 0.5, y: 0.0 }}
                        colors={[Colors.vivid_tangerine_color, Colors.begonia_color]} LinearGradientStyle={HometabStyles.linearGradient}>
                        <View style={HometabStyles.flexrowimagandtext}>
                            <Text style={HometabStyles.textContainer}>{t(item.title)}</Text>
                            <Text style={HometabStyles.textContainertwo}>{t(item.paregraphtitle)}</Text>
                            <Text style={HometabStyles.textbottomparegraph}>{t(item.bottomtext)}</Text>
                            <Text style={HometabStyles.textbottomparegraphTWO}>{t(item.imagbottomtext)} </Text>
                            <View style={HometabStyles.imagecenyer}>
                                <Image style={HometabStyles.imagsetstyle} resizeMode="cover" source={item.imge} />
                            </View>
                        </View>
                    </LinearGradientFlat>
                    :
                    <LinearGradientFlat
                        start={{ x: 0.0, y: 3.25 }} end={{ x: 0.5, y: 0.0 }}
                        colors={[Colors.aquamarine_color, Colors.ocean_Green_color]} LinearGradientStyle={HometabStyles.linearGradient}>
                        <View style={HometabStyles.flexrowimagandtext}>
                            <Text style={HometabStyles.textContainer}>{t(item.title)}</Text>
                            <Text style={HometabStyles.textContainertwo}>{t(item.paregraphtitle)}</Text>
                            <Text style={HometabStyles.textbottomparegraph}>{t(item.bottomtext)}</Text>
                            <Text style={HometabStyles.textbottomparegraphTWO}>{t(item.imagbottomtext)} </Text>
                            <View style={HometabStyles.imagecenyer}>
                                <Image style={HometabStyles.imagsetstyle} resizeMode="cover" source={item.imge} />
                            </View>
                        </View>
                    </LinearGradientFlat>
                }
            </TouchableOpacity>
        </>
    )
}

export default HomeSliderFlatFun