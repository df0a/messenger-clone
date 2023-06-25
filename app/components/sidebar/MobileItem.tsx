'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { IconType } from 'react-icons/lib';

interface MobileItemProps {
    label: string;
    icon: IconType;
    href: string;
    onClick?: () => void;
    active?: boolean;
}

const MobileItem: React.FC<MobileItemProps> = ({
    label,
    icon: Icon,
    href,
    onClick,
    active,
}) => {
    const handleClick = () => {
        if (onClick) return onClick();
    };
    console.log(`${label}:${active}`);
    return (
        <div>
            <Link
                onClick={onClick}
                href={href}
                className={clsx(
                    `group
                    flex
                    p-4
                    text-sm
                    leading-6
                    font-semibold
                    justify-center
                    `,
                    active
                        ? `bg-gray-100
                    text-black
                    hover:cursor-default`
                        : `text-gray-400
                        hover:text-black
                        hover:bg-gray-200`
                )}
            >
                <Icon className="h-6 w-6"></Icon>
            </Link>
        </div>
    );
};
export default MobileItem;
