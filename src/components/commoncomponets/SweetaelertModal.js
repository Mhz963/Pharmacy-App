import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, TouchableOpacity, View } from "react-native";
import Style from '../../styles/CommonStyle/SweetaelertModalStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconF from 'react-native-vector-icons/dist/AntDesign';
import {Button} from '../../components';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";

function SweetaelertModal(props) {
    const { } = props;
    const [modalVisible, setModalVisible] = useState(true);
    const navigation = useNavigation();
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    return (
        <View>
            <View style={Style.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={Style.setbgcolorgrsay}>
                        <View style={Style.centeredView}>
                            <View style={Style.modalView}>
                                <View style={Style.setroundcenter}>
                                    <View style={[Style.checkiconright,{border_color:colorrdata}]}>
                                        <IconF style={[Style.setbackgroundicon,{color:colorrdata}]} name="check" size={45} />
                                    </View>
                                </View>
                                <View style={Style.registertextset}>
                                    <Text style={Style.settext}>{props.message}</Text>
                                </View>
                                <View style={Style.buttonminviewdettwo}>
                                    <View style={Style.setokbutton}>
                                        <Button title="Ok"
                                            buttonTextStyle={Style.setbuttontextstyle}
                                            buttonStyle={Style.setbuttonstyletwo}
                                            onPress={() => { setModalVisible(!modalVisible); navigation.navigate(props.link) }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};
export default SweetaelertModal;

