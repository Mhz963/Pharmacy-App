import { SF, SH, SW, Fonts, Colors, Strings, widthPercent } from '../../utils';
import { StyleSheet, Dimensions, Platform } from 'react-native';

export default HelpScreenStyle = (Colors) => StyleSheet.create({

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
  },
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minviewsigninscreen: {
    width: '90%',
    height: '100%',
    marginHorizontal: '5%',
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingBottom: SH(200),
    paddingTop: SH(5),
  },
  settextinputwidth: {
    backgroundColor: Colors.bgwhite,
    borderRadius: SW(7),
    paddingBottom: SH(100),
    paddingLeft: SW(10),
    paddingRight: SW(10),
    color: Colors.gray_text_color,
    fontFamily: Fonts.Metropolis_Medium,
  },
  settextinputtext: {
    fontFamily: Fonts.Metropolis_Medium,
    color: Colors.gray_text_color,
    fontSize: SF(16),
    lineHeight: SH(20),
    marginTop: SH(20),
  },
  setbuttonstyle: {
    position: 'absolute',
    bottom: SH(10),
    width: '100%',
    paddingHorizontal: SH(20),
    paddingBottom: SH(5),
  },
  btnTextStyle: {
    color: Colors.white_text_color
  },
  inputUnderLine: {
    paddingBottom: SH(10),
    backgroundColor: Colors.bgwhite
  },
  containerStyle: {
    minHeight: SH(130),
    backgroundColor: Colors.bgwhite
  },
  centerBtn: {
    justifyContent: 'center'
  }

});
