'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface MessageInputProps {
    id: string;
    register: UseFormRegister<FieldValues>;
    placeholder?: string;
    required?: boolean;
    type?: string;
    errors: FieldErrors;
}

const MessageInput: React.FC<MessageInputProps> = ({
    id,
    register,
    placeholder,
    required,
    type,
    errors,
}) => {
    return (
        <div className="relative w-full">
            <input
                dir="auto"
                id={id}
                type={type}
                autoComplete={id}
                {...register(id, { required })}
                placeholder={placeholder}
                className="
                    text-black
                    font-light
                    py-4
                    px-4
                    bg-neutral-200
                    w-full
                    rounded-full
                    focus:outline-none
                "
            />
        </div>
    );
};
export default MessageInput;
