import React from 'react';
import { RouteName } from '../routes';
import { CustomSidebarMenu, AppHeader, Spacing, } from '../components';
import { Colors, SH } from '../utils';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from "react-i18next";
import { TabNavigator } from '../routes';
import {
  AllBookMarkScreen, HelpScreen, SettingScreen, NotificationScreen, PaymentScreen, RatingScreen, Offer, ChatScreen
} from '../screens';
import { Style } from '../styles';

const SideNavigator = (props) => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const { t } = useTranslation();

  const HeaderArray = {
    headerShown: true,
    headerTintColor: Colors.theme_background,
    headerShadowVisible: false,
    headerStyle: Style.headerStyle,
  };

  return (
    <>
      <Drawer.Navigator drawerContent={(props) => <CustomSidebarMenu {...props} />} screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name={RouteName.HOME_SCREEN} component={TabNavigator} />
        <Drawer.Screen
          name={RouteName.ALL_BOOK_MARK_SCREEN} component={AllBookMarkScreen}
          options={{
            headerTitle: (props) => <AppHeader rightView={Style.RemoveBgColor} {...props} headerTitle={t("All Bookmarks")} />,
            ...HeaderArray,
          }}
        />
        <Drawer.Screen
          name={RouteName.HELP_SCREEN} component={HelpScreen}
          options={{
            headerTitle: (props) => <AppHeader rightView={Style.RemoveBgColor} {...props} headerTitle={t("Help_Text")} />,
            ...HeaderArray,
          }}
        />

        <Drawer.Screen
          name={RouteName.NOTIFICATION_SCREEN} component={NotificationScreen}
          options={{
            headerTitle: (props) => <AppHeader rightView={Style.RemoveBgColor} {...props} headerTitle={t("Notifications_Label")} />,
            ...HeaderArray,
          }}
        />
        <Drawer.Screen
          name={RouteName.SETTTING_SCREEN} component={SettingScreen}
          options={{
            headerTitle: (props) => <AppHeader rightView={Style.RemoveBgColor} {...props} headerTitle={t("All_Settings")} />,
            ...HeaderArray,
          }}
        />

        <Drawer.Screen
          name={RouteName.PAYMENT_SCREEN} component={PaymentScreen}
          options={{
            headerTitle: (props) => <AppHeader rightView={Style.RemoveBgColor} {...props} headerTitle={t("Payments_Label")} />,
            ...HeaderArray,
          }}
        />
        <Drawer.Screen
          name={RouteName.RATING_SCREEN_SET} component={RatingScreen}
          options={{
            headerTitle: (props) => <AppHeader rightView={Style.RemoveBgColor} {...props} headerTitle={t("Rating_Label")} />,
            ...HeaderArray,
          }}
        />

        <Drawer.Screen
          name={RouteName.OFFERS_TAB} component={Offer}
          options={{
            headerTitle: (props) => <AppHeader rightView={Style.RemoveBgColor} {...props} headerTitle={t("Offers_Label")} />,
            ...HeaderArray,
          }}
        />

        <Drawer.Screen
          name={RouteName.CHAT_SCREEN} component={ChatScreen}
          options={{
            headerTitle: (props) => <AppHeader rightView={Style.RemoveBgColor} {...props} headerTitle={t("Chat_Text")} />,
            ...HeaderArray,
          }}
        />




      </Drawer.Navigator>
    </>
  );
}
export default SideNavigator;