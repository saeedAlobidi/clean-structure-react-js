import { combineReducers } from "redux";
import employessSlice from "./employessSlice";
import userSlice from "./userSlice ";

export default combineReducers({
    employessSlice: employessSlice,
    userSlice: userSlice,

});
