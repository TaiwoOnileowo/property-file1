'use client';

import { Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <Loader2 className='animate-spin flex mx-auto stroke-green-500' />;
  }

  return <>{children}</>;
};

export default ClientOnly;