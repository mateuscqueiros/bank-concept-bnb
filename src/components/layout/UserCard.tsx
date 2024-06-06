import { useUser } from '@/features/auth';
import Image from 'next/image';

export function UserCard() {
  const { data: user } = useUser();
  return (
    <div className="flex flex-row justify-center items-center p-4">
      <Image
        height={20}
        width={20}
        src="https://doodleipsum.com/700/avatar"
        className="border-2 rounded-full h-[70px] w-[70px]"
        alt="Usuário"
      />
      {user && <h3 className="ml-5 text-lg font-bold">{user.name}</h3>}
    </div>
  );
}
