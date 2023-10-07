import { COLOR_PICKER_SET,PRICE_SYMBOL_TYPE } from "../actiontypes/CommonTypes";

export const color_picker_set_action = (data) => dispatch => {
  // console.log("data111111",data)
      dispatch({ type: COLOR_PICKER_SET, colorrdata: data });
}

export const price_symbol_action = (data) => dispatch => {
  // console.log("data111111",data)
      dispatch({ type: PRICE_SYMBOL_TYPE, pricesymboldata: data });
}

