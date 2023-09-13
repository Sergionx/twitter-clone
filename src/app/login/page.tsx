import React from 'react';
import AuthButton_Server from '@components/AuthButton_Server';

export default function Home() {
  return (
    <main
      className="grid place-content-center min-h-screen"
    >
      <h1 className='text-xl font-bold mb-4'>Inicia sesión en mi Twitter Clone</h1>
      <AuthButton_Server />
    </main>
  );
}
