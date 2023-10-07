import { StyleSheet, } from 'react-native';
import { SH, Fonts, Colors, SW, SF } from '../../utils';

export default TrackOrderScreen = (Colors) => StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    height: 'auto'
  },
  minstyleviewphotograpgy: {
    justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.bgwhite
  },
  bgcolorset: {
    backgroundColor: Colors.bg_screen
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
  trackorderviewwhite: {
    backgroundColor: Colors.anti_flash_white_color,
    marginTop: SH(10),
    borderRadius: SW(17),
    padding: SW(10)
  },
  imagesetus: {
    height: SH(100),
    width: SW(100),
  },
  setimagewisdth: {
    width: '30%',
    marginRight: SW(20),
  },
  setviewwoidth70: {
    width: '60%',
  },
  settextcolor: {
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(17),
    lineHeight: SH(20),
    color: Colors.theme_background
  },
  setminviewflex: {
    flexDirection: 'row',
  },
  settextcolortwo: {
    borderTopWidth: 1,
    borderTopColor: Colors.LighGrey,
    borderStyle: 'dashed',
    paddingTop: SH(5),
    marginTop: SH(10),
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(15),
    lineHeight: SH(20),
  },
  settextcolorthree: {
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(15),
    lineHeight: SH(20),
    paddingTop: SH(7),
  },
  trackorderscreenset: {
    backgroundColor: Colors.bgwhite,
    marginTop: SH(20),
    borderRadius: SW(13),
    padding: SW(10),
    paddingBottom: SH(45),
    flexDirection: 'row',
  },
  dotstyle: {
    width: SW(15),
    height: SW(15),
    borderRadius: SW(100),
    backgroundColor: Colors.theme_background
  },
  setline: {
    width: SW(3),
    height: SH(70),
    borderRightWidth: SW(2),
    borderStyle: 'dashed',
    position: 'relative',
    left: SW(6),
    borderColor: Colors.theme_background
  },
  setlinetwo: {
    width: SW(3),
    height: SH(70),
    borderRightWidth: SW(2),
    borderStyle: 'dashed',
    border_color: Colors.LighGrey,
    position: 'relative',
    left: SW(6),
  },
  dotviewmin: {
    marginRight: SW(20),
    paddingTop: SH(17),
  },
  topspaceminview: {
    position: 'relative',
    top: SH(40),
  },
  topspaceminviewtwo: {
    position: 'relative',
    top: SH(80),
  },
  topspaceminviewthree: {
    position: 'relative',
    top: SH(110),
    width: '90%',
  },
  dotstyletwo: {
    width: SW(15),
    height: SH(15),
    borderWidth: SW(2),
    border_color: Colors.LighGrey,
    borderRadius: SW(100),
  }

});
