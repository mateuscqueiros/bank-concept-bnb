import { storage, useUser } from '@/features/auth';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function UserCard() {
  const { data: user, isFetching } = useUser();
  const router = useRouter();

  if (isFetching) {
    return <UserCardSkeleton />;
  }

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

export function UserCardSkeleton() {
  return (
    <div className="flex flex-row justify-center items-center p-4">
      <div className="skeleton rounded-full w-16 h-16"></div>
      <div className="ml-5 flex flex-col gap-2">
        <h3 className="skeleton h-4 w-32"></h3>
        <span className="skeleton h-4 w-10"></span>
      </div>
    </div>
  );
}
