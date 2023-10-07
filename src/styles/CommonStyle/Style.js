import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, widthPercent, Colors, } from '../../utils';

export default StyleSheet.create({
  setimageviewstyle: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

  },
  bgcolorset: {
    backgroundColor: Colors.bg_screen
  },
  backgroundimagstyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputUnderLine: {
    backgroundColor: Colors.anti_flash_white_color,
    color: Colors.black_text_color,
    width: '100%',
    height: SH(58),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: SW(10),
    marginBottom: SH(15),
    shadowColor: Colors.indigo_color,
    fontFamily: 'DMSans-Medium',
    paddingLeft: 12,
    paddingRight: 15,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 25,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  inputtextstyle: {
    color: Colors.input_text_color,
    fontSize: 16,
    // fontWeight:'600',
    fontFamily: Fonts.Metropolis_Medium,
    width: '100%'
  },
  textpassworedsert: {
    color: Colors.input_text_color,
    paddingRight: SW(30),
    fontSize: SF(16),
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
    width: '100%'
  },
  minboxview: {
    paddingVertical: SH(10),
    paddingLeft: SW(15),
    paddingRight: 0,
  },
  boldtextstyle: {
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(17),
    fontWeight: '600',
    color: Colors.black_text_color,
  },
  textgraystyle: {
    fontFamily: Fonts.Roboto_Regular,
    fontSize: SF(15),
    fontWeight: '600',
    color: Colors.gray_text_color,
  },
  flexiconview: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SW(5),
    paddingHorizontal: SW(7),
    backgroundColor: Colors.theme_background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: SW(70),
    height: SH(30),
    borderRadius: SW(20),
    paddingLeft: SW(15),
  },
  setdigitaltext: {
    fontSize: SF(14),
    color: Colors.white_text_color,
    textAlign: 'center',
    paddingRight: SW(10),
    fontWeight: '700',
    fontFamily: Fonts.Poppins_Bold,
  },
  flexrowtwxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  setwidthboldtext: {
    width: '70%'
  },
  flexrowtwxtTWO: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: SW(1),
    borderBottomColor: Colors.bright_Gray_ed_color
  },
  flexrupidigitaltext: {
    flexDirection: 'row',
    paddingTop: SH(15),
  },
  firstrupisstext: {
    fontSize: SF(14),
    color: Colors.black_text_color,
    textDecorationLine: 'line-through',
    textDecorationColor: Colors.gray_text_color,
    paddingRight: SW(10),
    fontWeight: '600',
    fontFamily: Fonts.Roboto_Regular,
  },
  fiesttextsettwo: {
    fontSize: SF(22),
    color: Colors.theme_background,
    paddingRight: SW(10),
    fontWeight: '600',
    fontFamily: Fonts.Roboto_Regular,
    position: 'relative',
    top: SH(-7),
  },
  flrxfireiocnview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  caltextstyle: {
    fontSize: SF(15),
    color: Colors.spanish_gray_color,
    paddingRight: SW(10),
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
  },
  paregraphtextbox: {
    color: Colors.quick_silver_color,
    fontSize: SF(14),
    fontFamily: Fonts.Roboto_Regular,
    paddingTop: SH(10),
  },
  flexviewheader: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: '5%',
    alignItems: 'center',
    height: SH(90),
  },
  textstylemenage: {
    color: Colors.black_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Metropolis_Medium,
    marginLeft: SW(17),
  },
  settingtext: {
    fontWeight: '600',
    fontSize: SF(15),
    fontFamily: Fonts.Metropolis_Medium,
    paddingRight: SW(15),
  },
  foodlogoimage: {
    width: SW(82),
    height: SH(82),
    borderRadius: SW(200),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  setbgcolorwhitelogo: {
    backgroundColor: Colors.bgwhite,
    height: SH(90),
    width: SW(90),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SW(200),
  },
  setpasswordwidtbg: {
    width: '70%',
  },

  cornertitlestyletwo: {
    backgroundColor: Colors.theme_background,
    borderTopLeftRadius: SW(3),
    borderBottomLeftRadius: SW(3),
    borderTopRightRadius: SW(15),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomRightRadius: SW(15),
    height: SH(30),
    paddingRight: SW(10),
    position: 'absolute',
    left: SW(-3),
    top: SH(70),
  },
  simpletextstylenewbox: {
    color: Colors.white_text_color,
    fontSize: SF(13.5),
    paddingLeft: SW(10),
    fontFamily: Fonts.Metropolis_Medium,
  },
  cornertitlestyle: {
    backgroundColor: Colors.theme_background,
    borderTopLeftRadius: SW(3),
    borderBottomLeftRadius: SW(3),
    borderTopRightRadius: SW(15),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomRightRadius: SW(15),
    height: SH(30),
    paddingRight: SW(10),
    position: 'absolute',
    left: SW(-3),
    top: SH(30),
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    backgroundColor: Colors.bggray,
    opacity: 0.9,
  },
  modalView: {
    width: '100%',
    height: '100%',
    borderRadius: SW(20),
    padding: SW(15),
    paddingTop: SH(10),
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
    textAlign: "center"
  },
  modalText: {
    marginBottom: SH(15),
    textAlign: "center"
  },
  setdeleverylocationstyle: {
    color: Colors.mandarin_color,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(17),
    fontWeight: '700',
    position: 'relative',
    top: SH(7),
    paddingBottom: SH(10),
  },
  flexrowsetlocationmap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: SH(5),
  },
  setmarginleftgps: {
    marginLeft: SW(15),
  },
  cureentlocationtext: {
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(17),
    fontWeight: '700',
  },
  usingtextlocation: {
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(13),
  },
  textandclosebutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: SH(10),
    paddingBottom: SH(20),
  },
  marginright: {
    marginRight: SW(20),
  },
  satyanilaym: {
    color: Colors.black_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
  },
  satyanilaymtwo: {
    color: Colors.input_text_color,
    fontSize: SF(13),
    width: '99%',
    fontFamily: Fonts.Poppins_Medium,
  },
  flexrowhomeimage: {
    flexDirection: 'row',
    paddingTop: SH(20),
    alignItems: 'center',
    // width:'90%'
  },
  minstyleviewphotograpgys: {
    backgroundColor: Colors.bgwhite,
    height: '100%'
  },
  locationsurchinputshadow: {
    backgroundColor: Colors.bgwhite,
    color: Colors.black_text_color,
    width: '100%',
    height: SH(58),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: SW(10),
    marginBottom: SH(25),
    shadowColor: Colors.indigo_color,
    fontFamily: 'DMSans-Medium',
    paddingLeft: SW(12),
    paddingRight: SW(15),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 25,
    elevation: Platform.OS === 'ios' ? 0 : 3,
  },
  inputtextstylelocation: {
    color: Colors.input_text_color,
    fontSize: SF(16),
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
    width: SW(270),
    marginLeft: SW(10),
  },
  flexinputstyle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.bgwhite
  },
  seticonborder: {
    borderWidth: SW(1),
    padding: SW(12),
    border_color: Colors.border_color,
    borderRadius: SW(13),
    marginLeft: SW(20),
  },
  placeholder: {
    height: SH(200),
    margin: SW(50),
    backgroundColor: Colors.bggray,
  },
  stickyComponent: {
    height: SH(30),
    backgroundColor: Colors.bg_red,
  },
  searchBarContainer: {
    backgroundColor: Colors.bg_red,
  },
  flextextinput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    backgroundColor: Colors.input_bg_color,
    borderRadius: SW(13),
    width: '79%',
    height: Platform.OS === 'ios' ? 50 : 50,
  },
  searcjtextcolorstyle: {
    color: Colors.search_text_color,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(16),
    marginLeft: SW(15),
  },
  setwidthviewinput: {
    width: '93%',
    marginHorizontal: '5%',
  },
  setbgcolorborder: {
    backgroundColor: Colors.bgwhite,
    width: SW(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: SH(50),
    zIndex: 1,
    borderRadius: SW(100),
    shadowColor: Colors.indigo_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 25,
    elevation: Platform.OS === 'ios' ? 0 : 3,
    position: 'absolute',
    right: SW(20),
    top: SH(-20)
  },
  imagsetstyle: {
    width: SW(90),
    height: SH(80),
    marginTop: SH(10),
    borderRadius: SW(13),
    marginRight: SW(12),
  },
  imagsetstylefoodyitemdata: {
    width: SW(50),
    height: SW(50),
    borderRadius: SW(100),
  },
  setboximage: {
    height: SH(150),
    width: '100%',
    borderTopLeftRadius: SW(15),
    borderTopRightRadius: SW(15),
  },
  iconbookmark: {
    position: 'relative',
    left: SW(10),
  },
  setboxtopimage: {
    height: SW(60),
    width: SW(60),
    borderRadius: SW(100),
  },
  imagsetstylefredrice: {
    height: SH(50),
    width: SW(50),
    borderRadius: SW(100),
    marginRight: SW(20),
  },
  foodedetailestextstyle: {
    width: widthPercent(86),
    borderTopLeftRadius: SW(10),
    borderTopRightRadius: SW(10),
    height: SH(160),
  },
  foodylistingpagedata: {
    width: widthPercent(89),
    borderRadius: SW(10),
    height: SH(160),
  },
  yourorderdata: {
    height: SH(50),
    width: SW(50),
    borderRadius: SW(5),
    marginRight: SW(10),
  },
  imagsetstyleyoyrperfrom: {
    width: SW(65),
    height: SW(65),
    borderRadius: SW(100),
  },
  imageroundyorgrprrfromance: {
    height: SH(50),
    width: SW(50),
    borderRadius: SW(100),
    marginRight: SW(10),
  },
  resetordersetbox: {
    height: SH(150),
    width: '100%',
    borderTopLeftRadius: SW(15),
    borderTopRightRadius: SW(15),
  },
  textstyle: {
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(33),
    fontWeight: '800',
    lineHeight: SH(30),
    textAlign: 'center',
    color: Colors.white_text_color,
  },
  setbgcolorviewtwoview: {
    borderRadius: SW(14),
    width: SW(40),
    height: SH(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settextstyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.bgwhite,
    position: 'absolute',
    top: SH(20),
    left: SW(10),
    width: SW(50),
    height: SH(50),
    borderRadius: SW(17),
  },
  setbariconmarginright: {
    paddingLeft: SW(5),
  },
  flexrowsetaddresh: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SH(5),
  },
  repeatordericon: {
    color: Colors.gray_text_color
  },
  cancelbtn: {
    backgroundColor: Colors.bgwhite
  },
  icomvloseselectwrap: {
    width: '100%',
    direction: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    textAlign: 'right',
    paddingHorizontal: '5%'
  },
  icomvloseselectwraptwo: {
    position: 'absolute',
    right: SW(0),
    top: SH(-7)
  },
  icomvloseselect: {
    width: 'auto',
  },
  headerStyle: {
    backgroundColor: Colors.white_text_color,
  },
  RemoveBgColor: {
    backgroundColor: Colors.white_text_color
  },
  setbgcolorgrsay: {
    backgroundColor: Colors.gray_text_color,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    opacity: Platform.OS === 'ios' ? 2 : 0.9,
  },
  CenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ModalView: {
    backgroundColor: Colors.white_text_color,
    borderRadius: SH(7),
    shadowColor: Colors.black_text_color,
    shadowOffset: {
      width: SW(0),
      height: SH(2)
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingVertical: SH(20),
    width: '95%',
  },
  setroundcenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  setbuttontextstyle: {
    color: Colors.bgwhite,
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
    backgroundColor: Colors.bgwhite,
    borderWidth: SW(1),
    borderColor: Colors.theme_background,
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
  setbackgroundicon: {
    // paddingTop: SH(15),
  },
  registertextset: {
    paddingTop: SH(25),
    paddingBottom: SH(0),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  settext: {
    color: Colors.black_text_color,
    fontSize: SF(20),
    paddingHorizontal: SH(20),
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
  },
  buttonminview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SH(40),
    paddingTop: SH(20),
  },
  setokbutton: {
    width: '47%'
  },
});