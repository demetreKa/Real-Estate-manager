/* eslint-disable react/prop-types */

import styles from "./Button.module.css";
function Button({ className, onClick, ButtonText, RightEmoji, leftEmoji }) {
  return (
    <p
      onClick={() => (onClick ? onClick() : "")}
      className={className ? className : styles.btn}
    >
      {leftEmoji ? <span>{leftEmoji} </span> : ""}
      {ButtonText} {RightEmoji ? <span>{RightEmoji} </span> : " "}
    </p>
  );
}

export default Button;
