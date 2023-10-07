import React, { useEffect } from 'react';
import { View, StatusBar, Image } from 'react-native';
import images from '../../index';
import { Style } from '../../styles';
import { Colors } from '../../utils';
import { useDispatch } from 'react-redux';
import { color_picker_set_action } from "../../redux/action/CommonAction";
import { useSelector } from "react-redux";
import { RouteName } from '../../routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            AsyncStorage.getItem('user_id').then((value) =>
                navigation.replace(RouteName.TRANSLATION_SCREEN)
            );
        }, 2500);
        {
            colorrdata != '' ?
                dispatch(color_picker_set_action(colorrdata))
                :
                dispatch(color_picker_set_action(Colors.theme_background))
        }
    }, []);
    return (
        <View style={Style.setimageviewstyle} backgroundColor={colorrdata} >
            <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
            <View style={Style.setbgcolorwhitelogo}>
                <Image style={Style.foodlogoimage} source={images.medicine_image} resizeMode='cover' />
            </View>
        </View>
    );
};
export default SplashScreen;
