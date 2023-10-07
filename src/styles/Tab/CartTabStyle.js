import { StyleSheet, Platform } from 'react-native';
import { SF, SH, SW, Fonts, Colors, } from '../../utils';

export default CartTabStyle = (Colors) => StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    height: 'auto'
  },
  minstyleviewphotograpgy: {
    height: '100%',
    width: '100%',
    paddingBottom: SH(50),
    backgroundColor: Colors.bgwhite
  },
  bgcolorset: {
    backgroundColor: Colors.bgwhite
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
  checkoutboxwrap: {
    marginTop: SH(10)
  },
  heartimagstyle: {
    height: SH(160),
    width: '100%',
    borderRadius: SW(7),
  },
  setheightviewfit: {
    height: SH(200),
  },
  setwhitebox: {
    width: '100%',
    paddingBottom: SH(10),
    borderRadius: SW(20),
    marginBottom: SH(20),
    shadowColor: Colors.indigo_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 0,
  },
  cartboxwrap: {
    marginTop: SH(10),
    borderTopLeftRadius: SW(15),
    borderTopRightRadius: SW(15),
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    height: '100%'
  },
  flexicondighit: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  twoflexview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexsetviewwhitebox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: SW(20)
  },
  yourordertextset: {
    fontSize: SF(25),
    color: Colors.chinese_black,
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
    marginRight: SW(30),
  },
  twodigitset: {
    fontSize: SF(15),
    color: Colors.chinese_black,
    fontWeight: '600',
    marginLeft: SW(8),
    fontFamily: Fonts.Metropolis_Medium,
  },
  bgcolorhomeaddresh: {
    padding: SW(15),
    marginTop: SH(20),
    borderRadius: SW(12),
    backgroundColor: Colors.theme_background,
    shadowColor: '#b5b2b2',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 15,
    overflow: 'hidden',
    marginHorizontal: SW(20)
  },
  flexhomeaddresh: {
    flexDirection: 'row',
    width: '50%'
  },
  flexhomeaddreshtwo: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
  },
  minflehomeandedit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: SH(18),
  },
  minflehomeandedittwo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  satyanilayam: {
    fontSize: SF(15),
    color: Colors.white_text_color,
    fontWeight: '700',
    marginLeft: SW(8),
    fontFamily: Fonts.Metropolis_Medium,
  },
  satyanilayamtwo: {
    fontSize: SF(15),
    color: Colors.white_text_color,
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
  },
  homeaddress_text_color: {
    flexDirection: 'row',
    color: Colors.white_text_color,
    fontWeight: '600',
    marginLeft: SW(8),
    lineHeight: SH(17),
    fontSize: SF(12),
    fontFamily: Fonts.Metropolis_Medium,
  },
  editaddress_text_color: {
    fontSize: SF(15),
    color: Colors.white_text_color,
    fontWeight: '600',
    marginLeft: SW(8),
    fontFamily: Fonts.Metropolis_Medium,
  },
  setclockbgview: {
    backgroundColor: Colors.maximum_yellow_red_color,
    height: SH(35),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: SW(35),
    borderRadius: SW(5),
    marginRight: SW(10),
  },
  setimagehightwidth: {
    height: SH(50),
    width: SW(50),
    borderRadius: SW(15),
    marginRight: SW(15),
  },
  flexiconandimagetext: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  setplusminusflex: {
    flexDirection: 'row',
    borderWidth: SW(1),
    borderRadius: SW(100),
    paddingTop: SH(3),
    alignItems: 'center',
    justifyContent: 'space-between',
    width: SW(90),
    paddingBottom: SH(3),
    paddingHorizontal: SW(5),
    paddingRight: SW(5),
    borderBlockColor: Colors.theme_background
  },
  minustextstyle: {
    fontSize: SF(16),
    fontWeight: '700',
    marginLeft: SW(10),
    marginRight: SW(10),
    fontFamily: Fonts.Metropolis_Medium,
    color: Colors.theme_background
  },
  digitalsawtwext: {
    fontSize: SF(14),
    fontWeight: '700',
    marginLeft: SW(12),
    fontFamily: Fonts.Metropolis_Medium,
    color: Colors.theme_background
  },
  friedricetext: {
    fontSize: SF(12),
    color: Colors.vampire_black_color,
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
  },
  pistahouse: {
    fontSize: SF(12),
    color: Colors.vampire_black_color,
    fontWeight: '600',
    width: SW(90),
    fontFamily: Fonts.Metropolis_Medium,
  },
  flexminviewcount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: SH(5),
    paddingRight: SW(5),
    backgroundColor: Colors.bgwhite,
    shadowColor: '#b5b2b2',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,
    borderRadius: 5,
  },
  applybutton: {
    borderRadius: SW(100),
    height: SH(50),
  },
  paymentbutton: {
    backgroundColor: Colors.mandarin_color,
    borderRadius: SW(100),
    height: SH(50),
  },
  textstyle: {
    color: Colors.white_text_color,
  },
  textstylepayment: {
    color: Colors.white_text_color,
  },
  textstylepaymenttwo: {
    color: Colors.white_text_color,
    marginRight: SW(40),
  },
  setbutttonview: {
    width: '40%',
  },
  textinputandbuttonflex: {
    backgroundColor: Colors.bgwhite,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: SW(30),
    shadowColor: Colors.indigo_color,
    fontFamily: 'DMSans-Medium',
    paddingLeft: SW(17),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  containerStyle: {
    width: '60%',
  },
  inputContainerStyle: {
    backgroundColor: Colors.bgwhite
  },
  inputcarttextstyle: {
    fontSize: SF(15),
    color: Colors.old_silver_color,
    fontWeight: '700',
    width: SW(160),
    fontFamily: Fonts.Metropolis_Medium,
  },
  inputInContainerStyle: {
    backgroundColor: Colors.bgwhite
  },
  setviewlistbill: {
    color: Colors.black_text_color,
    width: '100%',
    paddingVertical: SH(10),
    borderRadius: SW(20),
    marginBottom: SH(20),
    shadowColor: Colors.indigo_color,
    fontFamily: 'DMSans-Medium',
    paddingLeft: SW(17),
    backgroundColor: Colors.bgwhite,
    shadowColor: '#b5b2b2',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 5,
    elevation: Platform.OS === 'ios' ? 1 : 15,
    overflow: 'hidden',
  },
  flexrowspacebeetveen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: SW(20),
  },
  subtotaltext: {
    color: Colors.chinese_black,
    fontSize: SF(15),
    fontWeight: '700',
    width: SW(160),
    fontFamily: Fonts.Metropolis_Medium,
  },
  digitaltext: {
    color: Colors.chinese_black,
    fontSize: SF(15),
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
  },
  digitaltextsettwo: {
    color: Colors.theme_background,
    fontSize: SF(17),
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
  },
  centerviewbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%'
  },
  flexdiractionrowbutton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SH(30),
  },
  flexdiractionrowbuttontwo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: SH(10),
  },
  positiontoarrowsset: {
    position: 'absolute',
    right: SW(30),
  },
  flotbuttonright: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: SH(60),
  },
  positionabsolutesetbutton: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.bgwhite,
    width: '100%',
    paddingBottom: 10,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 5 : 25,
    elevation: 3,
  },
  accountbutton: {
    marginBottom: SH(15),
    position: 'relative',
    top: SH(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: SW(10),
  },
  textcenyet: {
    flexDirection: 'row',
    paddingLeft: SW(20),
    width: '45%'
  },
  dolardtextset: {
    color: Colors.black_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Metropolis_Medium,
  },
  viewdetailesbilltext: {
    fontSize: SF(14),
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
    color: Colors.theme_background
  },
  setbuttonwidthview: {
    width: '50%',
  },
  cartFaltContainerStyle: {
    paddingHorizontal: SW(15),
  },
  padH20: {
    paddingHorizontal: SW(20)
  },
  centerBtn: {
    justifyContent: 'center'
  },
  successtyle: {
    width: SW(200),
    height: SH(150),
    alignSelf: 'center'
  },

});
