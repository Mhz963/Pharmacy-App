import { StyleSheet } from 'react-native';
import { Fonts, Colors, SW, SH, SF } from '../../utils';

export default CustomeSlidebar = (Colors) => StyleSheet.create({

  customslidebarmenu: {
    paddingHorizontal: SW(20),
    paddingTop: SH(20),
  },
  bgcolorset: {
    backgroundColor: Colors.bg_screen
  },
  hometextstyle: {
    color: Colors.black_text_color,
    fontSize: SF(18),
    fontFamily: Fonts.Metropolis_Medium,
    opacity: 0.7,
  },
  flexrowset: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Colors.LighGrey,
    borderBottomWidth: SW(1.5),
    paddingVertical: SH(15),
    borderStyle: 'dotted',
  },
  settingandlogout: {
    marginTop: SH(40),
  },
  setwidth: {
    width: SW(40),
  },
  modalcontainerwrap: {
    width: '100%'
  },
  centeredView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'relative',
    width: '100%',
    paddingHorizontal: '5%'
  },
  modalogout: {
    width: '100%',
  },
  modalView: {
    width: '100%',
  },
  setiallpaddingmodal: {
    backgroundColor: Colors.bgwhite,
    padding: SW(25),
    borderRadius: SW(30),
    width: '100%'
  },
  icomvlose: {
    position: 'absolute',
    right: SW(20),
    top: SH(5)
  },
  modalTexttwo: {
    paddingVertical: SH(20),
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(16),
    textAlign: 'center'
  },
  logoutStyel: {
    width: SW(100)
  }

});