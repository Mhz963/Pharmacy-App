import React, { useMemo } from 'react';
import { View, Text, Image } from 'react-native';
import { ChatScreenStyle } from '../../styles';
import { SH, SF } from "../../utils";
import { Spacing, VectoreIcons } from '../../components';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";
import images from '../../index';

const ChatDataView = (props) => {
    const { item, } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const ChatScreenStyles = useMemo(() => ChatScreenStyle(Colors), [Colors]);

    return (
        <View>
            <View style={ChatScreenStyles.MarginBottomSpace}>
                <View style={ChatScreenStyles.FlexRowJustyCenter}>
                    <View style={ChatScreenStyles.ChatViewBgColor}>
                        <Text style={ChatScreenStyles.TextColorMessage}>{t(item.ChatSelf)}</Text>
                        <Text style={ChatScreenStyles.TextColorMessageTwo}>{item.ChatTime}</Text>
                    </View>
                </View>
                <Text style={ChatScreenStyles.DataSandTimeColor}>{t(item.DateText)}</Text>
                <Spacing space={SH(10)} />
            </View>
            <View style={ChatScreenStyles.MarginBottomSpaceChat}>
                <Image source={images.Chat_image} style={ChatScreenStyles.ChatIcon} />
                <View style={ChatScreenStyles.FlexRowJustyCentertwo}>
                    <View style={ChatScreenStyles.MessageMinviewOwner}>
                        <Text style={ChatScreenStyles.TextColorMessage}>{t(item.DateText_Actually)}</Text>
                        <View style={ChatScreenStyles.FlexCheckSet}>
                            <Text style={ChatScreenStyles.TextColorMessageTwotwo}>{item.ChatTime_User}</Text>
                            <View style={ChatScreenStyles.SetRightIconViewStyle}>
                                <VectoreIcons icon="Ionicons" color={Colors.white_text_color} name="checkmark-done-outline" size={SF(20)} />
                            </View>
                        </View>
                    </View>
                </View>
                <Spacing space={SH(20)} />
            </View>
        </View>
    );
}
export default ChatDataView;