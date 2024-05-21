import { Navigation } from '.';

export function LayoutContainer({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col md:flex-col relative">
      <Navigation />
      <main className="max-w-[1600px] md:pl-[300px] w-full min-h-screen mx-auto">
        {children}
      </main>
    </div>
  );
}
