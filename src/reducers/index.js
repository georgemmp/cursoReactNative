import { combineReducers } from 'redux';

import AutenticaoReducer from './AutenticacaoReducer';
import AppReducer from './AppReducer';

export default combineReducers({
    AutenticaoReducer,
    AppReducer
});
