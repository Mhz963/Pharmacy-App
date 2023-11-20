import React, { useMemo } from 'react';
import { View, TouchableOpacity, Text, Image } from "react-native";
import { HometabStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { RatingFun, Spacing, VectoreIcons } from '../../components';
import { SF } from '../../utils';

const PopularHomeFlatFun = (props) => {
    const { item, onPress, CartTabHandle, pricesymboldata } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HometabStyles = useMemo(() => HometabStyle(Colors), [Colors]);

    return (
        <View style={HometabStyles.populaitemnearby}>
            <View style={HometabStyles.flexrowtextandimage}>
                <TouchableOpacity style={HometabStyles.setimagewidthsevnty} onPress={() => onPress()}>
                    <Image style={HometabStyles.whiteboximagetwoset} resizeMode="cover" source={{uri: item.image}} />
                </TouchableOpacity>
                <View style={HometabStyles.setwidthalltext}>
                    <TouchableOpacity onPress={() => onPress()}>
                        <Text style={HometabStyles.settextpricebold} >{t(item.name)}</Text>
                    </TouchableOpacity>
                    <Text style={[HometabStyles.settextcolorcentertwo]}>{t(item.category)}</Text>
                    <View style={HometabStyles.flexstarticon}>
                        <RatingFun
                            type='custom'
                            ratingColor={Colors.amber_color}
                            ratingBackgroundColor={Colors.border_color}
                            ratingCount={5}
                            tintColor={Colors.white_text_color}
                            imageSize={15}
                            startingValue={5}
                            isDisabled={false}
                        />
                        <Text style={HometabStyles.ratingtextnumber}>(4.3)</Text>
                    </View>
                    <View style={HometabStyles.flexrowsetrating}>
                        <View style={HometabStyles.dicscounttextflex}>
                            <Text style={HometabStyles.settextpricebold}>{item.price.split(" – ")[0]}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={HometabStyles.setplusicon} onPress={() => CartTabHandle()}>
                    <VectoreIcons icon="FontAwesome" name="plus-square" size={SF(30)} color={Colors.theme_background} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PopularHomeFlatFun
