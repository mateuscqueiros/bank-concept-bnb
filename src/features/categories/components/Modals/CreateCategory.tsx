import { Modal } from '@/components/elements';
import { useUser } from '@/features/auth';
import { catchErrors } from '@/lib/api-client';
import { useModalStore } from '@/stores/modals';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useCategories, useCreateCategory } from '../../api';
import { getNextCategoryId } from '../../lib';
import { CategoryFormType } from '../../types';
import { DefaultCategoryForm } from '../Form';

export function CreateCategoryModal() {
  const thisModalName = 'createCategory';
  const createCategory = useCreateCategory();
  const { data: user } = useUser();
  const { data: categories } = useCategories();
  const close = useModalStore.use.close();
  const router = useRouter();

  const onSubmit = (values: CategoryFormType) => {
    if (user) {
      const data = {
        id: getNextCategoryId(categories),
        ...values,
        userId: user.id,
      };
      createCategory
        .mutateAsync({ data })
        .then(() => {
          close(thisModalName);
          toast.success('Categoria criada');
        })
        .catch((err) =>
          catchErrors({
            err,
            fallbackMessage: 'Não foi possível criar a categoria',
            router,
          })
        );
    }
  };

  return (
    <Modal title="Categoria" name={thisModalName}>
      <DefaultCategoryForm onSubmit={onSubmit} />
    </Modal>
  );
}
