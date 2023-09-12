'use client';

import {
  Session,
  createClientComponentClient,
} from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Icon from './Icon';

interface Props {
  session: Session | null;
}

export default function AuthButton({ session }: Props) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  async function handleSignIn() {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      },
    });
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.refresh();
  }

  return (
    <header>
      {session ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <button
          type="button"
          onClick={handleSignIn}
          className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
        >
          <Icon />
          Sign in with Github
        </button>
      )}
    </header>
  );
}
