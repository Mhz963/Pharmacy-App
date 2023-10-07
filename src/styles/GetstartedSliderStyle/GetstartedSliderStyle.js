import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors, widthPercent } from '../../utils';

export default GetstartedSliderStyle = (Colors) => StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonCircle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '3.3%'
  },
  bgcolorset: {
    backgroundColor: Colors.bg_screen
  },
  getstartedtext: {
    color: Colors.white_text_color,
    fontSize: SF(19),
    fontWeight: '700',
    textAlign: 'center',
  },
  heightsetimage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  nextbuttoncolorset: {
    color: Colors.philippine_silver_color,
  },
  textstyle: {
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(33),
    fontWeight: '800',
    lineHeight: SH(30),
    textAlign: 'center',
    color: Colors.white_text_color,
  },
  textstyletwo: {
    paddingHorizontal: SW(10),
    color: Colors.black_text_color,
    fontSize: SF(16),
    fontFamily: 'DMSans-Regular',
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    top: SH(-65),
  },
  textstyletheree: {
    paddingHorizontal: SW(10),
    color: Colors.black_text_color,
    fontSize: SF(16),
    fontFamily: 'DMSans-Regular',
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    marginTop: SH(65),
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  minviewsigninscreen: {
    width: '90%',
    marginHorizontal: '5%',
    height: '100%',
  },
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: Colors.theme_background
  },
  bgcolorsettextminview: {
    backgroundColor: Colors.ogre_odor_color,
  },
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  activebutonstyleset: {
    width: SW(9),
    height: SW(9),
    backgroundColor: Colors.lumber_color,
    borderRadius: SW(100),
  },
  dotstyleset: {
    width: SW(9),
    height: SW(9),
    backgroundColor: Colors.coral_color,
    borderRadius: SW(100),
  },
  imagsetview: {
    height: SH(90),
    width: SW(90),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.bgwhite,
    borderRadius: SW(100),
  },
  imagesetus: {
    width: SW(82),
    height: SW(82),
    borderRadius: SW(200),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bgwhite,
  },
  smallimagcenter: {
    flexDirection: 'row',
    // justifyContent: 'center',
    width: '100%',
  },
  settextstyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(0, 100%, 99.8%)',
    position: 'absolute',
    top: SH(40),
    right: SW(20),
    width: SW(50),
    height: SW(50),
    borderRadius: SW(17),
  },
  longtitlestyle: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Metropolis_Thin,
    fontSize: SF(45),
    textAlign: 'center',
    lineHeight: SH(50),
    fontWeight: '600',
  },
  longtitlestyletwo: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Metropolis_SemiBold,
    fontSize: SF(35),
    textAlign: 'center',
    lineHeight: SH(40),
    marginBottom: 20,
  },
  textcenterview: {
    flexDirection: 'row',
    position: 'absolute',
    top: SH(120),
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    alignItems: 'center'
  },
  longimage: {
    width: '100%',
    height: SH(300),
  },
  longimagetwo: {
    width: '100%',
    height: SH(300),
    marginLeft: SW(5),
  },
  flexicon: {
    flexDirection: 'row',
    position: 'relative',
    right: SW(3),
  },
  seticonpositon: {
    marginLeft: SW(30)
  },
  flexrighticonsingle: {
    position: 'relative',
    right: SW(14),
  },
  algnaitemcenterimageandtext: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  setimagviewtwo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  Colorsaligncenterview: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },

  setbgcolorviewtwoview: {
    borderRadius: SW(14),
    width: SW(40),
    height: SH(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.theme_background
  },
  bgwhite: {
    backgroundColor: Colors.bgwhite,
    width: widthPercent(86.2),
    alignSelf: 'center'
  },
  btnTextStyle: {
    color: Colors.theme_background
  }
});