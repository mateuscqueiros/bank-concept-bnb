import { Modal } from '@/components/elements';
import { useUser } from '@/features/auth';
import { catchErrors } from '@/lib/api-client';
import { useModalStore } from '@/stores/modals';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useCategories, useUpdateCategory } from '../../api';
import { CategoryFormType } from '../../types';
import { DefaultCategoryForm } from '../Form';

export function UpdateCategoryModal() {
  const thisModalName = 'updateCategory';
  const thisModalState = useModalStore.use
    .modals()
    .find((m) => m.name === thisModalName);

  const router = useRouter();
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
      updateCategory
        .mutateAsync({ data, id: categoryData.id })
        .then(() => {
          closeModal(thisModalName);
          toast.success('Categoria atualizada');
        })
        .catch((err) =>
          catchErrors({
            err,
            fallbackMessage: 'Não foi possível atualizar a categoria',
            router,
          })
        );
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
