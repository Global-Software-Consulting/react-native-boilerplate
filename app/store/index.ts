import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducers from 'app/store/slice';
import sagas from 'app/store/sagas';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
const config = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['loading'],
    debug: true, //to get useful logging
};
import { persistStore, persistReducer } from 'redux-persist';
const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

if (__DEV__) {
    middleware.push(createLogger());
}

const reducers = persistReducer(config, rootReducers);
const enhancers = [...middleware];
const persistConfig: any = { enhancers };

export const store = configureStore({
    reducer: reducers,
    middleware: enhancers,
});

sagaMiddleware.run(sagas);
export const persistor = persistStore(store, persistConfig);
