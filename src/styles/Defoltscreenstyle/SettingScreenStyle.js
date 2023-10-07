import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors, } from '../../utils';

export default SettingScreenStyle = (Colors) => StyleSheet.create({

  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.bgwhite
  },
  minviewsigninscreen: {
    width: '90%',
    height: '100%',
    marginHorizontal: '5%',
    paddingBottom: SH(30),
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  settingtext: {
    color: Colors.black_text_color,
    fontWeight: '700',
    fontSize: SF(21),
    paddingBottom: SH(20),
    borderBottomWidth: SW(0.6),
    borderBottomColor: Colors.lightgray_color,
    fontFamily: Fonts.Metropolis_Medium,
  },
  addatextstyle: {
    color: Colors.black_text_color,
    fontWeight: '600',
    fontSize: SF(18),
    fontFamily: Fonts.Metropolis_Medium,
  },
  paregraphtext: {
    color: Colors.black_text_color,
    fontWeight: '600',
    fontSize: SF(15),
    opacity: 0.7,
    fontFamily: Fonts.Metropolis_Medium,
  },
  textminview: {
    paddingVertical: SH(15),
    borderBottomWidth: SW(0.6),
    borderBottomColor: Colors.lightgray_color,
  }
});
