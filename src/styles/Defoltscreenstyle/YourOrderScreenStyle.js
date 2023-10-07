import { StyleSheet, } from 'react-native';
import { SF, SW, SH, Fonts, Colors } from '../../utils';


export default YourOrderScreenStyle = (Colors) => StyleSheet.create({
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
  bgcolorset: {
    backgroundColor: Colors.bg_screen
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
    color: Colors.theme_background,
    fontWeight: '700',
    fontSize: SF(21),
    fontFamily: Fonts.Metropolis_Medium,
  },
  yoreorderstylebox: {
    backgroundColor: Colors.bgwhite,
    color: Colors.black_text_color,
    width: '97%',
    borderRadius: SW(10),
    shadowColor: Colors.indigo_color,
    fontFamily: 'DMSans-Medium',
    paddingTop: SH(20),
    marginLeft: SW(5),
    marginBottom: SH(20),
    marginRight: SW(2),
    paddingBottom: SH(20),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  imagesetus: {
    height: SH(50),
    width: SW(50),
    borderRadius: SW(5),
    marginRight: SW(10),
  },
  vadapavtextstyeleset: {
    color: Colors.beer_color,
    fontSize: SF(14),
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
  },
  addreshrtext: {
    color: Colors.gray_text_color,
    fontSize: SF(13),
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
  },
  flexrowsettext: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  flexminviewset: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: SW(12),
    paddingRight: SW(15),
  },
  priceflextext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '79%'
  },
  borderbottomview: {
    borderBottomColor: Colors.LighGrey,
    borderStyle: 'dashed',
    borderBottomWidth: SW(1),
    paddingBottom: SH(20),
    marginBottom: SH(13),
  },
  borderbottomviewtwo: {
    borderBottomColor: Colors.LighGrey,
    borderStyle: 'dashed',
    borderBottomWidth: SW(1),
    paddingBottom: SW(7),
  },
  setlistdataitems: {
    paddingLeft: SW(15),
    paddingBottom: SH(15),
  },
  setitemstext: {
    color: Colors.gray_text_color,
    fontSize: SF(14),
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
  },
  blacktitle: {
    color: Colors.black_text_color,
    fontSize: SF(14),
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
  },
  setwidth70: {
    width: '70%'
  },
  rejectedtextstyle: {
    fontSize: SF(17),
    fontWeight: '700',
    color: Colors.green_color,
    fontFamily: Fonts.Metropolis_Medium,
    paddingLeft: SW(10),
  },
  rejectedtextRedstyle: {
    fontSize: SF(17),
    fontWeight: '700',
    color: Colors.text_red,
    fontFamily: Fonts.Metropolis_Medium,
    paddingLeft: SW(10),
  },
  rigthdeliveredicon: {
    color: Colors.green_color,
  },
  setflexitemview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexrowsettextrejected: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: SW(15),
    paddingLeft: SW(5),
    paddingTop: SH(18),
  },
  paddingtopset: {
    paddingTop: SH(20),
  },
  flexreowdilevry: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: SW(10),
  },
  yourorderdata: {
    height: SH(50),
    width: SW(50),
    borderRadius: SW(5),
    marginRight: SW(10),
  },
});
