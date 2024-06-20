import { Button } from '@/components/elements';
import { FormItem, inputStyles, selectStyles } from '@/components/forms';
import { DefaultFormProps } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { CategoryFormType, categorySchema } from '../types';
import {
  CATEGORY_COLORS,
  CATEGORY_ICONS,
  DEFAULT_CATEGORY_FORM_VALUES,
} from '../values';

export type DefaultCategoryFormProps = DefaultFormProps<CategoryFormType>;

export function DefaultCategoryForm({
  defaultValues,
  onSubmit,
}: DefaultCategoryFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CategoryFormType>({
    resolver: zodResolver(categorySchema),
    defaultValues: defaultValues || DEFAULT_CATEGORY_FORM_VALUES,
  });

  return (
    <form
      onSubmit={handleSubmit((values) => {
        reset();
        onSubmit && onSubmit(values);
      })}
      className="pt-5 flex flex-col justify-between h-full"
    >
      <FormItem label="Nome" error={errors.name}>
        <input type="text" className={inputStyles} {...register('name')} />
      </FormItem>
      <FormItem label="Ícone" error={errors.icon}>
        <select className={selectStyles} {...register('icon')}>
          {CATEGORY_ICONS.map((icon) => (
            <option value={icon.value} key={icon.value}>
              {icon.name}
            </option>
          ))}
        </select>
      </FormItem>
      <FormItem label="Cor" error={errors.color}>
        <select className={selectStyles} {...register('color')}>
          {CATEGORY_COLORS.map((color) => (
            <option value={color.value} key={color.value}>
              {color.name}
            </option>
          ))}
        </select>
      </FormItem>
      <Button type="submit" className="btn-primary w-full">
        Salvar
      </Button>
    </form>
  );
}
