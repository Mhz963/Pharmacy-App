import { SF, SH, SW, Fonts, Colors, } from '../../utils';
import { StyleSheet, } from 'react-native';

export default NotificationStyle = (Colors) => StyleSheet.create({
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
    backgroundColor: Colors.bgwhite
  },
  minviewsigninscreen: {
    width: '100%',
    height: '100%',
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  settingtext: {
    color: Colors.red,
    fontWeight: '600',
    fontSize: SW(15),
    fontFamily: Fonts.Metropolis_Medium,
  },
  settingtexttitle: {
    color: Colors.black_text_color,
    fontWeight: '700',
    fontSize: SF(21),
    paddingHorizontal: '5%',
    fontFamily: Fonts.Metropolis_Medium,
  },
  flexviewheader: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: SH(90),
  },
  imagesetus: {
    height: SH(100),
    width: SW(100),
    marginRight: SW(10),
    borderRadius: SW(10)
  },
  flexdiractionrow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cornsilk_color,
    paddingHorizontal: '5%',
    paddingVertical: SH(5),
    marginTop: SH(10),
  },
  flexdiractionrowtwo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: SH(5),
    marginTop: SH(10),
  },
  textparegraph: {
    fontSize: SF(13),
    color: Colors.black_text_color,
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: SH(19),
  },
  twonavemberscreen: {
    fontSize: SF(13),
    color: Colors.gray_text_color,
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: SH(19),
    paddingTop: SH(3),
  },
  setparegraphwidth: {
    width: '75%'
  },
  setparegraphwidthtwo: {
    width: '75%',
    borderBottomColor: Colors.lightgray_color,
    borderBottomWidth: SW(1),
    paddingBottom: SH(10),
  }
});
