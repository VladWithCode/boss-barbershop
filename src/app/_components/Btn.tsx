import React, { PropsWithChildren } from 'react';
import { getClassname } from '../_utils/helpers';

function Btn({
  onClick,
  className,
  children,
  ...props
}: PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    onClick?: React.MouseEventHandler;
  }) {
  return (
    <button
      className={getClassname(
        'bg-main-dark text-zinc-200 p-2 rounded disabled:brightness-75'
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Btn;
