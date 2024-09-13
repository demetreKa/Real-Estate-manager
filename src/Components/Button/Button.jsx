/* eslint-disable react/prop-types */

import styles from "./Button.module.css";
function Button({ className, onClick, ButtonText }) {
  return (
    <p
      onClick={() => onClick()}
      className={className ? className : styles.dropDown}
    >
      {ButtonText} <i className="fa-solid fa-chevron-down"></i>
    </p>
  );
}

export default Button;
