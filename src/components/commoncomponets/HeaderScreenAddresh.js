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
    <View>
      <View style={HometabStyles.minheaderflexview}>
        <TouchableOpacity style={HometabStyles.flexhomeimgandtext} onPress={() => onPress()}>
          <View>
            <VectoreIcons icon="Feather" style={HometabStyles.homeimagstyle} name="home" size={SF(25)} color={Colors.theme_background} />
          </View>
          <View>
            <Text style={HometabStyles.hometext}>{t("Home_Label")}</Text>
            <Text style={HometabStyles.address_text_color}>{t("Default_Address_Label")}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SearchHeaderScreen;
