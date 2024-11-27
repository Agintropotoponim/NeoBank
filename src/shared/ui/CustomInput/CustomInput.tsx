import React from "react";
import classes from "./CustomInput.module.scss";
import { email, send } from "./consts/icons";

export const CustomInput: React.FC = () => {
    return (
        <div className={classes['ci-container']}>
            <div className={classes['ci-container__email-icon']}>
                <img src={email} alt="email" />
            </div>
            <input
                type="email"
                placeholder="Your email"
                className={classes['ci-container__input']}
            />
            <button className={classes['ci-container__button']}>
                <span className={classes['ci-container__send-icon']}>
                    <img src={send} alt="send" />
                </span>
                <span className={classes['ci-container__subscribe']}>
                    Subscribe
                </span>
            </button>
        </div>
    );
};