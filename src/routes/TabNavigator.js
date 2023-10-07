import React from 'react';
import { View } from 'react-native';
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import { HomeTab, CartTab, AccountTab, MyOrderTab } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { Style } from '../styles';
import { CustomSidebarMenu, HeaderLeftMenuIcon, AppHeader, HeaderScreenAddresh, ColorPicker, VectoreIcons } from '../components';
import { RouteName } from '../routes';
import { Colors, SF } from '../utils';
import { useTranslation } from "react-i18next";

const Tab = AnimatedTabBarNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HeaderArray = {
  headerShown: true,
  headerStyle: Style.headerStyle,
  headerShadowVisible: false,
};

function DrawerSidebarScreen(props) {
  return (
    <DrawerContentScrollView  {...props} contentContainerStyle={{ paddingTop: 0 }} >
      <CustomSidebarMenu {...props} />
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HomeScsreenTabAll" drawerContent={props => <DrawerSidebarScreen {...props} />}>
      <Drawer.Screen name="HomeScsreenTabAll"
        options={{ headerShown: false }}
        component={HomeScsreenTabAll} />
    </Drawer.Navigator>
  );
}
function Root() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen name="Homese" component={HomeScsreenTabAll}
        options={{
          title: 'dsfsdf',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
export default Root;


function HomeTabScreenStack(props) {
  const { t } = useTranslation();
  const { navigation } = props;
  return (
    <Stack.Navigator initialRouteName="HomeTab">
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          title: null, headerShown: true,
          headerShadowVisible: false,
          headerLeft: () => (
            <View style={Style.flexrowsetaddresh}>
              <HeaderLeftMenuIcon {...props} />
              <HeaderScreenAddresh onPress={() => navigation.navigate(RouteName.EDIT_LOCATION_SCREEN)} />
            </View>
          ),
          headerRight: () => (
            <View>
              <ColorPicker />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function MyOrderTabScreenStack(props) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="My Orders">
      <Stack.Screen
        name={t("My_Orders_Label")}
        component={MyOrderTab}
        options={{
          headerTitle: (props) => <AppHeader rightView={Style.RemoveBgColor} {...props} headerTitle={t("My_Orders_Label")} />,
          ...HeaderArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function CartTabScreenStack(props) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="CartTab">
      <Stack.Screen
        name={t("Cart_Label")}
        component={CartTab}
        options={{
          headerTitle: (props) => <AppHeader rightView={Style.RemoveBgColor} {...props} headerTitle={t("Cart_Label")} />,
          ...HeaderArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function AccountTabScreenStack(props) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="AccountTab">
      <Stack.Screen
        name={t("Account_Label")}
        component={AccountTab}
        options={{
          headerTitle: (props) => <AppHeader rightView={Style.RemoveBgColor} {...props} headerTitle={t("Account_Label")} />,
          ...HeaderArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          ),

        }}
      />
    </Stack.Navigator>
  );
}

export function HomeScsreenTabAll() {
  const { t } = useTranslation();
  return (
    <Tab.Navigator initialRouteName="Homes"
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: Colors.theme_background,
        activeBackgroundColor: Colors.bgwhite
      }}
    >
      <Tab.Screen
        name={RouteName.HOME_TAB}
        component={HomeTabScreenStack}
        options={{
          tabBarLabel: t("Home_Label"),
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <VectoreIcons
              color={focused ? Colors.theme_background : Colors.black_text_color}
              name="home"
              icon="Feather"
              size={SF(22)}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.YOUR_ORDER_SCREEN}
        component={MyOrderTabScreenStack}
        options={{
          tabBarLabel: t("My_Orders_Label"),
          tabBarIcon: ({ focused }) => (
            <VectoreIcons
              color={focused ? Colors.theme_background : Colors.black_text_color}
              icon="Octicons"
              size={SF(22)}
              name="list-unordered"
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.CART_TAB}
        component={CartTabScreenStack}
        options={{
          tabBarLabel: t("Cart_Label"),
          tabBarIcon: ({ focused }) => (
            <VectoreIcons
              color={focused ? Colors.theme_background : Colors.black_text_color}
              icon="AntDesign"
              size={SF(22)}
              name="shoppingcart"
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.ACCOUNT_TAB_SET}
        component={AccountTabScreenStack}
        options={{
          tabBarLabel: t("Account_Label"),
          tabBarIcon: ({ focused }) => (
            <VectoreIcons
              color={focused ? Colors.theme_background : Colors.black_text_color}
              icon="Feather"
              size={SF(22)}
              name="user"
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
