import styles from './style.module.scss';

import React from "react";

interface Props {
  size?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
}

export default function Title ({ size = 'h1', ...props }: Props) {
  const Tag = size;

  return (
    <Tag className={`${styles.title} ${props.className}`}>{props.children}</Tag>
  )
}