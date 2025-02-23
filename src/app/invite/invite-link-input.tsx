'use client';

import { IconButton } from '@/components/iconButton';
import { InputRoot, InputIcon, InputField } from '@/components/input';
import { Link, Copy } from 'lucide-react';

interface InviteLinkProps {
  inviteLink: string;
}

export default function InviteLinkInput({ inviteLink }: InviteLinkProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink);
    alert('Link copiado para área de transferência');
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className='size-5' />
      </InputIcon>
      <InputField readOnly defaultValue={inviteLink} />
      <IconButton className='-mr-2' onClick={copyInviteLink}>
        <Copy className='size-5' />
      </IconButton>
    </InputRoot>
  );
}
