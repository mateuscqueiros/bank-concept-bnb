import Image from 'next/image';

export function UserCard() {
  return (
    <div className="flex flex-row justify-center items-center p-4">
      <Image
        height={20}
        width={20}
        src="https://doodleipsum.com/700/avatar"
        className="border-2 rounded-full h-[70px] w-[70px]"
        alt="Usuário"
      />
      <h3 className="ml-5 text-lg font-bold">Mateus Queirós</h3>
    </div>
  );
}
