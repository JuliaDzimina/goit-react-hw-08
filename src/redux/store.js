import { configureStore } from "@reduxjs/toolkit";
import { contactsSliceReducer } from "./contacts/slice";
import { filtersSliceReducer } from "./filters/slice";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const authPersistReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsSliceReducer),
    filter: filtersSliceReducer,
    auth: authPersistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
