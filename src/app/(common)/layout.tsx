import { LayoutContainer } from '@/components/layout';

export default function CommonPagesLayout({
  children,
}: React.PropsWithChildren) {
  return <LayoutContainer>{children}</LayoutContainer>;
}
