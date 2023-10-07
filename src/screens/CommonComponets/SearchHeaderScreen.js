import React, { useMemo } from 'react';
import { Text, View, TouchableOpacity, } from "react-native";
import { HometabStyle } from '../../styles';
import { RouteName } from '../../routes';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { SF, Colors } from '../../utils';
import { VectoreIcons } from '../../components';

const SearchHeaderScreen = (props) => {
  const { onPress } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const HometabStyles = useMemo(() => HometabStyle(Colors), [Colors]);

  return (
    <View style={HometabStyles.bgcolorset}>
      <TouchableOpacity style={[HometabStyles.flexinputstyle, HometabStyles.bgcolorset]} onPress={() => navigation.navigate(RouteName.POPULAR_SCREEN)}>
        <TouchableOpacity style={HometabStyles.flextextinput} onPress={() => onPress()}>
          <TouchableOpacity>
            <VectoreIcons icon="AntDesign" name="search1" size={SF(20)} color={Colors.search_text_color} />
          </TouchableOpacity>
          <View>
            <Text style={HometabStyles.searcjtextcolorstyle}>{t("Search_Medicines_Nearby_Label")}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={HometabStyles.seticonborder}>
          <VectoreIcons icon="FontAwesome" name="filter" size={SF(20)} color={Colors.Color} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};
export default SearchHeaderScreen;
