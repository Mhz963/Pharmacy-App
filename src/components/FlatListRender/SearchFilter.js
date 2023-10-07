import React, { useMemo } from "react";
import { View, Text, } from 'react-native';
import { SearchPopularMedicineStyle } from '../../styles';
import { VectoreIcons } from "../../components";
import { Colors, SF } from "../../utils";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const SearchFilter = (props) => {
  const { item } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const SearchPopularMedicineStyles = useMemo(() => SearchPopularMedicineStyle(Colors), [Colors]);

  return (
    <View>
      <View style={SearchPopularMedicineStyles.flexrowsetsearchicon}>
        <VectoreIcons icon="AntDesign" name="search1" size={SF(20)} color={Colors.border_color} />
        <Text style={SearchPopularMedicineStyles.settextdatapizz}>{t(item.text)}</Text>
      </View>
    </View>
  )
}
export default SearchFilter;