import { combineReducers } from 'redux';
import DoctorDataReducer from './DoctorDataReducer';
import DoctorCategoryReducer from './DoctorCategoryReducer';
import commonReducer from './commomReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['doctoreDetaile','currentColor'],
};

const rootReducers = combineReducers({
  doctorDataReducer : persistReducer(persistConfig,DoctorDataReducer),
  commonReducer: persistReducer(persistConfig, commonReducer),
  doctorCategoryReducer : persistReducer(persistConfig,DoctorCategoryReducer),
});

export default rootReducers;