import React, { useState, useEffect, useMemo } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, StatusBar, TouchableOpacity, } from "react-native";
import { ConfirmLocationStyle } from '../../styles';
import { Colors, SF, SH } from '../../utils';
import { Button, VectoreIcons } from '../../components';
import { RouteName } from '../../routes';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const ConfirmLocation = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const ConfirmLocationStyles = useMemo(() => ConfirmLocationStyle(Colors), [Colors]);

  const OnLoginPress = () => {
    navigation.replace(RouteName.LOCATION_HOME_OFFICE_SCREEN);
  }
  const Homescreenonpress = () => {
    navigation.replace(RouteName.HOME_SCREEN);
  }
  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      // console.log('position', crd.latitude);
      if (crd) {
        setPosition({
          latitude: crd.latitude,
          longitude: crd.longitude,
          latitudeDelta: crd.latitudeDelta,
          longitudeDelta: crd.longitudeDelta,
        });
      }
    })
  }, []);

  return (

    <View style={ConfirmLocationStyles.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={ConfirmLocationStyles.contentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={ConfirmLocationStyles.minflexview}>
            <View style={ConfirmLocationStyles.bgwhiteview}>
              <View style={ConfirmLocationStyles.mapviewstyle}>
                <MapView
                  provider={PROVIDER_GOOGLE}
                  style={ConfirmLocationStyles.mapstyleset}
                  scrollEnabled={true}
                  showsUserLocation={true}
                  showsMyLocationButton={true}
                  followsUserLocation={true}
                  showsCompass={true}
                  zoomEnabled={true}
                  pitchEnabled={true}
                  rotateEnabled={true}
                  mapPadding={{ top: SH(50) }}
                >
                  <Marker
                    title={t("Yor_Are_Here_Label")}
                    description={t("This_Is_Description_Label")}
                    coordinate={position} />
                </MapView>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <TouchableOpacity onPress={() => OnLoginPress()} style={ConfirmLocationStyles.settextstyle}>
        <View style={ConfirmLocationStyles.setbgcolorviewtwoview}>
          <Text style={ConfirmLocationStyles.textstyle}>
            <VectoreIcons icon="Feather" name="chevrons-left" size={SF(27)} color={Colors.white_text_color} />
          </Text>
          <Text style={ConfirmLocationStyles.textstyle}>{t("Back_Label")}</Text>
        </View>
      </TouchableOpacity>
      <View style={ConfirmLocationStyles.positonabsolute}>
        <View style={ConfirmLocationStyles.setwhiteboxwidth}>
          <View style={ConfirmLocationStyles.centerpencileicon}>
            <TouchableOpacity style={ConfirmLocationStyles.setpencileicon} onPress={() => navigation.replace(RouteName.EDIT_LOCATION_SCREEN)}>
              <VectoreIcons icon="FontAwesome5" name="pencil-alt" size={SF(18)} color={Colors.philippine_gray_color} />
            </TouchableOpacity>
          </View>
          <View style={ConfirmLocationStyles.flexrowhomeimage}>
            <View style={ConfirmLocationStyles.marginright}>
              <VectoreIcons icon="Feather" name="home" size={SF(27)} color={Colors.black_text_color} />
            </View>
            <View>
              <Text style={ConfirmLocationStyles.satyanilaym}>{t("Home_Label")}</Text>
              <View style={ConfirmLocationStyles.setwhiteboxwidthtwo}>
                <Text style={ConfirmLocationStyles.satyanilaymtwo}>{t("Current_Location_Label")}</Text>
              </View>
            </View>
          </View>
          <View>
            <Button title={t("Confirm_Location_Label")}
              onPress={() => Homescreenonpress()}
            />
          </View>
        </View>
      </View>
    </View >
  );
};
export default ConfirmLocation;
