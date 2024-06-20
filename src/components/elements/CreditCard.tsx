import { useUser } from '@/features/auth';
import { IconDeviceSdCard, IconWifi2 } from '@tabler/icons-react';
import Image from 'next/image';

type CreditCardsProps = {
  logo: string;
  brand: string;
  className?: string;
};

export function CreditCard({ brand, logo }: CreditCardsProps) {
  const { data: user, isFetching } = useUser();

  if (isFetching) {
    return <CreditCardSkeleton logo={logo} />;
  }

  return (
    <div
      className={
        'bg-primary text-white p-4 rounded-lg relative min-w-[300px] 180px] z-0'
      }
    >
      <div className="absolute top-6 right-6">
        <Image
          width={50}
          height={50}
          style={{ width: '50px', height: '50px' }}
          src={brand}
          alt="Card Brand"
        />
      </div>
      <div className="mt-12">
        <div className="flex flex-row mb-2">
          <IconDeviceSdCard fill="#CCC" style={{ rotate: '90deg' }} size={40} />
          <IconWifi2 style={{ rotate: '90deg' }} size="40" />
        </div>
        <div className="flex flex-row items-center">
          <Image
            src={logo}
            width={40}
            height={40}
            style={{ width: '40px', height: '40px' }}
            alt={user?.name + ' logo'}
          />
          <span className="ml-4">{user?.name}</span>
        </div>
      </div>
    </div>
  );
}

export function CreditCardSkeleton({ logo }: { logo: string }) {
  return (
    <div
      className={
        'bg-primary text-white p-4 rounded-lg relative min-w-[300px] 180px] z-0'
      }
    >
      <div className="skeleton w-16 h-10 absolute top-6 right-6"></div>
      <div className="mt-12">
        <div className="flex flex-row mb-2">
          <IconDeviceSdCard fill="#CCC" style={{ rotate: '90deg' }} size={40} />
          <IconWifi2 style={{ rotate: '90deg' }} size="40" />
        </div>
        <div className="flex flex-row items-center">
          <Image
            src={logo}
            width={40}
            height={40}
            style={{ width: '40px', height: '40px' }}
            alt="Card logo"
          />
          <span className="skeleton w-16 h-4 ml-4"></span>
        </div>
      </div>
    </div>
  );
}
