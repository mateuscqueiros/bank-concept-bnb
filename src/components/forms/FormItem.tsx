import { FieldError } from 'react-hook-form';

export type InputProps = {
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type FormItemProps = {
  label?: string;
  error?: FieldError;
} & React.PropsWithChildren;

export const inputStyles =
  'input w-full border-2 border-primary bg-transparent text-primary rounded-full placeholder:text-primary';
export const selectStyles =
  'select select-bordered w-full rounded-full border-primary border-2 text-primary bg-transparent';

export function FormItem({ error, label, children }: FormItemProps) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      {children}
      <span className="label">
        {error && <span className="label-text-alt">{error.message}</span>}
      </span>
    </label>
  );
}
