import { SF, SW, SH, Fonts, Colors } from '../../utils';
import { StyleSheet, Dimensions } from 'react-native';

export default SearchPopularStyle = (Colors) => StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    height: 'auto'
  },
  minstyleviewphotograpgy: {
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  bgcolorset: {
    backgroundColor: Colors.bg_screen
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

  flexinputstyle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SH(50),
    marginBottom: SH(100),
    paddingHorizontal: SW(20)
  },
  flextextinput: {
    width: '80%'
  },
  setinputtext: {
    fontSize: SF(16),
    height: SH(49),
    fontFamily: Fonts.Roboto_Medium,
  },
  seticonborder: {
    paddingHorizontal: SW(15),
    backgroundColor: Colors.bgwhite,
    borderRadius: SW(13),
    height: SH(50),
    justifyContent: 'center',
    alignItems: 'center'
  },
  setbgcolorred: {
    height: SH(200),
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: Colors.theme_background
  },
  setbgcolorviewmin: {
    backgroundColor: Colors.bgwhite,
    borderTopLeftRadius: SW(20),
    borderTopRightRadius: SW(20),
    position: 'relative',
    top: SH(-40),
    paddingLeft: SW(30),
    paddingTop: SH(30),
  },
  textstylesearches: {
    fontSize: SF(20),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.charcol_color,
    fontWeight: '700',
    paddingBottom: SH(10),
  },
  flexrowsetsearchicon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  settextdatapizz: {
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.gray_html_color,
    fontWeight: '600',
    marginLeft: SW(7),
  },
  toptospace: {
    marginTop: SH(50),
  },
  setspacecomeview: {
    marginTop: SH(-80),
  },
  setbgborderview: {
    borderWidth: SW(1),
    paddingLeft: SW(8),
    borderColor: Colors.bgwhite,
    paddingRight: SW(8),
    paddingVertical: SH(6),
    borderRadius: SW(18),
    marginRight: SW(10),
    marginBottom: SH(20),
  },
  textstyleset: {
    color: Colors.white_text_color,
    fontSize: SF(16),
    fontFamily: Fonts.Metropolis_Medium,
  },
  setflex: {
    paddingHorizontal: SW(15),
  },
  bgcolorwhiteset: {
    backgroundColor: Colors.bgwhite,
    borderTopLeftRadius: SW(20),
    borderTopRightRadius: SW(20),
    position: 'relative',   
    paddingTop: SH(10),
  },
  imagsetstyle: {
    height: SW(50),
    width: SW(50),
    borderRadius: SW(100),
    marginRight: SW(20),
  },
  textboldstyle: {
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(15),
  },
  textboldstyletwo: {
    color: Colors.gray_text_color,
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(15),
  },
  deleverytextunbold: {
    color: Colors.black_text_color,
    fontWeight: '600',
    fontSize: SF(14),

  },
  deleverytextunboldtwo: {
    color: Colors.text_red,
    fontWeight: '600',
    fontSize: SF(14),
  },
  setflexviewdata: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SH(30),
    marginRight: SW(70),
  },
  setdishtext: {
    fontWeight: '600',
    fontSize: SF(15),
    fontFamily: Fonts.Metropolis_Medium,
  },
  imgofnew: {
    height: SW(50),
    width: SW(50),
    borderRadius: SW(100),
    marginRight: SW(20),
  },
  pad20: {
    paddingHorizontal: SW(20)
  },
  imagsetstylefredrice: {
    height: SH(50),
    width: SW(50),
    borderRadius: SW(100),
    marginRight: SW(20),
  },



});
