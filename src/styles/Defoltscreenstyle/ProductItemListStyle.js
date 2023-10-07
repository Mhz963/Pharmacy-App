import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';

export default ProductItemListStyle = (Colors) => StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    height: 'auto'
  },
  minstyleviewphotograpgy: {
    height: '100%',
    width: '100%',
  },
  bgcolorset: {
    backgroundColor: Colors.bgwhite
  },
  minviewsigninscreen: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: SW(5)
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  pharamacyimagestyle: {
    width: SW(100),
    height: SH(80),
  },
  bgwhiteboxminviewWrap: {
    shadowColor: Colors.chinese_black,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,
    backgroundColor: Colors.bgwhite,
    borderRadius: SW(10),
    marginVertical: SH(5),
    width: '46%',
    marginHorizontal: '2%'
  },
  bgwhiteboxminview: {
    color: Colors.black_text_color,
    paddingBottom: SH(35),
    flex: 1,
  },
  ListItemHertWrap: {
    position: 'absolute',
    top: SH(3),
    right: SW(5)
  },

  setimageviewstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  textstylesimple: {
    paddingRight: SW(20),
    fontWeight: '700',
    fontSize: SF(16),
    paddingLeft: SW(15),
    paddingTop: SH(10),
    marginTop: SH(10),
  },
  textstylesimpletwo: {
    color: Colors.black_text_color,
    paddingRight: SW(20),
    fontSize: SF(17),
    paddingLeft: SW(15),
  },
  setplusbgcolorset: {
    backgroundColor: Colors.theme_background,
    width: SW(30),
    height: SH(30),
    borderTopLeftRadius: SW(10),
    borderBottomRightRadius: SW(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  justicenterflexrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderStyle: 'dashed',
    width: '100%',
  },
  setflexstadr: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: SW(13),
  },
  setratingtextstyle: {
    fontSize: SF(16),
    fontFamily: Fonts.Metropolis_Medium,
    fontWeight: '700',
    marginLeft: SW(5),
    color: Colors.theme_background
  },
  setherticon: {
    position: 'absolute',
    top: SH(5),
    right: SW(5),
  },
  HeartIconLike: {
    position: 'absolute',
    right: SW(5),
    top: SH(3)
  },
  settextcolorcenterlist: {
    paddingLeft: SW(15),
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(13),
    color: Colors.black_text_color
  },

  textProductItemListStylesimple: {
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(13),
    color: Colors.theme_background,
    paddingLeft: SW(15),
  }




});
