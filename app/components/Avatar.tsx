'use client';

import { User } from '@prisma/client';
import Image from 'next/image';

interface AvatarProps {
    imgUrl: string | null;
}

const Avatar: React.FC<AvatarProps> = ({ imgUrl }) => {
    return (
        <div
            className="
                    relative
                "
        >
            <div
                className="
                relative
                inline-block
                rounded-full
                overflow-hidden
                h-6
                w-6
                md:h-11
                md:w-11
                "
            >
                <Image
                    alt="Avatar"
                    src={imgUrl || '/images/placeholder.jpg'}
                    fill
                />
            </div>
            <span
                className="
                    absolute
                    bg-green-500
                    block
                    rounded-full
                    ring-white
                    ring-2
                    top-0
                    right-0
                    h-2
                    w-2
                    md:h-3
                    md:w-3
                "
            ></span>
        </div>
    );
};
export default Avatar;
