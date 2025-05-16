// Input.tsx
import React from "react";
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  className = "",
  ...props
}) => {
  const inputId = props.id || props.name;

  // Combine module class with any custom className passed in
  const wrapperClassName = `${styles.inputWrapper} ${className}`.trim();
  const fieldClassName = [styles.inputField, error ? styles.inputError : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClassName}>
      {label && (
        <label htmlFor={inputId} className={styles.inputLabel}>
          {label}
        </label>
      )}
      <input id={inputId} className={fieldClassName} {...props} />
      {error && <div className={styles.inputErrorText}>{error}</div>}
    </div>
  );
};

export default Input;
