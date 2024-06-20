import { Modal } from '@/components/elements';
import { useModalStore } from '@/stores/modals';
import { useCategories } from '../../api';
import { CategoryFormType } from '../../types';
import { DefaultCategoryForm } from '../Form';

export function UpdateCategoryModal() {
  const thisModalName = 'updateCategory';
  const thisModalState = useModalStore.use
    .modals()
    .find((m) => m.name === thisModalName);

  const { data: categories } = useCategories();
  const categoryData = categories.find((c) => c.id === thisModalState?.dataId)!;

  const onSubmit = (values: CategoryFormType) => {
    console.log(values);
  };
  return (
    <Modal actions={undefined} title="Categoria" name={thisModalName}>
      {categoryData && (
        <DefaultCategoryForm defaultValues={categoryData} onSubmit={onSubmit} />
      )}
    </Modal>
  );
}
