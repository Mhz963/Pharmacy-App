import { DOCTOREDATA_CATEGORY} from "../action/DoctoreCategoryAction";
const initialState = {
  doctoreCategory:[]
};
export default function doctorCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case DOCTOREDATA_CATEGORY:
      return {
        ...state,
        doctoreCategory: action.doctoreCategory,
      };
    default: {
      return state;
    }
  }
}