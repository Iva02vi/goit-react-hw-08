export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.selectIsRefreshing

export const selectUser = (state) => state.auth.user;

export const selectLoader = (state) => state.auth.loader;