import React from 'react';

interface GridProps {
  children: React.ReactNode;
  className?: string;
}

interface ColProps {
  children: React.ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  className?: string;
}

export function Grid({ children, className = '' }: GridProps) {
  return (
    <div className={`container mx-auto px-4 ${className}`}>
      <div className="grid grid-cols-12 gap-4">
        {children}
      </div>
    </div>
  );
}

export function Col({
  children,
  xs = 12,
  sm,
  md,
  lg,
  xl,
  className = '',
}: ColProps) {
  // Helper to create a class like col-span-<number> if size is defined
  const spanClass = (size?: number, prefix = ''): string => {
    if (!size) return '';
    // Ensure the value is within 1 to 12
    const validSize = Math.min(Math.max(size, 1), 12);
    return `${prefix}col-span-${validSize}`;
  };

  const classes = [
    spanClass(xs),            // Default (extra-small) screens
    spanClass(sm, 'sm:'),     // Small screens
    spanClass(md, 'md:'),     // Medium screens
    spanClass(lg, 'lg:'),     // Large screens
    spanClass(xl, 'xl:'),     // Extra-large screens
    className
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
}

// Example usage:
// <Grid>
//   <Col xs={12} md={6} lg={4}>Column 1</Col>
//   <Col xs={12} md={6} lg={4}>Column 2</Col>
//   <Col xs={12} md={12} lg={4}>Column 3</Col>
// </Grid> 