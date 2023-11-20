import React, { useMemo } from 'react';
import { Text, View, TouchableOpacity, Image } from "react-native";
import { YourOrderScreenStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { SF } from '../../utils';
import { VectoreIcons } from '../../components';
import images from '../../index';
import moment from 'moment';

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
                            <Image style={YourOrderScreenStyles.yourorderdata} resizeMode='cover' source={images.myorderImg1} />
                        </View>
                        <View style={YourOrderScreenStyles.priceflextext}>
                            <View style={YourOrderScreenStyles.setwidth70}>
                                <Text style={YourOrderScreenStyles.vadapavtextstyeleset}>{t('MyOrder_Item_Name_Label_1')}</Text>
                                <Text style={YourOrderScreenStyles.addreshrtext}>{t('MyOrder_SubHead_Label_1')}</Text>
                            </View>
                            <View>
                                <Text style={YourOrderScreenStyles.vadapavtextstyeleset}>{item.total.toFixed(2)}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={YourOrderScreenStyles.borderbottomviewtwo}>
                <View style={YourOrderScreenStyles.setlistdataitems}>
                    <Text style={YourOrderScreenStyles.setitemstext}>{t('ITEMS_Label')}</Text>
                    {item.items.map(orderItem => (
                        <Text style={YourOrderScreenStyles.blacktitle}>{orderItem}</Text>
                    ))}
                </View>
                <View style={YourOrderScreenStyles.setlistdataitems}>
                    <Text style={YourOrderScreenStyles.setitemstext}>{t('ORDERED_ON_Label')}</Text>
                    <Text style={YourOrderScreenStyles.blacktitle}>{moment(item.orderDate).format('DD MMM YYYY')} at {moment(item.orderDate).format('h:mm A')}</Text>
                </View>
            </View>
            <View style={YourOrderScreenStyles.flexrowsettextrejected}>
                <TouchableOpacity style={YourOrderScreenStyles.flexreowdilevry}>
                    <VectoreIcons icon="Ionicons" name={"checkmark-done"} color={Colors.green_color} size={SF(25)} />
                    <Text style={YourOrderScreenStyles.rejectedtextstyle}>{t('Delivered_Label')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={YourOrderScreenStyles.setflexitemview} onPress={() => onPress()}>
                    <VectoreIcons icon="MaterialIcons" name="refresh" color={Colors.green_color} size={SF(20)} />
                    <Text style={YourOrderScreenStyles.rejectedtextstyle}>{t(item.repeatordertext)}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MyOrderFlatFun
