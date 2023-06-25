'use client';

import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const Users = () => {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session?.status !== 'authenticated') {
            router.push('/');
            toast.error('Not Authenticated');
        }
    }, [session?.status, router]);
    return <button onClick={() => signOut()}>Logout</button>;
};
export default Users;
