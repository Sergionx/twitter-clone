'use client';
import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from '@nextui-org/react';
import Link from 'next/link';

import {
  IconMessageCircle,
  IconHeart,
  IconRepeat,
} from '@tabler/icons-react';

interface Props {
  userFullName: string;
  userName: string;
  avatarUrl: string;
  content: string;
}

export default function PostCard({
  userFullName,
  userName,
  avatarUrl,
  content,
}: Props) {
  const footerIcons = [
    { icon: <IconMessageCircle size={24} />, count: 0 },
    { icon: <IconHeart size={24} />, count: 0 },
    { icon: <IconRepeat size={24} />, count: 0 },
  ];

  return (
    <Card
      className="border-b border-white/20 bg-transparent transition-colors 
      hover:bg-slate-800 cursor-pointer"
    >
      <CardHeader className="justify-between">
        <header className="flex gap-4">
          <Link href={`/${userName}`}>
            <Avatar radius="full" size="md" src={avatarUrl} />
          </Link>

          <div className="flex flex-col items-start justify-center gap-1">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {userFullName}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @{userName}
            </h5>
          </div>
        </header>
      </CardHeader>

      <CardBody className="px-3 py-0 text-small text-white">
        <p>{content}</p>
      </CardBody>
      
      <CardFooter className="gap-3">
        {footerIcons.map((icon) => (
          <button>{icon.icon}</button>
        ))}
      </CardFooter>
    </Card>
  );
}
