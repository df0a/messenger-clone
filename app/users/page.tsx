'use client';

import { signOut } from 'next-auth/react';
import EmptyState from '../components/EmptyState';

const Users = () => {
    return (
        <>
            <button onClick={() => signOut()}>Logout</button>
            <div className="hidden lg:pl-80 lg:block h-full">
                <EmptyState />
            </div>
        </>
    );
};
export default Users;
