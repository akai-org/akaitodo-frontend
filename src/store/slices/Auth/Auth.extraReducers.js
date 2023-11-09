import { dBlogin } from './Auth.thunks';

const buildExtraReducers = (builder) => {
    // thunks (pending, full-field, rejected)
    builder.addCase(dBlogin.fulfilled, (state, { payload }) => {
        state.isAuthenticated = true;
        state.user.id = payload.id;
        state.user.username = payload.username;
        state.user.password = payload.password;
        state.user.email = payload.email;
    });
};

export default buildExtraReducers;
