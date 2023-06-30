'use client';

import Avatar from '@/app/components/Avatar';
import { User } from '@prisma/client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { titleCase } from 'title-case';

interface UserBoxProps {
    data: User;
}
const UserBox: React.FC<UserBoxProps> = ({ data }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = useCallback(() => {
        setIsLoading(true);

        axios
            .post('/api/conversations', {
                userId: data.id,
            })
            .then((response) => {
                router.push(`/conversations/${response.data.id}`);
            })
            .finally(() => setIsLoading(false));
    }, [data, router]);
    return (
        <div
            onClick={handleClick}
            className="
                    w-full
                    relative
                    flex
                    items-center
                    space-x-3
                    bg-white
                    p-3
                    hover:bg-neutral-200
                    rounded-lg
                    transition
                    cursor-pointer
                "
        >
            <Avatar imgUrl={data.image} />
            <div className="min-w-0 flex-1">
                <div className="focus:outline-none">
                    <div
                        className="
                            flex
                            justify-between
                            items-center
                            mb-1
                        "
                    >
                        <p className="text-md font-bold text-gray-900">
                            {titleCase(data.name as string)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UserBox;
