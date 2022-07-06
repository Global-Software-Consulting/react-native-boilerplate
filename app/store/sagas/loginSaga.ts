/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import * as loadingAction from 'app/store/slice/loadingSlice';
import * as loginActions from 'app/store/slice/userSlice';

// Our worker Saga that logins the user
export default function* loginAsync() {
    yield put(loadingAction.enableLoader());

    //how to call api
    //const response = yield call(loginUser, action.username, action.password);
    //mock response
    const response = { success: true, data: { id: 1 }, message: 'Success' };

    if (response.success) {
        yield put(loginActions.onLogin(response.data));
        yield put(loadingAction.disableLoader());

        // no need to call navigate as this is handled by redux store with SwitchNavigator
        //yield call(navigationActions.navigateToHome);
    } else {
        yield put(loadingAction.disableLoader());
    }
}
