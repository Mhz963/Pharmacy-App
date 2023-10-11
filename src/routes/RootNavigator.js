import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors, Fonts, SF } from '../utils';
import {
  LoginRegistration, WelcomePhrmacy, LocationHomeOfficeScreen, ConfirmLocation, SearchPopularMedicine
  , SearchPopular, ProductItemList, ProductDetailesScreen,
  CreditCardScreen, PaymentSuccessFully, RatingScreen, EditLocationScreen, EditProfileScreen, SplashScreen, GetstartedSliderscreen, OtpVeryfyScreen, TrackOrderitem, CheckOutScreen, ForgotPassword, TranslationScreen,
} from '../screens';
import { RouteName, SideNavigator, } from '../routes';
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

const RootNavigator = (props) => {

  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const MyTheme = {
    ...DefaultTheme,
    Colors: Colors
  };
  const [colorValue, setColorValue] = useState(MyTheme)
  useEffect(() => {
    if (Colors.length != 0 && colorrdata != "") {
      Colors.theme_background = colorrdata;
      const MyThemeNew = {
        ...DefaultTheme,
        Colors: Colors
      };
      setColorValue(MyThemeNew)
    }
  }, [colorrdata, Colors])

  return (
    <NavigationContainer theme={colorValue}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={RouteName.SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={RouteName.GET_STARTED_SCREEN} component={GetstartedSliderscreen} />
        <Stack.Screen name={RouteName.LOGIN_AND_REGISTRATION} component={LoginRegistration} />
        <Stack.Screen name={RouteName.WELCOME_SCREEN} component={WelcomePhrmacy} />
        <Stack.Screen name={RouteName.LOCATION_HOME_OFFICE_SCREEN} component={LocationHomeOfficeScreen} />
        <Stack.Screen name={RouteName.CONFORMLOCATION_SET} component={ConfirmLocation} />
        <Stack.Screen name={RouteName.HOME_SCREEN} component={SideNavigator} />
        <Stack.Screen name={RouteName.POPULAR_SCREEN} component={SearchPopularMedicine} />
        <Stack.Screen name={RouteName.HOSPITAL_MEDICINE_SCREEN} component={SearchPopular} />
        <Stack.Screen name={RouteName.PRODUCT_LIST_ITEM} component={ProductItemList} />
        <Stack.Screen name={RouteName.PRODUCT_DETAILS_SCREEN} component={ProductDetailesScreen} />

        <Stack.Screen name={RouteName.OTP_VERIFY_SCREEN} component={OtpVeryfyScreen} />

        <Stack.Screen name={RouteName.ORDER_TAB_SCREEN} component={TrackOrderitem} />

        <Stack.Screen name={RouteName.CHECK_OUT} component={CheckOutScreen} />

        <Stack.Screen name={RouteName.CREDIT_CARD_SCREEN_SET} component={CreditCardScreen} />
        <Stack.Screen name={RouteName.PAYMENT_SUCCESSFULLY} component={PaymentSuccessFully} />
        <Stack.Screen name={RouteName.RATING_SCREEN_SET} component={RatingScreen} />

        <Stack.Screen name={RouteName.EDIT_LOCATION_SCREEN} component={EditLocationScreen} />

        <Stack.Screen name={RouteName.EDIT_PROFILE_SCREEN} component={EditProfileScreen} />

        <Stack.Screen name={RouteName.FORGET_PASSWORD_SCREEN} component={ForgotPassword}
        />
        <Stack.Screen name={RouteName.TRANSLATION_SCREEN} component={TranslationScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigator;
