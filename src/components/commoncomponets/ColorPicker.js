import React, { useState, useMemo } from "react";
import { View, Text, Image, Pressable, Modal, TouchableOpacity } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import { Colorpicker } from '../../styles';
import { color_picker_set_action } from "../../redux/action/CommonAction";
import { useDispatch, useSelector } from "react-redux";
import { Button } from '../../components';
import images from "../../index";
import { SW } from "../../utils";
import { useTheme, useNavigation } from '@react-navigation/native';
import { RouteName } from "../../routes";


const ColorPickerset = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const { colorrdata } = useSelector(state => state.commonReducer) || { colorrdata };
  const [currentColor, setCurrentColor] = useState(colorrdata);
  const dispatch = useDispatch();
  const onColorChange = (selectedColor) => {
    setCurrentColor(selectedColor);
    dispatch(color_picker_set_action(selectedColor))
  };
  const { Colors } = useTheme();
  const Colorpickers = useMemo(() => Colorpicker(Colors), [Colors]);
  return (
    <View>
      <View style={Colorpickers.centeredViewtwo}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={Colorpickers.centeredView}>
            <View style={Colorpickers.modalView}>
              <View style={Colorpickers.setheight}>
                <View
                  style={[
                    { backgroundColor: currentColor, borderRadius: SW(7) },
                  ]}
                >
                  <Text style={Colorpickers.setcolorwhite}>{currentColor}</Text>
                  <ColorPicker
                    color={currentColor}
                    onColorChange={onColorChange}
                    onColorSelected={'red'}
                    thumbSize={50}
                    noSnap={true}
                    defaultProps={true}
                    row={false}
                    gapSize={0}
                    discreteLength={0}
                    sliderHidden={true}
                    discrete={true}
                  />
                </View>
              </View>
              <View style={Colorpickers.setbuttonwidth}>
                <Button title="ok"
                  buttonStyle={{ backgroundColor: colorrdata, border_color: colorrdata }}
                  onPress={() => {setModalVisible(!modalVisible); navigation.navigate(RouteName.GET_STARTED_SCREEN)}}
                  buttonTextStyle={Colorpickers.pickerbtn}
                />
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image style={Colorpickers.colorpickerpickerimagwidth} resizeMode='cover' source={images.Successfully_color_picker_image} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default ColorPickerset;