import { getAuthenticate, getAuthenticateByGoogle, getCurrentUser } from './Auth.thunks';

const buildExtraReducers = (builder) => {
    builder
        // AUTH STATUS
        .addCase(getAuthenticate.pending, (state) => {
            state.isLoading = true;
            state.isAuthenticated = false;
        })
        .addCase(getAuthenticate.fulfilled, (state) => {
            state.isAuthenticated = true;
            state.isLoading = false;
        })
        .addCase(getAuthenticate.rejected, (state) => {
            state.isAuthenticated = false;
            state.isLoading = false;
        })

        // AUTH BY GOOGLE
        .addCase(getAuthenticateByGoogle.pending, (state) => {
            state.isLoading = true;
            state.isAuthenticated = false;
        })
        .addCase(getAuthenticateByGoogle.fulfilled, (state) => {
            state.isAuthenticated = true;
            state.isLoading = false;
        })
        .addCase(getAuthenticateByGoogle.rejected, (state) => {
            state.isAuthenticated = false;
            state.isLoading = false;
        })

        // USER DATA
        .addCase(getCurrentUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getCurrentUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        })
        .addCase(getCurrentUser.rejected, (state) => {
            state.isAuthenticated = false;
            state.isLoading = false;
        })
};

export default buildExtraReducers;
