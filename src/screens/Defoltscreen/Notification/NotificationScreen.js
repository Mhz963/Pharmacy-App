import React, { useState, useMemo } from "react";
import { Text, View, Image, ScrollView, StatusBar, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { NotificationStyle } from '../../../styles';
import images from '../../../index';
import { Colors } from "../../../utils";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const NotificationScreen = () => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const NotificationStyles = useMemo(() => NotificationStyle(Colors), [Colors]);
  return (
    <View style={NotificationStyles.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgwhite} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={NotificationStyles.contentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={NotificationStyles.minflexview}>
            <View style={NotificationStyles.minviewsigninscreen}>
              <TouchableOpacity style={NotificationStyles.flexdiractionrow}>
                <View>
                  <Image style={NotificationStyles.imagesetus} resizeMode='cover' source={images.notifica1} />
                </View>
                <View style={NotificationStyles.setparegraphwidth}>
                  <Text style={NotificationStyles.textparegraph}>{t("Notification_Line_Label")}</Text>
                  <Text style={NotificationStyles.twonavemberscreen}>{t("Notification_date")}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={NotificationStyles.flexdiractionrowtwo}>
                <View>
                  <Image style={NotificationStyles.imagesetus} resizeMode='cover' source={images.notifica2} />
                </View>
                <View style={NotificationStyles.setparegraphwidthtwo}>
                  <Text style={NotificationStyles.textparegraph}>{t("Notification_Line_Label")}</Text>
                  <Text style={NotificationStyles.twonavemberscreen}>{t("Notification_date")}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default NotificationScreen;
