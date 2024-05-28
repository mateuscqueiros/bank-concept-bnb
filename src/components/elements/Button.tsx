import { cn } from '@/lib/utils';
import { ReactElement } from 'react';

export type ButtonProps = {
  variant?: 'default' | 'subtle';
  leftSection?: ReactElement;
  rightSection?: ReactElement;
  tooltip?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = 'default',
  leftSection,
  rightSection,
  className = '',
  children,
  tooltip,
  ...rest
}: ButtonProps) {
  let defaultStyle =
    'btn btn-sm py-3 px-10 h-fit min-h-11 rounded-full shadow-none border-none';

  const content = (
    <>
      {leftSection && <div className="mr-2">{leftSection}</div>}
      {children}
      {rightSection && <div className="mr-2">{rightSection}</div>}
    </>
  );

  if (variant === 'default') {
    return (
      <button
        className={cn([
          defaultStyle,
          'text-white bg-primary hover:bg-tertiary',
          className,
          tooltip && 'tooltip',
        ])}
        data-tip={tooltip}
        {...rest}
      >
        {content}
      </button>
    );
  }

  if (variant === 'subtle') {
    return (
      <div className={cn([tooltip && 'tooltip'])} data-tip={tooltip}>
        <button
          className={cn([
            defaultStyle,
            'text-primary bg-transparent hover:bg-primary hover:text-white',
            className,
          ])}
          {...rest}
        >
          {content}
        </button>
      </div>
    );
  }
}
