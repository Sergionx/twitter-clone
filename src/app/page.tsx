import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import AuthButton_Server from './components/AuthButton_Server';

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: posts } = await supabase.from('posts').select('*');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      mola
      <AuthButton_Server />
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </main>
  );
}
