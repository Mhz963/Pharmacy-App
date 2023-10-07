import { colors, Fonts, Colors, SH, SW, SF } from '../../utils';
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    width: '100%',

  },
  bgcolorset: {
    backgroundColor: Colors.bg_screen
  },
  minviewsigninscreen: {
    width: '100%',
    height: '100%',
    marginTop: '25%',
    paddingBottom: SH(30),
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  setradetitlecenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: SW(1),
    border_color: Colors.theme_background,
    width: '70%',
    paddingVertical: SH(15),
    paddingHorizontal: SW(20),
    borderRadius: SW(17),
  },
  mincenterview: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  seemoretextstyle: {
    fontFamily: Fonts.Metropolis_Medium,
    color: Colors.theme_background,
    fontSize: SF(20),
  },
  todayattimeset: {
    color: Colors.gray_text_color,
    textAlign: 'center',
    paddingTop: SH(40),
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(17),
  },
  flexmessage: {
    flexDirection: 'row',
    marginRight: SW(20),
    paddingLeft: SW(10),
    marginLeft: SW(5),
  },
  flexmessagetwo: {
    flexDirection: 'row',
    marginRight: SW(20),
    paddingLeft: SW(10),
    marginLeft: SW(5),
    marginTop: SH(30),
  },
  lightgraybgcolor: {
    backgroundColor: Colors.cultured_color,
    padding: SW(10),
    borderRadius: SW(7),
  },
  lightgraybgcolorthree: {
    backgroundColor: Colors.cultured_color,
    padding: SW(10),
    borderTopLeftRadius: SW(7),
    borderTopRightRadius: SW(7),
  },
  lightgraybgcolorTWO: {
    backgroundColor: Colors.lotion_color,
    padding: SW(10),
    borderWidth: SW(1),
    border_color: Colors.LighGrey,
    borderTopWidth: 0,
  },
  welcometextstyle: {
    fontSize: SF(17),
    color: Colors.black_text_color,
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: SH(22),
    opacity: 0.7,
  },
  dandelion_crayola_color: {
    backgroundColor: Colors.dandelion_crayola_color,
    width: SW(40),
    height: SW(40),
    borderRadius: SW(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SW(15),
  },
  nowtextstyle: {
    flexDirection: 'row',
    paddingLeft: SW(75),
    fontSize: SF(17),
    fontFamily: Fonts.Metropolis_Medium,
  },
  settextwidthborder: {
    width: '93%'
  },
  settextwidthbordertwo: {
    width: '85%'
  },
  redtextcolor: {
    fontSize: SF(17),
    color: Colors.text_red,
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: SH(22),
    paddingTop: SH(2),
  },
  textcolorgray: {
    fontSize: SF(15),
    color: Colors.gray_text_color,
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: SH(20),
  },
  differnycolorset: {
    fontSize: SF(16),
    color: Colors.theme_background,
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: SH(20),
    paddingBottom: SH(2),
  },
  boldtextstyle: {
    fontSize: SF(18),
    color: Colors.theme_background,
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: SH(20),
    fontWeight: '700',
  },
  greencolortext: {
    fontSize: SF(17),
    color: Colors.green_color,
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: SH(22),
    paddingTop: SH(2),
  }
});
