
import { StyleSheet, Platform } from 'react-native';
import { SF, SH, SW, Fonts, Colors, } from '../../utils';

export default OffersTabStyle = (Colors) => StyleSheet.create({
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
    backgroundColor: Colors.bgwhite,

  },
  minviewsigninscreen: {
    width: '100%',
    height: '100%'
    // marginHorizontal: '5%',
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  flexhomeimgandtext: {
    flexDirection: 'row',
    height: SH(50),
    alignItems: 'center',
    width: '80%'
  },
  minheaderflexview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: SH(80),
    width: '100%',
    paddingHorizontal: '5%'
  },
  homeimagstyle: {
    width: SW(25),
    height: SH(25),
    marginRight: SW(10),
  },
  hometext: {
    fontSize: SF(17),
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
  },
  addreshtext: {
    fontSize: SF(13.5),
    color: Colors.philippine_silver,
    fontFamily: Fonts.Poppins_Medium,
    marginTop: SH(-5),
  },
  heartimagstyle: {
    width: SW(32),
    height: SH(32),
  },
  flextextinput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    backgroundColor: Colors.anti_flash_white,
    borderRadius: SW(13),
    marginHorizontal: '5%',
    width: '74%',
    height: SH(50),
  },
  setinputtext: {
    fontSize: SF(16),
    fontFamily: Fonts.Roboto_Medium,
  },
  flexinputstyle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  seticonborder: {
    borderWidth: SW(1),
    padding: SW(12),
    borderColor: Colors.chinese_silver,
    borderRadius: SW(13)
  },
  setwidthfullset: {
    width: '100%',
    paddingHorizontal: '5%',
    marginTop: SH(20),
  },
  settextviewtitle: {
    fontSize: SF(17),
    fontFamily: Fonts.Metropolis_Medium,
    color: Colors.black_text_color,
    fontWeight: '700'
  },
  textstylerelish: {
    fontSize: SF(14),
    fontFamily: Fonts.Metropolis_Medium,
    color: Colors.gray_text_color,
  },
  setwhiteboxview: {
    backgroundColor: Colors.theme_background,
    color: Colors.black_text_color,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: SW(10),
    paddingTop: SH(20),
    marginTop: SH(20),
    paddingBottom: SH(20),
    shadowColor: Colors.indigo_color,
    fontFamily: 'DMSans-Medium',
    paddingHorizontal: SW(15),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  twxtstylewhite: {
    fontSize: SF(20),
    fontFamily: Fonts.Metropolis_Medium,
    color: Colors.white_text_color,
    fontWeight: '700'
  },
  savingtextstyle: {
    fontSize: SF(12),
    fontFamily: Fonts.Metropolis_Medium,
    color: Colors.white_text_color,
    fontWeight: '600'
  },
  paregraphtextstyule: {
    fontSize: SF(15),
    fontFamily: Fonts.Metropolis_Medium,
    color: Colors.white_text_color,
    fontWeight: '600',
    paddingTop: SH(10),
    lineHeight: SH(16),
  },
  setwidthfifty: {
    width: '52%'
  },
  settrestyele: {
    width: SW(150),
    height: SW(150),
    borderRadius: SW(100)
  },
  largwhiteboxone: {
    backgroundColor: Colors.spanish_gray_color,
    color: Colors.black_text_color,
    width: '47%',
    borderRadius: SW(17),
    overflow: 'hidden',
    paddingTop: SH(10),
    marginRight: SW(10),
    marginVertical: SH(20),
    paddingBottom: SH(50),
    shadowColor: Colors.indigo_color,
    fontFamily: 'DMSans-Medium',
    paddingHorizontal: SW(15),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  largwhiteboxtwo: {
    backgroundColor: 'hsl(321.1, 86%, 66.3%)',
    color: Colors.black_text_color,
    width: '47%',
    overflow: 'hidden',
    borderRadius: SW(17),
    paddingTop: SH(10),
    marginLeft: SW(5),
    marginVertical: SH(20),
    paddingBottom: SH(20),
    shadowColor: Colors.indigo_color,
    fontFamily: 'DMSans-Medium',
    paddingHorizontal: SW(15),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  largetextstyleset: {
    fontSize: SF(20),
    fontFamily: Fonts.Metropolis_Medium,
    color: Colors.white_text_color,
    fontWeight: '800'
  },
  settextupto: {
    fontSize: SF(11),
    lineHeight: SH(14),
    fontFamily: Fonts.Metropolis_Medium,
    color: Colors.white_text_color,
  },
  noupperlimittext: {
    fontSize: SF(14),
    fontFamily: Fonts.Metropolis_Medium,
    color: Colors.white_text_color,
    fontWeight: '800'
  },
  flexrtowsetbox: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    borderBottomColor: Colors.lightgray_color,
    borderBottomWidth: SW(2),
  },
  setbgcolorican: {
    backgroundColor: Colors.bgwhite,
    width: SW(20),
    height: SW(20),
    borderRadius: SW(220),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SH(5),
    zIndex: 1
  },
  setbgcoloricantwo: {
    backgroundColor: Colors.bgwhite,
    width: SW(20),
    height: SW(20),
    borderRadius: SW(220),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SH(32),
  },
  setboxinimage: {
    height: SH(100),
    width: SW(100),
    borderRadius: SW(200),
    borderWidth: SW(5),
    borderColor: Colors.gray_text_color
  },
  flexendimage: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: SH(-30),
    right: 0,
  },
  setsinglebox: {
    backgroundColor: 'hsl(0.7, 79.4%, 43.7%)',
    color: Colors.black_text_color,
    width: SW(160),
    flex: 1,
    flexDirection: 'row',
    marginRight: SW(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SW(17),
    paddingTop: SH(30),
    marginRight: SW(10),
    marginLeft: SW(5),
    marginBottom: SH(20),
    marginTop: SH(60),
    paddingBottom: SH(20),
    shadowColor: Colors.indigo_color,
    fontFamily: 'DMSans-Medium',
    paddingHorizontal: SW(15),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  testalignwhite: {
    fontFamily: Fonts.Metropolis_Medium,
    color: Colors.white_text_color,
    fontWeight: '600',
    textAlign: 'center',
    fontSize: SF(11),
  },
  usertextstyle: {
    fontSize: Platform.OS === 'ios' ? 14 : 16,
    paddingTop: Platform.OS === 'ios' ? 5 : 0,
    fontFamily: Fonts.Metropolis_Medium,
    color: Colors.white_text_color,
    textAlign: 'center',
    fontWeight: '800'
  },
  setboxtopimage: {
    height: SH(60),
    width: SW(60),
    borderRadius: SW(100),
  },
  setviewspacetext: {
    marginTop: SH(30),
  },
  flextocenterimage: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SH(-60),
  },
  digittextstyleline: {
    textDecorationLine: 'line-through',
    color: Colors.yellow_color
  },
  marginrightset: {
    marginRight: SW(3),
  },
  flatelistGrid: {
    paddingHorizontal: SW(15),
  }
});
