'use client';

import { Conversation, Message, User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useCallback, useState, useMemo } from 'react';
import { titleCase } from 'title-case';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
import clsx from 'clsx';
import { FullConversationType } from '@/app/types';
import useOtherUser from '@/app/hooks/useOtherUser';
import Avatar from '@/app/components/Avatar';

interface ConversationBoxProps {
    data: FullConversationType;
    selected?: boolean;
}
const UserBox: React.FC<ConversationBoxProps> = ({ data, selected }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const otherUser = useOtherUser(data);
    const session = useSession();

    const handleClick = useCallback(() => {
        router.push(`/conversations/${data.id}`);
    }, [data.id, router]);

    const lastMessage = useMemo(() => {
        const messages = data.messages || [];

        return messages[messages.length - 1];
    }, [data.messages]);

    const userEmail = useMemo(() => {
        return session.data?.user?.email;
    }, [session.data?.user?.email]);

    const hasSeen = useMemo(() => {
        if (!lastMessage) return false;

        const seenArray = lastMessage.seenBy || [];

        if (!userEmail) return false;

        return (
            seenArray.filter((user) => {
                user.email === userEmail;
            }).length !== 0
        );
    }, [userEmail, lastMessage]);

    const lastMessageText = useMemo(() => {
        if (lastMessage?.image) return 'Sent an image';

        if (lastMessage?.body) return lastMessage.body;

        return 'Started a conversation';
    }, [lastMessage]);
    return (
        <div
            onClick={handleClick}
            className={clsx(
                `
                    w-full
                    relative
                    flex
                    items-center
                    space-x-3
                    hover:bg-neutral-200
                    rounded-lg
                    transition
                    cursor-pointer
                    p-3
                `,
                selected ? `bg-neutral-200` : `bg-white`
            )}
        >
            <Avatar imgUrl={otherUser.image} />
            <div className="min-w-0 flex-1">
                <div className="focus:outline-none">
                    <div
                        className="
                            flex
                            justify-between
                            items-center
                            pl-1
                            mb-1
                        "
                    >
                        <p className="text-md font-bold text-gray-900">
                            {titleCase(
                                (data.name as string) ||
                                    (otherUser.name as string)
                            )}
                        </p>
                        {lastMessage?.createdAt && (
                            <p className="text-xs text-gray-400 font-light">
                                {format(new Date(lastMessage.createdAt), 'p')}
                            </p>
                        )}
                    </div>
                    <p
                        className={clsx(
                            `
                                    text-sm
                                    truncate
                                `,
                            hasSeen ? 'text-gray-500' : 'text-black font-medium'
                        )}
                    >
                        {lastMessageText}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default UserBox;
