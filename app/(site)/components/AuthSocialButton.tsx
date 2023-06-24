'use client';
import clsx from 'clsx';
import { IconType } from 'react-icons';

interface AuthSocialButtonProps {
    icon: IconType;
    onClick: () => void;
    disabled?: boolean;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
    icon: Icon,
    onClick,
    disabled,
}) => {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={clsx(
                `
                        inline-flex
                        w-full
                        justify-center
                        rounded-md
                        bg-white
                        px-4
                        py-2
                        text-gray-500
                        shadow-sm
                        ring-1
                        ring-inset
                        ring-gray-300
                        hover:bg-gray-100
                        focus:outline-offset-0`,
                disabled && `opacity-50 cursor-default`
            )}
        >
            <Icon />
        </button>
    );
};
export default AuthSocialButton;
