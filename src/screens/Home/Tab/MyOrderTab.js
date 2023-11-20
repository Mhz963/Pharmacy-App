import React, { useMemo } from 'react';
import { Text, View, ScrollView, FlatList, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { YourOrderScreenStyle } from '../../../styles';
import { RouteName } from '../../../routes';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { SF, yourorderdata } from '../../../utils';
import { VectoreIcons, MyOrderFlatFun } from '../../../components';
import {useSelector} from 'react-redux';


const MyOrderTab = (props) => {
  const {myOrders} = useSelector(state => state.cartInfo)
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const YourOrderScreenStyles = useMemo(() => YourOrderScreenStyle(Colors), [Colors]);

  return (
    <View style={[YourOrderScreenStyles.minstyleviewphotograpgy, YourOrderScreenStyles.bgcolorset]}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={YourOrderScreenStyles.contentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={YourOrderScreenStyles.minflexview}>
            <View style={YourOrderScreenStyles.minviewsigninscreen}>
              <View style={YourOrderScreenStyles.paddingtopset}>
                <FlatList
                  data={myOrders}
                  renderItem={({ item, index }) => (<MyOrderFlatFun item={item} index={index} onPress={() => navigation.navigate(RouteName.CART_TAB)} />)}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default MyOrderTab;
