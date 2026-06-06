import dynamic from 'next/dynamic';

export const dynamic = 'force-dynamic';

const PageContent = dynamic(() => import('@/components/PageContent'), {
  ssr: true,
});

export default function Home() {
  return <PageContent />;
}
