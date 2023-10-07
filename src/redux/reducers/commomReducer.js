import { COLOR_PICKER_SET,PRICE_SYMBOL_TYPE} from "../actiontypes/CommonTypes";
const initialState = {
  colorrdata:[],
  pricesymboldata:''
};
export default function commomReducer(state = initialState, action) {
  // console.log('action434343434',action.type);
  // console.log('type645454554545',action)
  switch (action.type) {
    case COLOR_PICKER_SET:
      return {
        ...state,
        colorrdata: action.colorrdata,
      };
      case PRICE_SYMBOL_TYPE :
        return {
          ...state,
          pricesymboldata: action.pricesymboldata,
        };
    default: {
      return state;
    }
  }
}