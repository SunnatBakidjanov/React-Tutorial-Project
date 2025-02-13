import { use } from "react";

import { AuthContext } from "../../../contexts/authorization";

import styles from "./userName.module.scss";

export const UserName = () => {
    const { auth } = use(AuthContext);

    return auth.isAuthed ? <div className={styles.user}>{auth.name}</div> : null;
};
