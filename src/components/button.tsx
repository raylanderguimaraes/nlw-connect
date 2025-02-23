import { ComponentProps, ReactNode } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button
      className=' flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold w-full rounded-xl cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300 '
      {...props}
    />
  );
}
