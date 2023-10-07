import React, { useMemo } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { SearchPopularMedicineStyle } from '../../styles';
import { Colors, SF } from "../../../utils";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const SearchPopularFlattFun = (props) => {
    const { item, onPress } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const SearchPopularMedicineStyles = useMemo(() => SearchPopularMedicineStyle(Colors), [Colors]);
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <View style={[SearchPopularMedicineStyles.setflexviewdata, SearchPopularMedicineStyles.searchtextlist]}>
                <View>
                    <Image style={SearchPopularMedicineStyles.imagsetstylefredrice} resizeMode="cover" source={item.image} />
                </View>
                <View style={SearchPopularMedicineStyles.textflexview}>
                    <View style={SearchPopularMedicineStyles.setflextext}>
                        <Text style={SearchPopularMedicineStyles.textboldstyle}>{t(item.hospitalname)}</Text>
                        <Text style={SearchPopularMedicineStyles.textboldstyletwo}>{t(item.text)}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SearchPopularFlattFun