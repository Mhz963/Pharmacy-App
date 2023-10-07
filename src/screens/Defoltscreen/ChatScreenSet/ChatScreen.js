import React, { useMemo, useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, TouchableOpacity, FlatList, } from "react-native";
import { ChatScreenStyle } from '../../../styles';
import { Spacing, VectoreIcons, ChatDataView, Input } from '../../../components';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";
import { SF, Colors, SH , ChatDataText} from '../../../utils';

const ChartScreenset = (props) => {
  const { t } = useTranslation();
  const { navigation } = props;
  const { Colors } = useTheme();
  const ChatScreenStyles = useMemo(() => ChatScreenStyle(Colors), [Colors]);
  const [Reply, setReply] = useState('');
  return (
    <View style={ChatScreenStyles.MinViewScreen}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={ChatScreenStyles.ScrollViewTestHeight}>
        <KeyboardAvoidingView enabled>
          <View style={ChatScreenStyles.MinFlexView}>
            <View style={ChatScreenStyles.MinContentView}>
              <FlatList
                data={ChatDataText}
                numColumns={1}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (<ChatDataView item={item}
                />)}
                keyExtractor={item => item.id}
              />
              <Spacing space={SH(17)} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={ChatScreenStyles.PostionAbsoluTeView}>
        <View style={ChatScreenStyles.TextMessageView}>
          <View style={ChatScreenStyles.FlexrowSendMesasage}>
            <View style={ChatScreenStyles.InputWidtgh}>
              <Input
                onChangeText={(value) => setReply(value)}
                value={Reply}
                inputStyle={ChatScreenStyles.TextInputBorderBottom}
                placeholder={t("Write_A_Reply")}
                multiline={true}
                inputContainerStyle={ChatScreenStyles.InputContainerStyle}
                containerStyle={ChatScreenStyles.mainContainerInputStyle}
                placeholderTextColor={Colors.gray_text_color}

              />
            </View>
            <View style={ChatScreenStyles.FlexrowImagiNations}>
              <TouchableOpacity>
                <VectoreIcons icon="FontAwesome5" name="grin" color={Colors.theme_backgound} size={SF(25)} />
              </TouchableOpacity>
              <TouchableOpacity style={ChatScreenStyles.MarginRightlikeicon}>
                <VectoreIcons icon="Ionicons" name="send" color={Colors.theme_backgound} size={SF(30)} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ChartScreenset;
