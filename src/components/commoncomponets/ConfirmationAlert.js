import React, { useState, useMemo } from "react";
import { Modal, Text, View } from "react-native";
import { Style, SweetaelertModalStyle } from '../../styles';
import { Button, Lottie, VectoreIcons } from '../../components';
import propTypes from 'prop-types';
import { Colors, SF } from "../../utils";
import { useTranslation } from "react-i18next";

function SweetaelertModal(props) {
    const { message, modalVisible, setModalVisible, buttonminview, onPress, onPressCancel, buttonText, cancelButtonText, iconVisible, source, animationIcon, Lottiewidthstyle } = props;
    const { t } = useTranslation();
    const SweetaelertModalStyles = useMemo(() => SweetaelertModalStyle(Colors), [Colors]);
    return <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}
    >
        <View style={Style.setbgcolorgrsay}>
            <View style={Style.CenteredView}>
                <View style={Style.ModalView}>
                    {iconVisible &&
                        <View style={Style.setroundcenter}>
                            <View style={SweetaelertModalStyles.checkiconright}>
                                <VectoreIcons icon="AntDesign" color={Colors.theme_background} name="check" size={SF(45)} />
                            </View>
                        </View>
                    }
                    {
                        animationIcon &&
                        <View>
                            <Lottie
                                source={source}
                                Lottiewidthstyle={Lottiewidthstyle}
                            />
                        </View>
                    }
                    <View style={Style.registertextset}>
                        <Text style={Style.settext}>{message}</Text>
                    </View>
                    <View style={[Style.buttonminview, { ...buttonminview }]} >
                        <View style={Style.setokbutton}>
                            <Button title={buttonText}
                                onPress={() => { onPress && onPress() }}
                            />
                        </View>
                        {cancelButtonText ?
                            <View style={Style.setokbutton}>
                                <Button title={cancelButtonText}
                                    onPress={() => { onPressCancel() }}
                                />
                            </View>
                            : null
                        }
                    </View>
                </View>
            </View>
        </View>
    </Modal>;
}

SweetaelertModal.defaultProps = {
    message: '',
    setModalVisible: () => { },
    modalVisible: false,
    onPress: () => { },
    onPressCancel: () => { },
    buttonText: 'Ok',
    cancelButtonText: '',
    iconVisible: false
};

SweetaelertModal.propTypes = {
    message: propTypes.string,
    setModalVisible: propTypes.func,
    modalVisible: propTypes.bool,
    onPress: propTypes.func,
    onPressCancel: propTypes.func,
    buttonText: propTypes.string,
    cancelButtonText: propTypes.string,
    iconVisible: propTypes.bool
};

export default SweetaelertModal;
