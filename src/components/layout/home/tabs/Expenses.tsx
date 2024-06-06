import Image from 'next/image';

export function ExpensesTab() {
  // const { data: transactions } = useTransactions();
  /*const total = transactions.reduce(
    (acc, transaction) => transaction.value + acc,
    0
  );*/

  return (
    <div className="flex flex-col items-center mt-12 w-full">
      <h3 className="text-secondary font-bold text-2xl">R$ 2000</h3>
      <Image
        src="/expenses.png"
        alt="Gráfico das despesas"
        width={700}
        height={450}
      />
      <div className="w-full">
        <div className="flex flex-row justify-between max-w-[400px] w-full mx-auto mt-8">
          {/*<CategoriesProgress />*/}
        </div>
      </div>
    </div>
  );
}
