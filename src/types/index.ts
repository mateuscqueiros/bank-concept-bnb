export type DefaultFormProps<T> = {
  defaultValues?: T;
  onSubmit?: (values: T) => void;
};
