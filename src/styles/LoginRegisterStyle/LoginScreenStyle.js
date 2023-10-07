
import { StyleSheet, Platform } from 'react-native';
import { SF, SH, SW, Fonts, Colors, } from '../../utils';

export default LoginScreenStyle = (Colors) => StyleSheet.create({

  contentContainerStyle: {
    width: '100%',
    height: 'auto'
  },
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.bgwhite
  },
  minviewsigninscreen: {
    width: '100%',
    // marginHorizontal: '5%',
  },

  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  whiteboxshadow: {
    height: SH(204),
    width: '100%',
    overflow: 'hidden',
    borderBottomRightRadius: SW(30),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: SW(30),
    backgroundColor: Colors.bgwhite,
    shadowColor: Colors.red,
    shadowOffset: {
      width: SW(345),
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  setimagviewlogin: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  imagesetus: {
    width: SW(70),
    height: SH(70),
  },
  bgcolortabset: {
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: SH(10),
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: SW(72),
  },
  tabsettext: {
    color: Colors.black_text_color,
    fontSize: SF(18),
    fontWeight: '700',
    fontFamily: Fonts.Poppins_Bold,
  },
  bordersetactive: {
    position: 'absolute',
    height: Platform.OS === 'ios' ? 3 : 3,
    width: SW(150),
    left: Platform.OS === 'ios' ? 20 : 20,
    top: Platform.OS === 'ios' ? -3 : -3,
    borderRadius: SW(40),
  },
  bordersetactivetwo: {
    position: 'absolute',
    height: Platform.OS === 'ios' ? 3 : 3,
    width: SW(150),
    top: Platform.OS === 'ios' ? -3 : -3,
    right: Platform.OS === 'ios' ? 60 : 30,
    borderRadius: SW(40),
    backgroundColor: Colors.theme_background
  },
  tabminview: {
    // width: '87%',
    // marginHorizontal: '6.5%',
    paddingTop: SH(24),
  },
  padH20: {
    paddingHorizontal: SW(20)
  },
  textstyle: {
    fontSize: SF(17),
    color: Colors.theme_background,
    fontWeight: '600',
    fontFamily: Fonts.Poppins_Medium,
  },
  buttonStyle: {
    backgroundColor: Colors.theme_background,
    height: SH(56),
    borderRadius: SW(50),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 25,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  buttonTextStyle: {
    color: Colors.white_text_color,
  },
  buttonimagtext: {
    color: Colors.white_text_color,
    position: 'relative',
    left: SW(10),
    paddingTop: SH(6),
    fontSize: SF(16),
    fontWeight: '600',
  },
  buttonview: {
    paddingTop: SH(15),
    paddingBottom: SH(7)
  },
  textColorset: {
    color: Colors.black_text_color,
    textAlign: 'center',
    fontSize: SF(20),
    paddingBottom: SH(12),
  },
  bluebuttonstyle: {
    backgroundColor: Colors.Blue_crayola_color,
    height: SH(56),
    marginBottom: SH(20),
    borderRadius: SW(50),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 25,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  setbuttonborderradiuswhite: {
    backgroundColor: Colors.anti_flash_white_color,
    height: SH(56),
    borderRadius: SW(100),
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 0,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  buttonimagtexthree: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Metropolis_SemiBold,
    marginLeft: SW(5)
  },
  setbuttonborderradius: {
    borderRadius: SW(150),
    backgroundColor: Colors.theme_background,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 25,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  // Sign-UP //
  flexrowbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SH(10),
  },
  allreadylogintext: {
    width: '50%',
    paddingRight: SW(20),
    marginLeft: SW(30),
  },
  settextstyle: {
    fontSize: SF(16),
    color: Colors.sonic_silver,
    fontWeight: '400',
    fontFamily: Fonts.Metropolis_Medium,
    textAlign: 'center'
  },
  setbuttonviestylesinup: {
    width: '50%',
  },
  logintext: {
    fontWeight: '700',
    color: Colors.facebook_logo_color,
  },
  flexrowtwxtandgoogle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: SH(20),
  },
  flexrowtwxtanimage: {
    flexDirection: 'row',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  googleimage: {
    width: SW(35),
    height: SH(35),
  },
  facebbokimgsignup: {
    width: SW(28),
    height: SH(28),
  },
  registertextstyle: {
    fontSize: SF(30),
    color: Colors.theme_background,
    fontFamily: Fonts.Nuntion_midum,
    fontWeight: '700'
  },
  gooleiconsetwhiteshadow: {
    backgroundColor: Colors.bgwhite,
    marginLeft: SW(20),
    height: SH(45),
    width: SW(45),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SW(10),
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 4,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 4,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  paddingbottom: {
    paddingBottom: SH(10),
  },
  // forget password 
  setbackarror: {
    width: SW(15),
    height: SH(15)
  },
  setminviewForgotPassword: {
    width: '100%',
  },
  setforgettext: {
    paddingTop: SH(30),
    paddingRight: SW(40),
    paddingBottom: SH(20),
  },
  forgettextset: {
    fontSize: SF(36),
    color: Colors.theme_background,
    fontFamily: Fonts.Metropolis_Medium,
  },
  messageboxstyle: {
    width: SW(30),
    height: SH(25),
    borderRadius: SW(5),
    marginRight: SW(10),
    marginLeft: SW(7)
  },
  settextstyleforget: {
    color: Colors.granite_gray,
    fontSize: SF(14),
    fontFamily: Fonts.Metropolis_Medium,
    paddingHorizontal: SW(20)
  },
  containerStyle: {
    height: SH(55),
  },
  starcolor: {
    color: Colors.giants_orange,
    fontSize: SF(14),
  },
  sendcode: {
    paddingTop: SH(30),
    fontSize: SF(24),
    fontFamily: Fonts.Metropolis_Medium,
  },
  bottomaerrowimg: {
    width: SW(110),
    height: SH(110)
  },
  flexrowsetsendcode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  setpositionabsolute: {
    marginTop: SH(20),
    height: SH(60),
    width: SW(60),
    backgroundColor: Colors.theme_background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SW(200),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 4,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 4,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  loginviewmin: {
    marginTop: SH(20),
  },
  textColorsetwhite: {
    color: Colors.white_text_color,
  },
  marginright: {
    marginRight: SW(6),
  },
  centerarrow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  positionsetabsoluteincon: {
    position: 'absolute',
    top: SH(13.5),
    left: SW(40),
    backgroundColor: Colors.bgwhite,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: SW(30),
    height: SH(30),
    borderRadius: SW(100),
  },
  facbookbgColorset: {
    width: SW(30),
    height: SH(30),
    backgroundColor: Colors.metallic_blue_color,
    borderRadius: SW(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexrowsetminview: {
    backgroundColor: Colors.Blue_crayola_color,
    height: SH(56),
    width: '100%',
    borderRadius: SW(100),
    marginBottom: SH(15),
  },
  loginwithfacebboktext: {
    color: Colors.white_text_color,
    marginLeft: SW(10),
  },
  iconbgcolorwhite: {
    backgroundColor: Colors.bgwhite,
    borderRadius: SW(100),
    height: SH(30),
    width: SW(30),
    marginRight: SW(10),
    marginTop: SH(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pleseentername: {
    color: Colors.red,
    fontSize: SF(16),
    marginBottom: SH(10),
    position: 'relative',
    top: SH(-10),
    fontFamily: Fonts.Metropolis_Medium,
  },
  paregraphotpbottom: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(13),
    marginBottom: '8%',
    marginRight: SW(10),
  },
  paregraph: {
    color: Colors.dark_candy_apple_red_color,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(12),
  },

  signintextset: {
    fontSize: SF(30),
    textAlign: 'center',
    paddingBottom: SH(15),
    color: Colors.theme_background,
    fontFamily: Fonts.Metropolis_Medium,
  },

  accountbutton: {
    width: '100%',
    marginBottom: SH(15),
  },
  flexrowsettext: {
    flexDirection: 'row',
  },

  otpbuttonstyle: {
    width: SW(50),
    height: SH(61),
    borderWidth: SW(2.5),
    borderColor: Colors.theme_background,
    color: Colors.black_text_color,
    fontSize: SF(28),
    fontWeight: '700',
    borderRadius: SH(7),
  },
  textinputcolorbutton: {
    color: Colors.white_text_color,
  },
  resendtextbold: {
    fontSize: SF(13),
    color: Colors.black_text_color,
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
  },

  topimage: {
    width: SW(100),
    height: SH(100),
    borderRadius: SW(100),
    borderWidth: SW(5),
    borderColor: Colors.gray_text_color
  },
  otpinputstyleaet: {
    height: SH(100),
    width: '100%',
  },
  inputUnderLine: {
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 25,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  padH10: {
    paddingHorizontal: SW(10)
  },
  inputtextstyle: {
    color: Colors.sonic_silver,
    fontSize: SF(16),
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
    width: '100%',
    borderWidth: 0
  },
  setpasswordwidtbg: {
    width: '70%',
  },
  textpassworedsert: {
    color: Colors.sonic_silver,
    paddingRight: SW(30),
    fontSize: SF(16),
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
    width: '100%'
  },
  logoutStyel: {
    width: SW(200),
    height: SH(150),
    alignSelf: 'center'
  },
  centerBtn: {
    justifyContent: 'center'
  },
  leftImageStyle: {
    marginVertical: SW(5),
    width: SW(30),
    height: SH(30),
  },
  passwordIcon: {
    marginRight: SW(10)
  }
});
