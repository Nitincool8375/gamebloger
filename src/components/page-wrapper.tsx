import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col pt-10 px-7 space-y-2 flex-grow pb-4">
      {children}
    </div>
  );
}
