import React from 'react';

interface HeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'disabled' | 'error';
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const sizeMap = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-bold',
  h4: 'text-xl font-bold',
  h5: 'text-lg font-bold',
  h6: 'text-base font-bold',
};

const colorMap = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  disabled: 'text-gray-400',
  error: 'text-red-500',
};

const alignMap = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export function Heading({
  level,
  children,
  color,
  align = 'left',
  className = '',
}: HeadingProps) {
  const Tag = level;
  const classes = [
    sizeMap[level],
    color && colorMap[color],
    alignMap[align],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <Tag className={classes}>{children}</Tag>;
} 