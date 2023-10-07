
import { StyleSheet, Dimensions } from 'react-native';
import { SF, SH, SW, Fonts, colors, Strings, widthPercent, Colors } from '../../utils';

export default RatinsgScreenStyle = () => StyleSheet.create({
  // export default StyleSheet.create({

  scrollViewStyle: {
    width: '100%',
    height: 'auto'
  },
  minstyleviewphotograpgy: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minstyleviewphotograpgytwo: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.bgwhite,
  },
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: SH(20),
  },
  minviewsigninscreen: {
    width: '90%',
    marginHorizontal: '5%',
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  inputUnderLine: {
    backgroundColor: Colors.bgwhite,
    width: '100%',
    color: Colors.black_text_color,
    borderRadius: 7,
    shadowColor: Colors.shadowColor,
    fontFamily: 'DMSans-Medium',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: SW(12),
    height: SH(50),
    marginBottom: SH(12),
    paddingRight: SW(15),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  inputUnderLinereviews: {
    backgroundColor: Colors.bgwhite,
    width: '100%',
    color: Colors.black_text_color,
    borderRadius: 7,
    shadowColor: Colors.shadowColor,
    fontFamily: 'DMSans-Medium',
    paddingLeft: SW(12),
    marginBottom: SH(12),
    paddingVertical: SH(20),
    paddingRight: SW(15),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  textpassworedsert: {
    color: Colors.black_text_color,
    fontFamily: 'DMSans-Medium',
    width: '80%',
  },
  inputspaceset: {
    marginTop: '8%'
  },
  signuptextview: {
    textAlign: 'center',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: SH(12),
    paddingHorizontal: SW(5),
  },
  signintextset: {
    fontSize: SF(30),
    paddingBottom: SH(15),
    paddingLeft: SW(5),
    color: Colors.philippine_silver,
    fontFamily: 'DMSans-Bold',
    textAlign: 'center'
  },
  accountbutton: {
    marginTop: SH(10),
    marginHorizontal: SW(15)
  },
  buttonset: {
    borderWidth: SW(1),
    borderColor: Colors.philippine_silver,
    backgroundColor: Colors.philippine_silver,
    width: '100%',
    borderRadius: SW(7),
    height: SH(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTextStyleSignWithNumber: {
    backgroundColor: Colors.bgwhite,
    color: Colors.philippine_silver,
    fontFamily: 'DMSans-Bold',
    fontSize: SF(18),
  },
  buttonTextStyleSignWithNumber2: {
    color: Colors.white_text_color,
    fontFamily: 'DMSans-Bold',
    fontSize: SF(18),
  },
  inputviewset: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  eyeiconset: {
    color: Colors.gray_text_color
  },
  accounttext: {
    color: Colors.black_text_color,
    fontSize: SF(25),
    fontFamily: 'DMSans-Medium',
    textAlign: 'center'
  },
  accounttexttwo: {
    color: Colors.theme_background,
    fontSize: SF(23),
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center'
  },
  succefullimgviewsethre: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: SH(20),
  },
  stariconstyle: {
    color: Colors.big_foot_feet,
    flexDirection: 'row',
    opacity: 0.7,
  },
  accounttextsuccessfully: {
    fontSize: SF(17),
    textAlign: 'center',
    fontFamily: 'DMSans-Medium',
    paddingVertical: SH(20),
    color: Colors.gray_text_color
  },
  accounttextsuccessfullytwo: {
    fontSize: SF(17),
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
    paddingBottom: SH(20),
    color: Colors.gray_text_color
  },
  succefullyimg: {
    width: SW(200),
    height: SH(200),
  },
  succefullimgview: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: SH(25),
  },
  succefullimgviewtwo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: SH(25),
  },
  flexrowsetstarsignup: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: SH(15),
  },
  positionsetstyleinput: {
    position: 'relative',
    top: Platform.OS === 'ios' ? -15 : -25,
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.gray_text_color
  },
  starimagestyle: {
    width: SW(80),
    height: SH(170),
    tintColor: Colors.red
  },
  succefullimgviewsrtwo: {
    marginBottom: SH(40),
  },
  buttonbgColorset: {
    backgroundColor: Colors.bittersweet_color,
    borderRadius: SW(100),
  },
  buttontextstyle: {
    color: Colors.white_text_color,
  },
  centerBtn: {
    justifyContent: 'center'
  },
  successtyle: {
    width: SW(200),
    height: SH(150),
    alignSelf: 'center'
  },
  inputUnderLine: {
    paddingBottom: SH(10)
  },
  containerStyle: {
    minHeight: SH(130),
    shadowColor: Colors.gray_css_gray,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,
    borderRadius: SW(7),
  }

});
