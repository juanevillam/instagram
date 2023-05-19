import Image from "next/image";
import { useState } from "react";
import validator from "validator";
import styles from "@/styles/login.module.css";

const Login = () => {
  const [loggingIn, setLoggingIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState({ id: "", password: "" });

  const onSubmit = (e) => {
    e.preventDefault();

    setLoggingIn(true);

    setTimeout(() => {
      setLoggingIn(false);
    }, 3000);
  };

  return (
    <div className="h-screen bg-[#FAFAFA] hidden screen880px:block">
      <div className="animate__animated animate__fadeIn content-center flex flex-nowrap flex-row h-full items-center justify-center">
        <div className={`bg-no-repeat h-700 ${styles.phonesBackground} w-430`}>
          <div className={styles.slider} />
        </div>
        <div className="animate__animated animate__fadeIn bg-white border border-[#DBDBDB] content-center flex flex-col flex-nowrap items-center justify-center m-5 p-10 w-350">
          <Image
            alt="Instagram"
            className="cursor-pointer mb-5"
            height={51}
            src="images/shared/instagram-logo.svg"
            width={175}
          />
          <form className="w-full" onSubmit={onSubmit}>
            <div className={styles.inputField}>
              <input
                autoComplete="username"
                className={styles.input}
                onChange={(e) => setState({ ...state, id: e.target.value })}
                placeholder=" "
                required
                type="text"
                value={state.id}
              />
              <label className={styles.label}>
                Phone number, username, or email
              </label>
            </div>
            <div
              className={`${styles.inputField} ${styles.inputFieldPassword}`}
            >
              <input
                autoComplete="current-password"
                className={styles.input}
                onChange={(e) => {
                  setState({ ...state, password: e.target.value });
                }}
                placeholder=" "
                required
                type={showPassword ? "text" : "password"}
                value={state.password}
              />
              <label className={styles.label}>Password</label>
              {state.password && (
                <label
                  className={styles.showHidePassword}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </label>
              )}
            </div>
            <button
              className="bg-[#0095F6] disabled:bg-[#4CB5F9] duration-300 font-medium hover:bg-[#1877F2] mt-2 py-1.5 rounded-lg text-sm text-white transition-all w-full"
              disabled={!validator.isLength(state.password, { min: 6 })}
              type="submit"
            >
              {loggingIn ? <></> : "Log in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
