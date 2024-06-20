import { Modal } from '@/components/elements';
import { useUser } from '@/features/auth';
import { useModalStore } from '@/stores/modals';
import { useCategories, useUpdateCategory } from '../../api';
import { CategoryFormType } from '../../types';
import { DefaultCategoryForm } from '../Form';

export function UpdateCategoryModal() {
  const thisModalName = 'updateCategory';
  const thisModalState = useModalStore.use
    .modals()
    .find((m) => m.name === thisModalName);

  const { data: user } = useUser();
  const { data: categories } = useCategories();
  const categoryData = categories.find((c) => c.id === thisModalState?.dataId)!;

  const updateCategory = useUpdateCategory();
  const closeModal = useModalStore.use.close();

  const onSubmit = (values: CategoryFormType) => {
    if (user) {
      const data = {
        ...values,
        userId: user.id,
      };
      updateCategory.mutateAsync({ data, id: categoryData.id });
    }
  };

  return (
    <Modal actions={undefined} title="Categoria" name={thisModalName}>
      {categoryData && (
        <DefaultCategoryForm defaultValues={categoryData} onSubmit={onSubmit} />
      )}
    </Modal>
  );
}
