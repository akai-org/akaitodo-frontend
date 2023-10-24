import { login } from './Auth.thunks';

const buildExtraReducers = (builder) => {
    // thunks (pending, full-field, rejected)
    builder.addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        console.log(action);
        state.user = payload;
    });
};

export default buildExtraReducers;
