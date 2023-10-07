import { SF, SW, SH, Fonts, } from '../../utils';
import { StyleSheet } from 'react-native';

export default AccountTabStyle = (Colors) => StyleSheet.create({

  contentContainerStyle: {
    width: '100%',
    height: 'auto',
  },
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.bgwhite,
  },
  minviewsigninscreen: {
    width: '100%',
    paddingHorizontal: '5%',
    marginTop: SH(20),
  },

  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  useraccountwhitebox: {
    width: '100%',
    marginTop: SH(30),
    borderRadius: SW(20),
    paddingTop: SH(16),
    paddingBottom: SH(16),
    paddingLeft: SW(30),
    backgroundColor: Colors.anti_flash_white_color,
    shadowColor: Colors.lavender_blush_color,
    shadowOffset: {
      width: SW(345),
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 0,
  },
  flexrowtwxtspace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: '2%'
  },
  persnaltext: {
    fontSize: SF(17),
    fontWeight: '700',
    color: Colors.black_text_color,
    fontFamily: Fonts.Metropolis_Medium,
  },
  edittextset: {
    fontSize: SF(17),
    fontWeight: '600',
    color: Colors.theme_background,
    fontFamily: Fonts.Metropolis_Medium,
  },
  imagesetus: {
    height: SH(90),
    width: SW(90),
    marginRight: SW(15),
  },
  fleximageandtext: {
    flexDirection: 'row',
  },
  sumanyatextset: {
    fontSize: SF(17),
    fontWeight: '600',
    color: Colors.black_text_color,
    fontFamily: Fonts.Metropolis_Medium,
  },
  setgimailtext: {
    fontSize: SF(14),
    fontWeight: '600',
    color: Colors.black_text_color,
    opacity: 0.5,
    fontFamily: Fonts.Metropolis_Medium,
    borderBottomWidth: 1,
    borderBottomColor: Colors.black_text_color,
    paddingBottom: 8,
  },
  setgimailtextwo: {
    fontSize: SF(15),
    fontWeight: '600',
    color: Colors.black_text_color,
    opacity: 0.5,
    paddingTop: SH(5),
    fontFamily: Fonts.Metropolis_Medium,
    borderBottomWidth: SW(1),
    borderBottomColor: Colors.black_text_color,
    paddingBottom: SH(8),
    marginBottom: SH(6),
  },
  addreshtext: {
    fontSize: SF(14),
    fontWeight: '600',
    color: Colors.black_text_color,
    opacity: 0.5,
    paddingTop: SH(3),
    fontFamily: Fonts.Metropolis_Medium,
  },
  setviewwidth: {
    width: '53%',
    paddingTop: SH(10),
  },
  setbgcolorwhite: {
    backgroundColor: Colors.anti_flash_white_color,
    width: '22%',
    marginRight: SW(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SH(30),
    paddingVertical: SH(10),
    borderRadius: SW(13),
  },
  flexrowsettile: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  bookmarktextstyle: {
    fontSize: SF(9),
    paddingTop: SH(4),
    fontWeight: '600',
    color: Colors.black_text_color,
    fontFamily: Fonts.Metropolis_Medium,
  },
  flexrowsetbgcolor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: SW(15),
    marginBottom: SH(20),
  },
  setbgcolordata: {
    backgroundColor: Colors.bgwhite,
    borderRadius: SW(20),
    height: SH(50),
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    paddingRight: SW(40),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SH(15),
  },
  flexrowset: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: '5%',
    paddingRight: SW(40),
  },
  usertextstyle: {
    fontSize: SF(18),
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontWeight: '700',
    marginRight: SW(10)
  },
  fourtextminview: {
    marginVertical: SW(30),
  },
  sendfeedbacktext: {
    fontSize: SF(18),
    color: Colors.black_text_color,
    fontFamily: Fonts.Metropolis_Medium,
    fontWeight: '600',
    paddingBottom: SH(13),
  },
  setbgwhiteabout: {
    backgroundColor: Colors.bgwhite,
    width: '35%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: SW(9),
    marginBottom: SH(30),
    borderRadius: SW(100),
  },
  abouttextstyle: {
    fontSize: SF(17),
    color: Colors.black_text_color,
    fontFamily: Fonts.Metropolis_Medium,
    fontWeight: '600',
    marginLeft: SW(10),
  },
  updatebutton: {
    backgroundColor: Colors.theme_background,
    borderRadius: SW(100),
  },
  textstyleupdate: {
    color: Colors.white_text_color,
  },
  setbuttonstyleview: {
    // marginTop: SH(20),
    marginBottom: SH(20),
  },
  logoutStyel: {
    width: SW(100)
  },
  centerBtn: {
    justifyContent: 'center'
  },
  successtyle: {
    width: SW(200),
    height: SH(150),
    alignSelf: 'center'
  },
  setbgcolordata: {
    backgroundColor: Colors.anti_flash_white_color,
    borderRadius: SW(20),
    height: SH(50),
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    paddingRight: SW(40),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SH(15),
  },
  usertextstyle: {
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
    fontWeight: '700',
    marginRight: SW(10),
    color: Colors.theme_background
  },
});
