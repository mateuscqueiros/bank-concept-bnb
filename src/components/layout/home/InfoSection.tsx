'use client';

import { Tabs } from '@/components/elements';
import { inputStyles, selectStyles } from '@/components/forms';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { ExpensesTab, ReleasesTab, TaxesTab } from './tabs';

const tabData = [
  {
    text: 'Lançamentos',
    value: 'releases',
  },
  {
    text: 'Despesas',
    value: 'expenses',
  },
  {
    text: 'Taxas',
    value: 'taxes',
  },
];

const selectData = [
  {
    name: 'Dia',
    value: 'day',
  },
  {
    name: 'Mês',
    value: 'month',
  },
  {
    name: 'Ano',
    value: 'year',
  },
];

export function HomeInfoSection() {
  const [activeTab, setActiveTab] = useState(tabData[1].value);
  const [activeSelectData, setActiveSelectData] = useState(selectData[0].value);

  return (
    <>
      <input className={inputStyles} placeholder="Pode perguntar" />
      <div className="flex flex-row flex-wrap justify-between gap-5 mt-10">
        <Tabs items={tabData} setActive={setActiveTab} active={activeTab} />
        <select
          className={cn([selectStyles, 'w-fit h-2'])}
          value={activeSelectData}
          onChange={(e) => setActiveSelectData(e.target.value)}
        >
          {selectData.map((i) => (
            <option value={i.value} key={i.value}>
              {i.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full">
        {activeTab === 'expenses' ? (
          <ExpensesTab />
        ) : activeTab === 'releases' ? (
          <ReleasesTab />
        ) : activeTab === 'taxes' ? (
          <TaxesTab />
        ) : null}
      </div>
    </>
  );
}
