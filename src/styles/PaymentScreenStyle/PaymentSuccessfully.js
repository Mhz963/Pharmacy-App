import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors, Strings, heightPercent, widthPercent } from '../../utils';

export default PaymentSuccessfully = (Colors) => StyleSheet.create({

  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.sp_Theme,
  },
  contentContainerStyle: {
    width: '100%',
    height: 'auto'
  },

  minviewsigninscreen: {
    width: '90%',
    marginHorizontal: '5%',
    marginTop: SH(-30),
  },
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
    backgroundColor: Colors.bgwhite,
  },
  paymentsuccesfullimg: {
    width: SW(200),
    height: SH(200),
  },
  imagecebter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textcenterpayment: {
    textAlign: 'center',
    fontSize: SF(25),
    color: Colors.green,
    lineHeight: SH(30),
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
  },
  textcenterpaymenttwo: {
    textAlign: 'center',
    fontSize: SF(16),
    paddingHorizontal: SW(5),
    lineHeight: SH(20),
    color: Colors.gray_text_color,
    borderBottomColor: Colors.gray_text_color,
    borderBottomWidth: SW(1),
    borderStyle: 'dashed',
    paddingBottom: SH(20),
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
    paddingTop: SH(20),
  },
  burgeritemname: {
    fontSize: SF(18),
    paddingLeft: SW(5),
    lineHeight: SH(20),
    color: Colors.black_text_color,
    paddingBottom: SH(20),
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
    paddingTop: SH(30),
  },
  textcenterview: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flexrowcoffitext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: SW(1),
    borderStyle: 'dashed',
    paddingBottom: SH(10),
    marginBottom: SH(10),
    borderBottomColor: Colors.gray_text_color,
  },
  flexrowcoffitexttwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: SH(10),
    marginBottom: SH(10),
  },
  totalamountpaid: {
    textAlign: 'center',
    fontSize: SF(12),
    color: Colors.gray_text_color,
    lineHeight: SH(30),
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
  },
  proicetextset: {
    textAlign: 'center',
    fontSize: SF(12),
    color: Colors.black_text_color,
    lineHeight: 30,
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
  }
});