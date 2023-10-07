import { StyleSheet, Platform } from 'react-native';
import { Fonts, SF, SH, SW, Colors } from '../../utils';

export default ConfirmLocationStyle = (Colors) => StyleSheet.create({

  contentContainerStyle: {
    width: '100%',
    height: 'auto'
  },
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.bgwhite,
  },
  bgcolorset: {
    backgroundColor: Colors.bg_screen
  },
  minviewsigninscreen: {
    width: '100%',
    backgroundColor: Colors.international_orange_color,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 70 : 30,
    height: Platform.OS === 'ios' ? 240 : 200,
    paddingBottom: SH(40),
    // marginHorizontal: '5%',
  },
  setflexcenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: SW(70),
    width: SW(70),
    backgroundColor: Colors.bgwhite,
    borderRadius: SW(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeimage: {
    width: SW(30),
    height: SH(30),
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  bgwhiteview: {
    backgroundColor: Colors.bgwhite,
    borderRadius: SW(20),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  setsearchinput_bg_colorcolor: {
    backgroundColor: Colors.cultured_f4_color,
    paddingHorizontal: SW(15),
    height: SH(57),
    marginTop: SH(25),
  },
  texttype: {
    fontSize: SF(16),
    fontFamily: Fonts.Poppins_Medium,
    padding: 0,
    paddingTop: SH(15),
  },
  flexrowhomeimage: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  satyanilaym: {
    color: Colors.black_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
  },
  satyanilaymtwo: {
    color: Colors.address_text_color,
    fontSize: SF(14),
    fontFamily: Fonts.Poppins_Medium,
  },
  marginright: {
    marginRight: SW(20),
  },
  flexrowset: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: '10%',
    paddingTop: SH(30),
  },
  saveaddresh: {
    color: Colors.sonic_silver_color_two,
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
  },
  setbgminviewhome: {
    paddingHorizontal: '17%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: SH(20),
  },
  sethometext: {
    fontSize: SF(15),
    lineHeight: SH(24),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.deep_koamaru_color,
    paddingTop: SH(7),
  },
  setwhiteboxinhome: {
    width: SW(90),
    height: SH(90),
    flexDirection: 'row',
    borderRadius: SW(30),
    marginBottom: SH(30),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bgwhite,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  centerimg: {
    marginLeft: SW(5),
  },
  setimageborderredius: {
    borderTopLeftRadius: SW(27),
    borderTopRightRadius: SW(27),
    borderBottomLeftRadius: SW(27),
    borderBottomRightRadius: SW(27),
    width: '100%',
    marginTop: SH(-36),
    marginBottom: SH(100),
  },
  positonabsolute: {
    backgroundColor: Colors.bgwhite,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: SW(27),
    borderTopRightRadius: SW(27),
    paddingBottom: 0,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 25,
    elevation: Platform.OS === 'ios' ? 0 : 2,
  },
  setconformbutton: {
    marginTop: SH(20),
    borderRadius: SW(100),
  },
  textcolorsetwhite: {
    color: Colors.white_text_color
  },
  positonsetdelever: {
    position: 'absolute',
    top: SH(20),
    zIndex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    padding: SW(6),
    borderWidth: SW(1),
    marginLeft: SW(20),
    justifyContent: 'space-between',
    borderRadius: SW(20),
    width: SW(153),
    backgroundColor: Colors.bgwhite,
    border_color: 'rgba(0, 0, 0, 0.48)'
  },
  setdilivertext: {
    fontSize: SF(17),
    fontWeight: '600',
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
    paddingRight: SW(15),
    paddingTop: SH(3)
  },
  setpencileicon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    paddingTop: SH(10),
    position: 'relative',
    top: SH(20),
    width: SW(50),
    height: SH(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    right: SW(0),
    marginTop: SH(-20),
    zIndex: 3,
  },
  centerpencileicon: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  setwhiteboxwidth: {
    width: '85%',
    paddingBottom: SH(10),
  },
  setwhiteboxwidthtwo: {
    width: '99%'
  },
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mapstyleset: {
    flex: 1,
    width: '100%',
    height: SH(670),
    paddingTop: SH(10),
    borderRadius: SW(20),
  },
  mapviewstyle: {
    width: '100%',
    backgroundColor: Colors.bgwhite,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textstyle: {
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(17),
    fontWeight: '800',
    lineHeight: SH(30),
    textAlign: 'center',
    color: Colors.white_text_color,
  },
  setbgcolorviewtwoview: {
    borderRadius: SW(14),
    width: SW(90),
    paddingRight: SW(6),
    paddingBottom: SW(2),
    height: SH(31),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.theme_background
  },
  settextstyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'hsl(0, 100%, 99.8%)',
    position: 'absolute',
    top: SH(55),
    left: SW(10),
    width: SW(100),
    height: SH(40),
    borderRadius: SW(17),
  },
  markericon: {
    width: SW(50),
    height: SH(50)
  },
  minstyleviewphotograpgys: {
    backgroundColor: Colors.bgwhite,
    height: '100%'
  },
  modalView: {
    width: '100%',
    height: '100%',
    borderRadius: SW(20),
    padding: SW(15),
    paddingTop: SH(10),
  },
  flexrowsetlocationmap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  setmarginleftgps: {
    marginLeft: SW(15),
  },
  cureentlocationtext: {
    color: Colors.theme_background,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(17),
    fontWeight: '700',
  },
  usingtextlocation: {
    color: Colors.theme_background,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(13),
  },


});
