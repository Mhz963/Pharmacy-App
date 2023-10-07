import React, { useMemo } from 'react';
import { Modal, View, Pressable, Image } from 'react-native';
import propTypes from 'prop-types';
import { ModalStyle } from '../../styles';
import { useTheme } from '@react-navigation/native';
import images from '../../index';

function ModalComponent({ children, modalVisible, setModalVisible, close, ModalViewStyle, modalbuttonClose }) {
  const { Colors } = useTheme();
  const ModalStyles = useMemo(() => ModalStyle(Colors), [Colors]);
  return <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}
  >
    <View style={ModalStyles.ModalCenteredView}>
      <View style={[ModalStyles.ModalView, { ...ModalViewStyle }]}>
        <Pressable
          style={ModalStyles.CloseView}
          onPress={() => close ? close() : null}
        >
          {close ?
            <Pressable
              style={[ModalStyles.ModalButtonClose, { ...modalbuttonClose }]}
              onPress={() => close()}
            >
              <Image resizeMode='cover' source={images.close} />
            </Pressable>
            : null}
          {children}
        </Pressable>
      </View>
    </View>
  </Modal>;
}

Modal.defaultProps = {
  setModalVisible: () => { },
  modalVisible: false
};

ModalComponent.prototype = {
  setModalVisible: propTypes.func,
  modalVisible: propTypes.boolean
};

export default ModalComponent;
