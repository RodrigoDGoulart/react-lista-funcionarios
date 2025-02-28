import React from "react";

import styles from "./style.module.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: React.ReactElement<{ className?: string, size: number }>;
}

export default function Input({ icon, ...inputProps }: Props) {
  return (
    <span className={`${styles.input} ${inputProps.className}`}>
      <input className="" {...inputProps} />
      {icon && React.cloneElement(icon, {className: styles.icon, size: 16})}
    </span>
  );
}
