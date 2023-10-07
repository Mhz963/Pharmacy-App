import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors, } from '../../utils';

export default SweetaelertModalStyle = (Colors) => StyleSheet.create({
  // export default StyleSheet.create({
  inputMobile: {
    marginBottom: SH(13),
    paddingHorizontal: SW(12),
    width: '100%',
    paddingTop: SH(10),
    paddingBottom: SW(7),
    height: SH(47),
    color: Colors.gray_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: SW(7),
    backgroundColor: Colors.bgwhite,
    shadowColor: Colors.box_shadow_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  numberinputMobile: {
    marginBottom: SH(13),
    paddingHorizontal: SW(12),
    width: '100%',
    paddingTop: SH(12),
    paddingBottom: SW(7),
    height: SH(47),
    color: Colors.gray_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: SW(7),
    backgroundColor: Colors.bgwhite,
    shadowColor: Colors.box_shadow_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  minviewallcontent: {
    width: '90%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.sp_Theme,
  },
  flexrowpassword: {
    width: '100%',
    borderRadius: SH(7),
    flexDirection: 'row',
    paddingHorizontal: SW(12),
    marginBottom: SH(15),
    height: SH(47),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.bgwhite,
    shadowColor: Colors.box_shadow_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  setinputpassword: {
    width: '80%',
    color: Colors.gray_text_color,
    fontSize: SF(17),
    padding: 0,
    paddingTop: SH(5),
    fontFamily: Fonts.Poppins_Medium,
  },

  headerstylebgcolor: {
    backgroundColor: Colors.header_bgcolor
  },
  minviewaudioacall: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: SW(15),
  },
  setheaderspacepadding: {
    height: SH(60),
    backgroundColor: Colors.header_bgcolor,
    paddingTop: SH(10),
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: SH(22),
  },
  modalView: {
    backgroundColor: Colors.bgwhite,
    borderRadius: SW(7),
    shadowColor: Colors.box_shadow_color,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: SW(4),
    elevation: 5,
    paddingVertical: SH(20),
    width: '95%'
  },
  setbgcolorgrsay: {
    backgroundColor: Colors.bggray,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    opacity: Platform.OS === 'ios' ? 2 : 0.9,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: SH(22),
  },
  closeIcon: {
    position: 'absolute',
    right: SW(15),
    top: SH(16),
    height: SH(40),
    width: SW(40),
    backgroundColor: Colors.close_icon_color,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SW(7),
  },
  iconclosestyle: {
    color: Colors.white_text_color,
    paddingBottom: SW(3),
  },
  checkiconright: {
    borderWidth: SW(3),
    height: SW(75),
    width: SW(75),
    borderRadius: SW(100),
    flexDirection: 'row',
    borderColor: Colors.theme_background,
    alignItems: 'center',
    justifyContent: 'center'
  },
  setroundcenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  setbackgroundicon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registertextset: {
    paddingTop: SH(25),
    paddingBottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  settext: {
    color: Colors.black_text_color,
    fontSize: SF(20),
    paddingHorizontal: SW(20),
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
  },
  setokbutton: {
    width: '40%',
  },
  setokbuttontwo: {
    width: '48%',
  },
  buttonminview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingTop: SH(20),
  },
  buttonminviewdettwo: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    paddingTop: SH(20),
  },
  setbuttonstyle: {
    backgroundColor: Colors.bg_red,
    width: '50%'
  },
  setinputstyleapply: {
    paddingHorizontal: SW(12),
    width: '100%',
    paddingTop: SH(10),
    paddingBottom: SW(7),
    height: SH(50),
    color: Colors.gray_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: SW(7),
    backgroundColor: Colors.header_bgcolor,

  },
  setalldetailesminview: {
    paddingTop: SH(70),
  },
  setbgimage: {
    height: '100%',
    width: '100%',
  },
  container: {
    height: '100%'
  },
  setbuttontextstyle: {
    color: Colors.white_text_color,
  },
  setbuttonstyletwo: {
    height: SH(55),
  },
  icomvlose: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    top: SH(10),
    right: SW(30),
  },
  margintop: {
    marginTop: SH(10),
  },
  buttoncolorwhite: {
    backgroundColor: 'transperent',
    shadowOpacity: 0
  },


});