import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactReducer } from './contacts/contactSlice';
import storage from 'redux-persist/lib/storage';
import auth from './auth/authSlice';
import themeReducer from './theme/themeSlice';

const themePersistConfig = {
  key: 'theme',
  storage,
};
const authPersistConfigs = {
  key: 'token',
  storage,
};

export const store = configureStore({
  reducer: {
    theme: persistReducer(themePersistConfig, themeReducer),
    auth: persistReducer(authPersistConfigs, auth),
    contactsStore: contactReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
