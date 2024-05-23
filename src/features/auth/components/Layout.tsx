export function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="h-screen flex items-center justify-center">
      {children}
    </main>
  );
}
