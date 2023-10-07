
import { StyleSheet } from 'react-native';
import { SF, SW, SH, widthPercent, Fonts, Colors } from '../../utils';

export default OtpVeryfyScreenStyle = (Colors) => StyleSheet.create({
// export default StyleSheet.create({
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.bgwhite
  },
  contentContainerStyle: {
    width: '100%',
    height: 'auto'
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  minviewsigninscreen: {
    width: '100%',
    // marginHorizontal: '5%',
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
  tabminview: {
    width: '87%',
    marginHorizontal: '6.5%',
    paddingTop: SH(24),
  },
  signintextset: {
    fontSize: SF(30),
    textAlign: 'center',
    paddingBottom: SH(15),
    color: Colors.theme_background,
    fontFamily: Fonts.Metropolis_Medium,
  },
  paregraph: {
    color: Colors.dark_candy_apple_red_color,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(12),
  },
  otpinputstyleaet: {
    height: SH(100),
    width: '100%',
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
  flexrowsettext: {
    flexDirection: 'row',
  },
  paregraphotpbottom: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(13),
    marginBottom: '8%',
    marginRight: SW(10),
  },
  resendtextbold: {
    fontSize: SF(13),
    color: Colors.black_text_color,
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
  },
  accountbutton: {
    width: '100%',
    marginBottom: SH(15),
  },
  textinputcolorbutton: {
    color: Colors.white_text_color,
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
  }


});
