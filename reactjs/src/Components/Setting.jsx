import React from "react";
import { useParams } from "react-router";
import { EditProfile } from "./EditProfile";
import { ChangePassword } from "./ChangePassword";
import { PrivacySecurity } from "./PrivacySecurity";
import { DisplayAccesibility } from "./DisplayAccesibility";

export const Setting = ({ profile }) => {
    let { setting } = useParams();
    document.title = "Settings • The Instagram Clone";

    return (
        <>
            { setting === "change-password" && <ChangePassword /> }
            { setting === "privacy-security" && <PrivacySecurity /> }
            { setting === "display-accesibility" && <DisplayAccesibility /> }
            { setting === "edit-profile" && <EditProfile profile={ profile } /> }
        </>
    );
};