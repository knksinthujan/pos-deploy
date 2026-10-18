import type { ComponentType, ElementType, HTMLAttributes, ReactNode } from 'react';

type RevealProps = HTMLAttributes<HTMLElement> & {
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: ElementType;
  children?: ReactNode;
};

/** Layout wrapper that displays content immediately without scroll animation. */
export function Reveal({
  children,
  delay,
  className = '',
  as: Tag = 'div',
  ...rest
}: RevealProps) {
  const Component = Tag as ComponentType<any>;
  return (
    <Component
      className={`reveal ${className}`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
}
