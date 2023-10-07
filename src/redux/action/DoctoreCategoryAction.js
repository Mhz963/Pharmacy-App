import { DOCTOREDATA_CATEGORY } from "../actiontypes/DoctoreCategoryActionTypes";

export const get_doctore_category_action = (datacategory) => dispatch => {
      dispatch({ type: DOCTOREDATA_CATEGORY, doctoreCategory: datacategory });
}

