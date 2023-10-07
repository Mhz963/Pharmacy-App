
import { StyleSheet, Platform } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';

export default WelcomeSumnayaStyle = (Colors) => StyleSheet.create({
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
    backgroundColor: Colors.theme_background
  },
  bgcolorset: {
    backgroundColor: Colors.bg_screen
  },
  minviewsigninscreen: {
    width: '100%',
    paddingTop: SH(20),
  },

  minflexview: {
    width: '100%',
    height: '100%',
  },
  textstyle: {
    fontFamily: Fonts.Nuntion_bold,
    fontWeight: '800',
    fontSize: SF(23),
    lineHeight: SH(30),
    textAlign: 'right',
    color: Colors.color_rgb_color
  },
  smallimagcenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingTop: SH(40),
  },
  imagsetview: {
    backgroundColor: Colors.bgwhite,
    height: SW(100),
    width: SW(100),
    borderRadius: SW(200),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textcenterview: {
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: SH(35),
    paddingBottom: SH(20),
  },
  longtitlestyle: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Metropolis_SemiBold,
    fontSize: SF(40),
    textAlign: 'center',
    lineHeight: SH(45),
    width: '100%'
  },
  imagesetus: {
    width: SW(85),
    height: SW(85),
    borderRadius: SW(200),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textcenterviewlongtext: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  longtitlestyletwo: {
    textAlign: 'center',
    paddingLeft: SW(45),
    fontFamily: Fonts.Metropolis_Medium,
    paddingRight: SW(40),
    color: Colors.color_rgb_color,
    fontSize: SF(20),
    lineHeight: SH(27)
  },
  setbottomviewwidth: {
    width: '100%',
    paddingHorizontal: '5%',
    paddingTop: SH(60),
  },
  sllectlocationscreen: {
    color: Colors.color_rgb_color,
    fontSize: SF(18),
    fontWeight: '700',
    fontFamily: Fonts.Nuntion_midum,
    paddingBottom: SH(20),
    textAlign: 'center'
  },
  buttonsearchstyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: SH(20),
    paddingLeft: SW(20),
    backgroundColor: Colors.bgwhite,
  },
  textstylebutton: {
    marginLeft: SW(140),
    position: 'relative',
    right: SW(130),
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
  },
  textstylebuttontwo: {
    marginLeft: SW(14),
    position: 'relative',
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
  },
  settextstyle: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingTop: Platform.OS === 'ios' ? 70 : 30,
    alignItems: 'center',
    position: 'absolute',
    right: 0,
  },
  textstyle: {
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(17),
    fontWeight: '800',
    lineHeight: SH(30),
    textAlign: 'right',
    color: Colors.color_rgb_color
  },
  flexicon: {
    flexDirection: 'row',
  },
  flexrighticonsingle: {
    position: 'relative',
    right: SW(15),
  },
  setflexminview: {
    flexDirection: 'row'
  },
  locateMeBtnStyle: {
    marginLeft: SW(140),
    position: 'relative',
    right: SW(130),
    fontSize: SF(17),
    color: Colors.theme_background,
  },
  provideDeliveryBtnStyle: {
    marginLeft: SW(14),
    position: 'relative',
    fontSize: SF(17),
    color: Colors.theme_background,
  },
  settextstyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(0, 100%, 99.8%)',
    position: 'absolute',
    top: SH(40),
    right: SW(20),
    width: SW(50),
    height: SW(50),
    borderRadius: SW(17),
  },
  setbgcolorviewtwoview: {
    borderRadius: SW(14),
    width: SW(40),
    height: SH(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.theme_background
  },
  textstyle: {
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(33),
    fontWeight: '800',
    lineHeight: SH(30),
    textAlign: 'center',
    color: Colors.white_text_color,
  },
});
