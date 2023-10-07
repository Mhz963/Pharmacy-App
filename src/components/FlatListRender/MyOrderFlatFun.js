import React, { useMemo } from 'react';
import { Text, View, TouchableOpacity, Image } from "react-native";
import { YourOrderScreenStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { SF } from '../../utils';
import { VectoreIcons } from '../../components';

const MyOrderFlatFun = (props) => {
    const { item, index, onPress } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const YourOrderScreenStyles = useMemo(() => YourOrderScreenStyle(Colors), [Colors]);

    return (
        <View style={YourOrderScreenStyles.yoreorderstylebox}>
            <View style={YourOrderScreenStyles.borderbottomview}>
                <View style={YourOrderScreenStyles.flexminviewset}>
                    <View style={YourOrderScreenStyles.flexrowsettext}>
                        <View>
                            <Image style={YourOrderScreenStyles.yourorderdata} resizeMode='cover' source={item.image} />
                        </View>
                        <View style={YourOrderScreenStyles.priceflextext}>
                            <View style={YourOrderScreenStyles.setwidth70}>
                                <Text style={YourOrderScreenStyles.vadapavtextstyeleset}>{t(item.itemName)}</Text>
                                <Text style={YourOrderScreenStyles.addreshrtext}>{t(item.sitytext)}</Text>
                            </View>
                            <View>
                                <Text style={YourOrderScreenStyles.vadapavtextstyeleset}>{t(item.price)}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={YourOrderScreenStyles.borderbottomviewtwo}>
                <View style={YourOrderScreenStyles.setlistdataitems}>
                    <Text style={YourOrderScreenStyles.setitemstext}>{t(item.items)}</Text>
                    <Text style={YourOrderScreenStyles.blacktitle}>{t(item.onevx)}</Text>
                </View>
                <View style={YourOrderScreenStyles.setlistdataitems}>
                    <Text style={YourOrderScreenStyles.setitemstext}>{t(item.orderontext)}</Text>
                    <Text style={YourOrderScreenStyles.blacktitle}>{t(item.timetextset)}</Text>
                </View>
            </View>
            <View style={YourOrderScreenStyles.flexrowsettextrejected}>
                {index === 0 || index === 2 || index === 3 || index === 5 ?
                    <TouchableOpacity style={YourOrderScreenStyles.flexreowdilevry}>
                        <VectoreIcons icon="Ionicons" name={"checkmark-done"} color={Colors.green_color} size={SF(25)} />
                        <Text style={YourOrderScreenStyles.rejectedtextstyle}>{t(item.rejectedtext)}</Text>
                    </TouchableOpacity>
                    : null}
                {index === 1 || index === 4 || index === 6 || index === 7 ?
                    <TouchableOpacity style={YourOrderScreenStyles.flexreowdilevry}>
                        <VectoreIcons icon="MaterialCommunityIcons" name={"close-octagon"} color={Colors.text_red} size={SF(25)} />
                        <Text style={YourOrderScreenStyles.rejectedtextRedstyle}>{t(item.rejectedtext)}</Text>
                    </TouchableOpacity>
                    : null}
                <TouchableOpacity style={YourOrderScreenStyles.setflexitemview} onPress={() => onPress()}>
                    <VectoreIcons icon="MaterialIcons" name="refresh" color={Colors.green_color} size={SF(20)} />
                    <Text style={YourOrderScreenStyles.rejectedtextstyle}>{t(item.repeatordertext)}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MyOrderFlatFun