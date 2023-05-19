import { handleIsFormValid } from "./handleIsFormValid";
import { startRegisterWithEmailPasswordName } from "../Actions/auth";

export const handleRegister = ( e, email, password, fullName, dispatch, setError, removeError ) => {
    e.preventDefault();

    if ( handleIsFormValid( email, password, fullName, dispatch, setError, removeError ) ) {
        dispatch( startRegisterWithEmailPasswordName( email, password, fullName ) );
    };
};
