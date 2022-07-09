import { environment } from "../../environment/environment";

export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_OK = "LOGIN_OK";
export const LOGOUT_OK = "LOGOUT_OK";
export const LOGIN_NOK = "LOGIN_NOK";
export const REGISTER_OK = "REGISTER_OK";
export const REGISTER_NOK = "REGISTER_NOK";

const actionLogin = () => ({
    type: LOGIN_LOADING,
});

const actionLoginOk = (data) => ({
    type: LOGIN_OK,
    payload: data,
});

const actionLogoutOk = () => ({
    type: LOGOUT_OK,
});

const actionloginNok = (data) => ({
    type: LOGIN_NOK,
    payload: data,
});

const actionRegisterOk = () => ({
    type: REGISTER_OK,
});

const actionRegisterNok = () => ({
    type: REGISTER_NOK,
});

export const loginUserFunction = async (body, dispatch) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    };

    dispatch(actionLogin());

    try {
        if (!body.username) {
            const response = await fetch(
                `${environment.API_URL}/auth/login`,
                requestOptions
            );
            const data = await response.json();

            if (data === "The email & password combination is incorrect!") {
                dispatch(actionloginNok(data));
                return data;
            }

            dispatch(actionLoginOk(data.data));
            window.localStorage.setItem("userId", data.data.userId);
            window.localStorage.setItem("token", data.data.token);
            return data;
        }

        await fetch(`${environment.API_URL}/auth/register`, requestOptions)
            .then(() => dispatch(actionRegisterOk()))
            .finally(() => dispatch(actionRegisterNok()));
    } catch (error) {
        console.log(error);
        dispatch(actionloginNok());
        return;
    }
};

export const logoutUserFunction = async (dispatch) => {
    dispatch(actionLogin());

    try {
        const response = await fetch(`${environment.API_URL}/auth/logout`, {
            method: "POST",
        });
        const data = await response.json();
        dispatch(actionLogoutOk());
        localStorage.clear();

        return data;
    } catch (error) {
        console.log(error);
        dispatch(actionloginNok());
        return;
    }
};
