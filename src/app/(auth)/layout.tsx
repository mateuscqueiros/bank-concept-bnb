import { AuthLayout } from '@/features/auth';

export default function AuthPagesLayout({ children }: React.PropsWithChildren) {
  return <AuthLayout>{children}</AuthLayout>;
}
