import React from 'react';
import AuthButton from './AuthButton';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

export default async function AutoButton_Server() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  return <AuthButton session={session} />;
}
