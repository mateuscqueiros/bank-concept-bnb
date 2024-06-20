import { storage, useUser } from '@/features/auth';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function UserCard() {
  const { data: user } = useUser();
  const router = useRouter();

  return (
    <div className="flex flex-row justify-center items-center p-4">
      <Image
        height={20}
        width={20}
        src="https://doodleipsum.com/700/avatar"
        className="border-2 rounded-full h-[70px] w-[70px]"
        alt="Usuário"
      />
      {user && (
        <div className="ml-5 flex flex-col">
          <h3 className="text-lg font-bold">{user.name}</h3>
          <span
            className="hover:underline cursor-pointer text-sm"
            onClick={() => {
              storage.clearToken();
              router.push('/login');
            }}
          >
            Sair
          </span>
        </div>
      )}
    </div>
  );
}
