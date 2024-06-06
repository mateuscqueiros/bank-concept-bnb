import { cn } from '@/lib/utils';

export type TabItem = {
  text: string;
  value: string;
};

export type TabProps = {
  items: TabItem[];
  active: string | number;
  setActive: (value: string) => void;
};

export function Tabs({ items, active, setActive }: TabProps) {
  const tabItems = items.map((tabItem) => {
    const isActive = active === tabItem.value;

    return (
      <button
        key={`tabs-item-${tabItem.value}`}
        className={`flex flex-col items-center font-medium w-full`}
        onClick={() => setActive(tabItem.value)}
      >
        <div
          className={cn([
            'relative w-fit after:w-3/4 after:bg-primary after:content-[""] after:absolute after:translate-x-1/2 after:right-1/2 after:bottom-[-2px]',
            isActive ? 'after:h-0.5' : 'after:h-0',
          ])}
        >
          {tabItem.text}
        </div>
      </button>
    );
  });

  return (
    <div className={'flex flex-row items-center text-primary min-w-[340px]'}>
      {tabItems}
    </div>
  );
}
