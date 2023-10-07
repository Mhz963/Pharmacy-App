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
    width: '100%',
    height: '100%',
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
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
  },
  address_text_color: {
    fontSize: 15,
    color: Colors.address_text_color,
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
    backgroundColor: Colors.bgwhite,
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
    backgroundColor: Colors.bgwhite,
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
  bgcolorwhiteset: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 30,
    borderTopWidth: 2,
    borderTopColor: Colors.LighGrey,
    paddingTop: 30,
  },
  flexiconviewset: {
    flexDirection: 'row',
    borderTopColor: Colors.LighGrey,
    justifyContent: 'space-between',
    marginTop: 20,
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
    padding: 13,
    borderRadius: 100,
  },
  plusminusflex: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    border_color: Colors.polished_pine_color,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 17,
    paddingTop: 0,
    paddingBottom: 2,
    borderRadius: 70,
  },
  setminusdigit: {
    fontSize: 24,
    fontFamily: Fonts.Metropolis_Medium,
    color: Colors.polished_pine_color,
    fontWeight: '700',
    marginLeft: 10,
  },
  setmeximumtext: {
    fontSize: 17,
    fontFamily: Fonts.Metropolis_Medium,
    color: 'black',
    fontWeight: '700',
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
  editflexsettitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  edittextstyle: {
    fontSize: 18,
    color: 'gray',
    fontFamily: Fonts.Poppins_Medium,
    fontWeight: '700',
  },
  flexuserset: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
  },
  simpleusertext: {
    fontSize: 16,
    color: 'black',
    fontFamily: Fonts.Poppins_Medium,
    fontWeight: '600',
    marginLeft: 15,
    position: 'relative',
    top: 3,
  },
  faviroutetextview: {
    paddingTop: 20,
    borderTopColor: Colors.LighGrey,

  },
  faviroutetextviewtwo: {
    paddingTop: 20,
    borderTopColor: Colors.LighGrey,
    borderTopWidth: 1,
    width: '90%',
    marginHorizontal: '5%'
  },
  flexcenterviewTWO: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  widtsetnew: {
    width: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 20,
    marginBottom: 30,
  },
  imagecenterstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 100,
  },
  textsetfood: {
    fontSize: 11,
    color: '#707070',
    fontFamily: Fonts.Roboto_Medium,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 4,
  },
  imagsetstyle: {
    width: 65,
    height: 65,
    borderRadius: 100,
  },
  setviewleftright: {
    width: '90%',
    marginHorizontal: '5%'
  },
  setflex: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  setborderwidth: {
    width: 270,
    borderWidth: 1,
    border_color: Colors.silver_sand_color,
    marginRight: 20,
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 20,
    borderRadius: 13,
    marginTop: 20,
    marginBottom: 40,
  },
  minflexviewset: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  imageroundflkexset: {
    flexDirection: 'row',
  },
  marhinrightset: {
    marginRight: 10,
  },
  kfctextset: {
    fontWeight: '700',
    color: '#333333',
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 15,
  },
  yesterdaytext: {
    fontWeight: '600',
    color: Colors.spanish_gray_999_color,
    fontFamily: Fonts.Roboto_Regular,
    fontSize: 14,
  },
  pricetextset: {
    fontWeight: '600',
    color: Colors.Color,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 17,
    paddingTop: 10,
  },
  setviewreadmore: {
    paddingLeft: 70,
  },
  longparegraphtext: {
    fontWeight: '600',
    color: Colors.gray_text_color,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 15,
    paddingTop: 10,
  },
  imageround: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: 10,
  },
  descountbox: {
    backgroundColor: Colors.bgwhite,
    marginBottom: 30,
    marginRight: 15,
    width: 200,
    paddingBottom: 80,
    borderRadius: 15,
    marginTop: 20,
    borderWidth: 0.8,
    border_color: Colors.silver_sand_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 0,
  },
  setpositondiscounthree: {
    position: 'absolute',
    top: 30,
    left: -2,
  },
  setboxviewbgcolor: {
    backgroundColor: 'white',
    borderWidth: 1,
    border_color: Colors.silver_sand_color,
    position: 'absolute',
    top: 133,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    left: 60,
    borderRadius: 18,
  },
  freedeleverytext: {
    fontWeight: '700',
    color: '#707070',
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 15,
  },
  settwotitltext: {
    paddingTop: 25,
    paddingLeft: 15,
    paddingRight: 30,
  },
  settopspace: {
    height: 50,
    paddingTop: 10,
  },
  cappuccinotext: {
    fontSize: 19,
    fontWeight: '400',
    fontFamily: Fonts.Metropolis_Medium,
    color: '#333333',
  },
  suhaniresturant: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily: Fonts.Roboto_Regular,
    color: Colors.gray_html_color,
  },
  setviewtextflexrow: {
    paddingTop: 30,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 17,
    justifyContent: 'space-between'
  },
  textdigit: {
    color: '#333333',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: 17
  },
  textdigittwo: {
    color: Colors.beer_color,
    fontFamily: Fonts.Roboto_Regular,
    fontSize: 23,
  },
  iconbookmark: {
    position: 'relative',
    left: 10,
  },
  setboximage: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  iconcenterdf: {
    position: 'relative',
    top: 2,
  }
});
