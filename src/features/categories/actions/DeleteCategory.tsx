import { useModalStore } from '@/stores/modals';
import { IconTrash } from '@tabler/icons-react';
import { CategoryType } from '../types';

export function DeleteCategory({ itemId }: { itemId: CategoryType['id'] }) {
  const closeModal = useModalStore.use.close();
  // const deleteCategory = useDeleteCategory();
  return (
    <div>
      <div className="tooltip" data-tip="Deletar categoria">
        <button
          type="button"
          className="flex items-center justify-center rounded-md btn-sm btn-square bg-transparent border-primary border-2 hover:bg-primary hover:border-transparent text-primary hover:text-white"
          onClick={() => {
            closeModal('updateCategory');
            /* deleteCategory
              .mutateAsync({ id: itemId })
              .catch((err) => console.log('delete err', err));*/
          }}
        >
          <IconTrash size={24} />
        </button>
      </div>
    </div>
  );
}
