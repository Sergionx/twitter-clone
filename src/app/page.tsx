import AutoButton_Server from '@components/AuthButton_Server';
import PostList from '@components/PostList';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: posts } = await supabase
    .from('posts')
    .select('*, user:users(*)');

  if (!session) redirect('/login');

  return (
    <main
      className="flex min-h-screen flex-col items-center 
        justify-between "
    >
      <section
        className="mx-auto min-h-screen
        max-w-2xl border-x border-white/50"
      >
        <AutoButton_Server />
        <PostList posts={posts!} />
      </section>
    </main>
  );
}
