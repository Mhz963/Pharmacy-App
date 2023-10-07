
import { StyleSheet, Platform } from 'react-native';
import { SF, SH, SW, Fonts, Colors, } from '../../utils';

export default LocationHomeOfficeScreenStyle = (Colors) => StyleSheet.create({

  contentContainerStyle: {
    width: '100%',
    height: 'auto'
  },
  minstyleviewphotograpgy: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.anti_flash_white
  },
  minviewsigninscreen: {
    width: '100%',
    backgroundColor: Colors.theme_background,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 70 : 30,
    height: Platform.OS === 'ios' ? 240 : 200,
    paddingBottom: 40,
    // marginHorizontal: '5%',
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  setflexcenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: SH(70),
    width: SW(70),
    backgroundColor: Colors.bgwhite,
    borderRadius: SW(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bgwhiteview: {
    backgroundColor: Colors.bgwhite,
    borderRadius: SW(30),
    marginTop: SH(-70),
    paddingHorizontal: SW(20),
    paddingBottom: SH(40),
    paddingTop: SH(40),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 25,
    elevation: Platform.OS === 'ios' ? 0 : 2,
  },
  setsearchinputbgcolor: {
    backgroundColor: Colors.cultured_color,
    paddingLeft: SW(15),
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center',
    borderRadius: SW(15),
    height: SH(57),
    marginTop: SH(25),
  },
  texttype: {
    fontSize: SF(16),
    fontFamily: Fonts.Poppins_Medium,
    padding: 0,
    paddingTop: SH(5),
    width: SW(220),
    marginLeft: SW(10),
  },
  flexrowhomeimage: {
    flexDirection: 'row',
    paddingTop: SH(20),
    alignItems: 'center',
    // width:'90%'
  },
  containerStyle: {
    borderRadius: SW(15),
  },
  inputContainerStyle: {
    borderRadius: SW(30),
    paddingLeft: SW(10)
  },
  satyanilaym: {
    color: Colors.black_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
  },
  satyanilaymtwo: {
    color: Colors.sonic_silver,
    fontSize: SF(13),
    width: '99%',
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
    color: Colors.sonic_silver,
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
    marginRight: SW(16),
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
    color: Colors.deep_koamaru,
    paddingTop: SH(7),
  },
  setwhiteboxinhome: {
    width: SW(110),
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
  dilivertotextstyle: {
    fontWeight: '600',
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17),
  },
  flexrowdilevericon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  edittextflexpencil: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  homeimage: {
    width: SW(30),
    height: SH(30),
  },
  iconcenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  mapstyle: {
    flex: 1,
  },
  setimage: {
    width: '100%',
    height: SH(100),
  }
});
