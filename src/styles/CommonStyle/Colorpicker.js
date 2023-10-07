import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors, } from '../../utils';

export default Colorpicker = (Colors) => StyleSheet.create({

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.bggray,
    opacity: 0.9,
  },
  centeredViewtwo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: SW(20),
    backgroundColor: Colors.bgwhite,
    borderRadius: SW(7),
    paddingHorizontal: SW(5),
    marginHorizontal: SH(22),
    width: '93%',
    paddingBottom: SH(30),
    alignItems: "center",
    shadowColor: Colors.box_shadow_color,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: SW(20),
    padding: SW(10),
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: Colors.btn_open_bgcolor,
  },
  buttonClose: {
    backgroundColor: Colors.btn_close_bgcolor,
  },
  textStyle: {
    color: Colors.white_text_color,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: SH(15),
    textAlign: "center",
  },
  setheight: {
    height: SH(300),
  },
  setbuttonwidth: {
    paddingTop: SH(30),
    width: '100%',
  },
  setcolorwhite: {
    color: Colors.white_text_color,
    paddingVertical: SH(15),
    fontSize: SF(20),
  },
  colorpickerpickerimagwidth: {
    width: SW(30),
    height: SH(30),
    marginRight: SW(10),
  },
  pickerbtn: {
    colors: Colors.black_text_color
  }
});