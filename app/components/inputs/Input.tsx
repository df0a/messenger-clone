'use client';

import clsx from 'clsx';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    errors: FieldErrors;
    register: UseFormRegister<FieldValues>;
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    type,
    required,
    errors,
    register,
    disabled,
}) => {
    return (
        <div>
            <label
                htmlFor={id}
                className="text-sm font-medium leading-6 block text-gray-900"
            >
                {label}
            </label>
            <div className="mt-2">
                <input
                    type={type}
                    id={id}
                    disabled={disabled}
                    // autoComplete={id}
                    {...register(id, { required })}
                    className={clsx(
                        `
                    form-input
                    block
                    w-full
                    rounded-lg
                    border-0
                    py-1.5
                    shadow-sm
                    text-gray-900
                    ring-1
                    ring-inset
                    ring-gray-300
                    sm:text-sm
                    sm:leading-6
                    placeholder:text-gray-400
                    focus:ring-sky-600
                    focus:ring-2
                    focus:ring-inset
                    hover:ring-gray-400`,
                        errors[id] && `focus:ring-rose-500`,
                        disabled && `opacity-50 cursor-default`
                    )}
                />
            </div>
        </div>
    );
};
export default Input;
