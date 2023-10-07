
import { StyleSheet, Platform } from 'react-native';
import { SF, SH, SW, Fonts, Colors, } from '../../utils';

export default HometabStyle = (Colors) => StyleSheet.create({

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
  flexhomeimgandtext: {
    flexDirection: 'row',
    height: SH(50),
    alignItems: 'center',
  },
  minheaderflexview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: SW(10),
  },
  homeimagstyleusericon: {
    marginRight: SW(5),
  },
  homeimagstyle: {
    width: SW(25),
    height: SH(25),
    marginRight: SW(10),
  },
  hometext: {
    fontSize: SF(15),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.theme_background
  },
  address_text_color: {
    fontSize: SF(12),
    color: Colors.philippine_silver_color,
    fontFamily: Fonts.Poppins_Medium,
    marginTop: SH(-5),
    color: Colors.theme_background
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
    marginHorizontal: '5%',
    width: '74%',
    height: Platform.OS === 'ios' ? 50 : 50,
  },
  setinputtext: {
    fontSize: SF(16),
    fontFamily: Fonts.Roboto_Medium,
  },
  flexinputstyle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.bgwhite,
    marginTop: SH(10),
  },
  seticonborder: {
    borderWidth: SW(1),
    padding: SW(12),
    border_color: Colors.border_color,
    borderRadius: SW(13)
  },
  placeholder: {
    height: SH(200),
    margin: SW(50),
    backgroundColor: Colors.bggray,
  },
  stickyComponent: {
    height: SH(30),
    backgroundColor: Colors.bg_red,
  },
  searchBarContainer: {
    backgroundColor: Colors.bg_red,
  },
  header: {
    backgroundColor: Colors.eerie_black_color,
    width: '100%',
    zIndex: 1,
  },
  searcjtextcolorstyle: {
    color: Colors.search_text_color,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(16),
    marginLeft: SW(15),
  },

  setbgcolorviewtime: {
    marginRight: SW(15),
    marginBottom: SH(20),
    marginTop: SH(10),
    borderRadius: SW(10),
    width: SW(180),
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
    overflow: 'hidden'
  },
  flexrowsecenterimage: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: SH(5),
  },
  whiteboximage: {
    marginTop: SH(20),
    width: '100%',
    height: SH(120),
  },
  setnormatextstyle: {
    fontSize: SF(16),
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: SH(18),
    paddingLeft: SW(15),
    color: Colors.theme_background
  },
  flexrowjuctycenter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: SW(15),
    paddingTop: SH(5)
  },
  flexrowsettext: {
    flexDirection: 'row',
    paddingHorizontal: SW(15),
    paddingBottom: SH(2),
  },
  settextprice: {
    fontSize: SF(17),
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: SH(21),
    marginRight: SW(10),
    color: Colors.theme_background
  },
  settextpricetwo: {
    fontSize: SF(14),
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: SH(21),
    fontWeight: '700',
    marginRight: SW(10),
    color: Colors.black_text_color,
    textDecorationLine: 'line-through',
    textDecorationColor: Colors.text_red,
  },
  dealtextset: {
    fontSize: SF(13),
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: SH(21),
    marginRight: 10,
    color: Colors.black_text_color,
  },
  timetextset: {
    fontSize: SF(16),
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: SH(21),
    marginRight: SW(10),
    fontWeight: '700',
    color: Colors.black_text_color,
  },
  flexrocenterjusty: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingTop: SH(8),
    paddingBottom: SH(8),
  },
  addbutttonwidth: {
    width: '85%',
  },

  setdescounrtextstyle: {
    color: Colors.white_text_color,
    fontSize: SF(12),
    fontFamily: Fonts.Metropolis_Medium,
  },
  outoftextset: {
    color: Colors.text_red,
    fontSize: SF(18),
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    top: SH(70),
  },
  minbgviewset: {
    marginRight: SH(20),
    marginBottom: SH(20),
    backgroundColor: Colors.bgwhite,
    borderRadius: SW(10),
    padding: SW(10),
    width: SW(180),
    marginLeft: SH(2),
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
    overflow: 'hidden',
    marginRight: SW(15),
    borderRadius: SW(7),
  },
  imagecengter: {
    width: '100%',
    marginTop: SH(12)
  },
  whiteboximagetwosettwo: {
    width: '100%',
    height: SH(70),
    borderRadius: SW(7),
  },

  settextcolorcenter: {
    fontFamily: Fonts.Metropolis_Medium,
    color: Colors.theme_background,
    paddingTop: SH(2),
    fontWeight: '700',
    fontSize: SF(16),
  },
  settextcolorcenterthree: {
    fontFamily: Fonts.Metropolis_Medium,
    paddingTop: SH(3),
    fontSize: SF(13),
    color: Colors.black_text_color
  },
  flexrowseticon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: SH(5),
  },
  flexrowseticon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: SH(5),
  },
  settextpricebold: {
    fontSize: SF(17),
    fontFamily: Fonts.Metropolis_Medium,
    fontWeight: '700',
    color: Colors.theme_background
  },
  seticonbgcolorview: {
    height: SH(30),
    width: SW(30),
    borderRadius: SW(7),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settextinbgcolor: {
    backgroundColor: Colors.theme_background,
    position: 'absolute',
    top: 0,
    paddingHorizontal: SW(20),
    height: SH(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: SW(13),
    borderTopLeftRadius: SW(13),
  },
  setdescounrtextstyle: {
    color: Colors.white_text_color,
    fontSize: SF(14),
    fontFamily: Fonts.Metropolis_Medium,
  },
  populaitemnearby: {
    width: SW(300),
    minHeight: SH(125),
    flexDirection: 'row',
    marginBottom: SH(5),
    padding: SW(5),
    marginTop: SH(2),
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
    overflow: 'hidden',
    marginRight: SW(15),
    borderRadius: SW(7),
  },
  flexrowtextandimage: {
    flexDirection: 'row',
    position: 'relative'
  },
  setplusicon: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  setimagewidthsevnty: {
    width: '40%',
  },
  whiteboximagetwoset: {
    width: SW(100),
    height: SH(100),
    borderRadius: SW(7),
  },
  setwidthalltext: {
    width: '60%',
    // paddingRight:10,
  },
  settextcolorcenterthree: {
    fontFamily: Fonts.Metropolis_Medium,
    paddingTop: SH(3),
    fontSize: SF(15),
  },
  flexstarticon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    alignItems: 'center',
  },
  ratingtextnumber: {
    fontFamily: Fonts.Metropolis_Medium,
    paddingTop: SW(3),
    fontSize: SF(16),
    marginLeft: SW(7),
  },
  flexrowsetrating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  dicscounttextflex: {
    flexDirection: 'row',
  },

  flexcenterviewTWO: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  widtsetnew: {
    width: SW(77),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagecenterstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: SW(100),
  },
  textsetfood: {
    fontSize: SF(11),
    color: Colors.black_text_color,
    fontFamily: Fonts.Roboto_Medium,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: SH(4),
  },
  settopcategoriesnine: {
    fontSize: SF(21),
    fontWeight: '700',
    color: Colors.theme_background,
    paddingLeft: SW(20),
    paddingBottom: SH(20),
  },

  settopmargin: {
    marginTop: SH(30),
    backgroundColor: Colors.bgwhite,
    overflow: 'hidden',
  },
  settopcategories: {
    fontSize: SF(21),
    fontWeight: '700',
    color: Colors.theme_background,
    paddingLeft: SW(20),
    paddingBottom: SH(6),
  },
  settopcategoriestwo: {
    fontSize: SF(21),
    fontWeight: '700',
    color: Colors.theme_background,
    paddingLeft: SW(15),
    paddingBottom: SH(15),
  },
  setflex: {
    overflow: 'hidden'
  },
  HeartIconLike: {
    position: 'absolute',
    right: SW(5),
    top: SH(3)
  },
  settextcolorcenterthreetow: {
    paddingLeft: SW(15),
    color: Colors.black_text_color,
    fontSize: SF(13)
  },
  settextcolorcentertwo: {
    fontFamily: Fonts.Metropolis_Medium,
    paddingTop: SH(3),
    fontSize: SF(13),
    color: Colors.black_text_color
  },
  homebtnadd: {
    height: SH(30)
  },
  minviewfunction: {
    borderRadius: SW(5),
    width: '100%',
    marginTop: SH(30),
  },
  paginationContainer: {
    marginTop: SH(-10),
  },
  linearGradient: {
    borderRadius: SW(13),
    height: SH(140),
  },
  flexrowimagandtext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  textContainer: {
    fontSize: SF(23),
    fontFamily: Fonts.Metropolis_Medium,
    position: 'absolute',
    width: '100%',
    fontWeight: '700',
    paddingHorizontal: SW(15),
    paddingTop: SH(10),
    color: Colors.white_text_color,
  },
  textContainertwo: {
    fontSize: SF(15),
    fontFamily: Fonts.Nuntion_Italic,
    position: 'absolute',
    width: '100%',
    paddingHorizontal: SW(15),
    paddingTop: SH(40),
    color: Colors.white_text_color,
  },
  textbottomparegraph: {
    fontSize: SF(13),
    fontFamily: Fonts.Metropolis_Medium,
    position: 'absolute',
    width: '80%',
    lineHeight: SH(18),
    paddingTop: SH(90),
    paddingHorizontal: SW(15),
    color: Colors.white_text_color,
  },
  textbottomparegraphTWO: {
    fontSize: SF(11),
    fontFamily: Fonts.Metropolis_Medium,
    position: 'absolute',
    width: '100%',
    textAlign: 'right',
    fontWeight: '700',
    lineHeight: SH(18),
    paddingTop: SH(100),
    paddingHorizontal: SW(15),
    marginTop: SH(10),
    color: Colors.white_text_color,
  },
  imagecenyer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%'
  },
  imagsetstyle: {
    width: SW(90),
    height: SH(90),
    marginTop: SH(10),
    borderRadius: SW(13),
    marginRight: SW(12),
  },
  imagsetstylefoodyitemdata: {
    width: SW(50),
    height: SW(50),
    borderRadius: SW(100),
  },
  categoryContainer: {
    paddingHorizontal: SW(10),
  },
  addBtnStyle: {
    backgroundColor: Colors.theme_background,
    alignItems: 'center',
    borderRadius: SW(100),
    paddingVertical: SH(5)
  },
  textBtnStyle: {
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(17),
    color: Colors.white_text_color
  },
  dealsContainer: {
    paddingLeft: SW(20),
    paddingRight: SW(10)
  },
  setdotactive: {
    width: SW(17),
    height: SW(17),
    borderRadius: SW(100),
  },
  paginationDot: {
    width: SW(12),
    height: SW(12),
    borderRadius: SW(100),
    marginHorizontal: SW(-4),
  },

});
