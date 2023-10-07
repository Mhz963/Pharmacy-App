import { StyleSheet } from 'react-native';
import { SF, SH, SW, widthPercent, Fonts, Colors } from '../../utils';

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
  },
  minviewsigninscreencontent: {
    width: '90%',
    marginHorizontal: '5%',
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
  address_text_color: {
    fontSize: SF(15),
    color: Colors.address_text_color,
    fontFamily: Fonts.Poppins_Medium,
    marginTop: SH(-5),
  },
  heartimagstyle: {
    width: SW(62),
    height: SH(62),
    position: 'relative',
    left: SW(10),
  },
  flextextinput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    backgroundColor: Colors.input_bg_color,
    borderRadius: SW(13),
    width: '82%',
    marginRight: SW(14),
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
    border_color: Colors.border_color,
    borderRadius: SW(13)
  },
  bgwhiteboxminview: {
    backgroundColor: Colors.bgwhite,
    color: Colors.black_text_color,
    width: widthPercent(89),
    borderRadius: SW(10),
    marginRight: SW(10),
    marginLeft: SW(3),
    marginBottom: SH(30),
    shadowColor: Colors.indigo_color,
    fontFamily: 'DMSans-Medium',
    paddingRight: SW((15)),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  setclockandtextview: {
    backgroundColor: Colors.bgwhite,
    borderRadius: SW(100),
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: SH(20),
    padding: SW(5),
    paddingLeft: SW(7),
    paddingRight: SW(7),
    left: SW(10),
  },
  textsetstyle: {
    color: Colors.rich_black_fogra_color,
    fontSize: SF(12),
    marginLeft: SW(5),
    fontFamily: Fonts.Roboto_Regular,
  },
  positionsetimage: {
    position: 'absolute',
    top: SH(20),
    left: SW(-2),
  },
  positionsetimagetwo: {
    position: 'absolute',
    top: SH(60),
    left: SW(-2),
  },
  imagsetstyle: {
    width: widthPercent(89),
    borderRadius: SW(10),
    height: SH(160),
  },
  bgcolorwhiteset: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: SH(30),
    borderTopWidth: SW(2),
    borderTopColor: Colors.LighGrey,
    paddingTop: SH(30),
  },
  setwhiteboxview: {
    color: Colors.black_text_color,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: SW(10),
    shadowColor: Colors.indigo_color,
    fontFamily: 'DMSans-Medium',
    paddingHorizontal: SW(15),
  },
  setwhiteboxviewtwo: {
    backgroundColor: Colors.theme_background,
    color: Colors.black_text_color,
    width: '100%',
    borderRadius: SW(10),
    paddingVertical: SW(20),
    marginTop: SH(20),
    shadowColor: Colors.indigo_color,
    fontFamily: 'DMSans-Medium',
    paddingLeft: SW(5),
    paddingRight: SW(15),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  setwidthfifty: {
    width: '52%'
  },
  twxtstylewhite: {
    fontSize: SF(20),
    paddingLeft: SW(15),
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
    fontSize: 15,
    fontFamily: Fonts.Metropolis_Medium,
    color: Colors.white_text_color,
    fontWeight: '600',
    paddingTop: SH(10),
    lineHeight: SH(16),
  },
  settrestyele: {
    width: SW(130),
    height: SW(130),
    borderRadius: SW(200),
    position: 'relative',
    left: SW(10),
  },
});
