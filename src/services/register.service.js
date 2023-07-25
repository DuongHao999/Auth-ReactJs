import httpCommon from "../http-common";

export function register(user) {
    return http.post("/sign-up", user);
}