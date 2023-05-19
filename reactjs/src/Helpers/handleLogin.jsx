import { handleIsFormValid } from "./handleIsFormValid";
import { startLoginWithEmailPassword } from "../Actions/auth";

export const handleLogin = ( e, email, password, dispatch, setError, removeError ) => {
    e.preventDefault();

    if ( handleIsFormValid( email, null, password, dispatch, setError, removeError ) ) {
        dispatch( startLoginWithEmailPassword( email, password ) );
    };
};
