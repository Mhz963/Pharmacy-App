import { SF, SW, wp, hp, widthPercent, Fonts, Colors } from '../../utils';
import { StyleSheet, Dimensions } from 'react-native';
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = 0;
const HEADER_HEIGHT = 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

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
    width: '90%',
    height: '100%',
    marginHorizontal: '5%',
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  flexhomeimgandtext: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    width: '80%'
  },
  minheaderflexview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    width: '100%',
  },
  homeimagstyle: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  hometext: {
    fontSize: 17,
    color: '#000000',
    fontFamily: Fonts.Poppins_Medium,
  },
  address_text_color: {
    fontSize: 15,
    color: Colors.philippine_silver_color,
    fontFamily: Fonts.Poppins_Medium,
    marginTop: -5,
  },
  heartimagstyle: {
    width: 62,
    height: 62,
    position: 'relative',
    left: 10,
  },
  flextextinput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    backgroundColor: Colors.input_bg_color,
    borderRadius: 13,
    width: '82%',
    marginRight: 14,
  },
  setinputtext: {
    fontSize: 16,
    fontFamily: Fonts.Roboto_Medium,
  },
  flexinputstyle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  seticonborder: {
    borderWidth: 1,
    padding: 12,
    border_color: Colors.border_color,
    borderRadius: 13
  },
  bgwhiteboxminview: {
    backgroundColor: 'white',
    color: 'black',
    width: widthPercent(89),
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 3,
    marginBottom: 30,
    shadowColor: Colors.indigo_color,
    fontFamily: 'DMSans-Medium',
    paddingRight: 15,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  setclockandtextview: {
    backgroundColor: 'white',
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    padding: 5,
    paddingLeft: 7,
    paddingRight: 7,
    left: 10,
  },
  textsetstyle: {
    color: Colors.rich_black_fogra_color,
    fontSize: 12,
    marginLeft: 5,
    fontFamily: Fonts.Roboto_Regular,
  },
  positionsetimage: {
    position: 'absolute',
    top: 20,
    left: -2,
  },
  positionsetimagetwo: {
    position: 'absolute',
    top: 60,
    left: -2,
  },
  imagsetstyle: {
    width: widthPercent(89),
    borderRadius: 10,
    height: 160,
  },
  bgcolorwhiteset: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 30,
    borderTopWidth: 2,
    borderTopColor: Colors.LighGrey,
    paddingTop: 30,
  },
  setwhiteboxview: {
    backgroundColor: Colors.begonia_color,
    color: 'black',
    width: '100%',
    flexDirection: 'row',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 20,
    marginTop: 20,
    paddingBottom: 20,
    shadowColor: Colors.indigo_color,
    fontFamily: 'DMSans-Medium',
    paddingLeft: 15,
    paddingRight: 15,
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
    fontSize: 20,
    fontFamily: Fonts.Metropolis_Medium,
    color: 'white',
    fontWeight: '700'
  },
  savingtextstyle: {
    fontSize: 12,
    fontFamily: Fonts.Metropolis_Medium,
    color: 'white',
    fontWeight: '600'
  },
  paregraphtextstyule: {
    fontSize: 15,
    fontFamily: Fonts.Metropolis_Medium,
    color: 'white',
    fontWeight: '600',
    paddingTop: 10,
    lineHeight: 16,
  },
  settrestyele: {
    width: 150,
    height: 130,
  },
  flexiconviewset: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
  },
  yourparfromance: {
    fontSize: 24,
    fontFamily: Fonts.Metropolis_Medium,
    color: Colors.polished_pine_color,
    fontWeight: '700',
    marginLeft: 10,
  },
  setviewypurparfromance: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  setflexdeigit: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'space-between',
    backgroundColor: Colors.bg_rgb_anti_flash_Color,
    padding: 16,
    borderRadius: 15,
  },
  plusminusflex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    border_color: Colors.polished_pine_color,
    paddingLeft: 7,
    paddingRight: 7,
    width: 100,
    paddingTop: 0,
    paddingBottom: 2,
    borderRadius: 70,
  },
  setminusdigit: {
    fontSize: 18,
    fontFamily: Fonts.Metropolis_Medium,
    color: Colors.polished_pine_color,
    fontWeight: '700',
  },
  setmeximumtext: {
    fontSize: 15,
    fontFamily: Fonts.Metropolis_Medium,
    color: 'black',
    fontWeight: '700',
  },
  selectactive: {
    fontSize: 17,
    fontFamily: Fonts.Metropolis_Medium,
    color: Colors.gray_text_color,
    fontWeight: '600',
  },
  topspaceset: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  setbgcolordata: {
    backgroundColor: Colors.input_bg_color,
    borderRadius: 20,
    height: 59,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  flexrowset: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: '5%',
    height: 59,
  },
  usertextstyle: {
    fontSize: 18,
    color: '#000000',
    fontFamily: Fonts.Poppins_Medium,
    fontWeight: '700',
  },
  seticonbgwhite: {
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
    height: 33,
    width: 33,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    shadowColor: Colors.indigo_color,
    fontFamily: 'DMSans-Medium',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  savechengiestextset: {
    paddingTop: 50,
    paddingBottom: 80,
  },
  setbuttonbgcolor: {
    backgroundColor: Colors.polished_pine_color,
    borderRadius: 100,
    height: 57,
  },
  textbuttonstyle: {
    color: '#FFFFFF'
  },
  iconstylesert: {
    position: 'relative',
    top: 3,
  },
});
