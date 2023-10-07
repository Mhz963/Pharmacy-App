import { StyleSheet } from 'react-native';
import { SH, SW, SF, Fonts, Colors } from '../../utils';

export default SearchPopularMedicineStyle = (Colors) => StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    height: 'auto'
  },
  minstyleviewphotograpgy: {
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.bgwhite
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
    padding: 0,
    paddingLeft: SW(10),
    width: SW(220),
  },
  seticonborder: {
    padding: SW(12),
    backgroundColor: Colors.white_text_color,
    borderRadius: SW(13)
  },
  setbgcolorred: {
    height: SH(200),
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: Colors.theme_background
  },
  setbgcolorviewmin: {
    backgroundColor: Colors.white_text_color,
    borderTopLeftRadius: SW(20),
    borderTopRightRadius: SW(20),
    position: 'relative',
    top: SH(-70),
    marginBottom: SW(20),
    paddingTop: SH(30),
  },
  textstylesearches: {
    fontSize: SF(20),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
    fontWeight: '700',
    paddingBottom: SH(10),
  },
  popularmedicine: {
    fontSize: SF(20),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.charcol_color,
    fontWeight: '700',
    paddingLeft: SW(20),
    paddingTop: SH(20),
  },
  flexrowsetsearchicon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  settextdatapizz: {
    fontSize: SF(16),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.gray_html_color,
    fontWeight: '600',
    marginLeft: SW(7),
  },
  pleseentername: {
    fontSize: SF(19),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: SH(5),
  },
  toptospace: {
    marginTop: SH(25),
  },
  flexcenterviewTWO: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  widtsetnew: {
    width: SW(80),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SW(10),
    marginTop: SH(17),
  },
  imagecenterstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: SW(100),
  },
  textsetfood: {
    fontSize: SF(11),
    color: Colors.gray_text_color,
    fontFamily: Fonts.Roboto_Medium,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: SH(4),
  },
  setflex: {
    paddingLeft: SW(10),
  },
  imagsetstyle: {
    width: SW(60),
    height: SW(60),
    borderRadius: SW(100)
  },
  setwhiteboxnodatafound: {
    height: SH(50),
    borderRadius: SW(7),
    backgroundColor: Colors.bgwhite,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: SW(5),
    width: '74%',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 25,
    elevation: Platform.OS === 'ios' ? 0 : 2,
  },
  bgcolorsetvikewstyle: {
    paddingLeft: SW(20),
  },
  searchtextlist: {
    paddingHorizontal: SH(20),
    flexDirection: 'row',
    marginTop: SH(20)
  },
  imagsetstylefredrice: {
    height: SH(50),
    width: SW(50),
    borderRadius: SW(100),
    marginRight: SW(20),
  },
  textboldstyle: {
    fontSize: SF(15),
    color: Colors.theme_background,
    fontFamily: Fonts.Roboto_Medium,
  },
  textboldstyletwo: {
    fontSize: SF(15),
    color: Colors.LighGrey,
    fontFamily: Fonts.Metropolis_Regular,
  }
});
