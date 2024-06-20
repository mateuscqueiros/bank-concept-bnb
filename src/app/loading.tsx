import { IconLoader } from '@tabler/icons-react';

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <IconLoader className="rounded-full animate-spin" />
      <span>Carregando...</span>
    </div>
  );
}
