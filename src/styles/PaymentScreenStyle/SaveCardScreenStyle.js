import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors, } from '../../utils';

export default SaveCardScreenStyle = (Colors) => StyleSheet.create({

  container: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.sp_Theme,
  },
  smaili: {
    width: SH(110),
    height: SH(110),
  },
  setstyleinputtext: {
    paddingHorizontal: SW(15),
    borderRadius: SW(7),
    paddingVertical: SH(5),
  },
  setstyleinputtexttwo: {
    paddingHorizontal: SW(15),
    borderRadius: SW(7),
    paddingVertical: SW(5),
    width: '48%',
    marginRight: SW(15),
    marginTop: SH(18),
  },
  minviewsigninscreen: {
    marginHorizontal: '5%',
  },
  inputstyle: {
    padding: 0,
    color: Colors.black_text_color,
    width: SW(200),
    fontFamily: Fonts.Poppins_Medium,
  },

  textstyle: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
  },
  flexrowsetcemera: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flexrowsetinput: {
    flexDirection: 'row',
  },
  setbuttonstyle: {
    paddingHorizontal: SW(15),
  },
  setwidthimage: {
    height: SH(210),
    marginTop: SH(10),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  creditcard: {
    height: SH(210),
    width: SW(420),
  },
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    marginBottom: SH(30),
    paddingTop: SH(10),
    justifyContent: 'center',
    height: '100%'
  },
  setbuttonstylesavecard: {
    backgroundColor: Colors.theme_background,
    borderRadius: SW(100),
  },
  setbuttontextstyle: {
    color: Colors.white_text_color,
  }
});