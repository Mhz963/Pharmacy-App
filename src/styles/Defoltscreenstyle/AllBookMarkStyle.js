import { SF, SH, SW, Fonts, Colors, } from '../../utils';
import { StyleSheet, Dimensions } from 'react-native';

export default AllBookMarkStyle = (Colors) => StyleSheet.create({

  contentContainerStyle: {
    width: '100%',
    height: 'auto'
  },
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    flexDirection: 'row',
  },
  flexone: {
    flex: 2,
  },
  settingtext: {
    color: Colors.black_text_color,
    fontWeight: '600',
    fontSize: SF(20),
    marginLeft: SW(15),
    fontFamily: Fonts.Metropolis_Medium,
  },
  nothingheretext: {
    fontWeight: '600',
    paddingBottom: SH(25),
    textAlign: 'center',
    marginLeft: SW(20),
    fontSize: SF(17),
    fontFamily: Fonts.Metropolis_Medium,
  },
  nothingheretexttwo: {
    fontWeight: '600',
    paddingBottom: SH(25),
    textAlign: 'center',
    fontSize: SF(17),
    fontFamily: Fonts.Metropolis_Medium,
  },
  flexixconview: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flexixconviewtwo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SH(10),
  },
  addplacestextset: {
    textAlign: 'center',
    paddingTop: SH(20),
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: SH(10),
    marginHorizontal: SW(50),
    fontWeight: '600',
    borderBottomColor: Colors.theme_background,
    borderBottomWidth: SW(2),
    borderStyle: 'dashed',
    fontSize: SF(19),
    color: Colors.theme_background,
    fontFamily: Fonts.Metropolis_Medium,
  },
  addplacestextsettwo: {
    textAlign: 'center',
    marginTop: SH(-12),
    fontWeight: '600',
    fontSize: SF(19),
    color: Colors.black_text_color,
    fontFamily: Fonts.Metropolis_Medium,
  },
  flexiconset: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  dropdown1BtnStyle: {
    width: '100%',
    borderRadius: SW(100),
    flexDirection: 'row',
    backgroundColor: Colors.bgwhite,
    justifyContent: 'space-between'
  },
  dropdown1BtnTxtStyle: {
    textAlign: 'center',
    paddingTop: SH(20),
    fontWeight: '600',
    fontSize: SF(19),
    color: Colors.black_text_color,
    fontFamily: Fonts.Metropolis_Medium,
  },
  dropdown1DropdownStyle: { backgroundColor: Colors.bgwhite },
  dropdown1RowStyle: {
    backgroundColor: Colors.bright_gray_color,
    borderBottomColor: Colors.silver_sand_color,
  },
  dropdown1RowTxtStyle: {
    color: Colors.Blue_crayola_color,
    fontSize: SF(18),
    fontWeight: '600',
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'left',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredViewtwo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: SH(22),
    backgroundColor: Colors.gray_text_color,
    opacity: 0.9,

  },
  modalView: {
    margin: SW(20),
    backgroundColor: Colors.bgwhite,
    borderRadius: SW(20),
    width: '90%',
    padding: SW(15),
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalViewtwo: {
    margin: SW(20),
    backgroundColor: Colors.black_text_color,
    borderRadius: SW(20),
    width: '90%',
    height: SH(400),
    padding: SW(15),
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: SW(20),
    padding: SW(10),
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: Colors.rich_brilliant_lavender,
  },
  buttonClose: {
    backgroundColor: Colors.button_blue,
  },
  textStyle: {
    color: Colors.white_text_color,
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: SH(15),
    textAlign: "center"
  },
  simplestatetext: {
    color: Colors.theme_background,
    fontWeight: '600',
    opacity: 0.7,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SW(18),
    borderBottomColor: Colors.bittersweet_color,
    borderBottomWidth: SW(1.5),
    borderStyle: 'dashed',
    paddingVertical: SH(10),
  },
  simplestatetextsettwo: {
    color: Colors.white_text_color,
    fontWeight: '600',
    opacity: 0.7,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(18),
    borderStyle: 'dashed',
    paddingVertical: SH(10),
  },
  postionabolutemenu: {
    position: 'absolute',
    right: SW(20),
    width: SW(70),
    height: SW(70),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: SH(20),
    backgroundColor: Colors.black_text_color,
    borderRadius: SW(100),
  },
  menuColorsetbgcolor: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(14),
  },
  setcentericon: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  flextextrtwosimple: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
