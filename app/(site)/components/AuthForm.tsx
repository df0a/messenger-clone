'use client';

import Button from '@/app/components/Button';
import Input from '@/app/components/inputs/Input';
import { useCallback, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import AuthSocialButton from './AuthSocialButton';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import { useRouter } from 'next/navigation';

import { signIn, useSession } from 'next-auth/react';

type Variant = 'LOGIN' | 'REGISTER';

function AuthForm() {
    const session = useSession();
    const router = useRouter();
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (session?.status === 'authenticated') {
            router.push('/users');
            toast.success('Is Authenticated');
        }
    }, [session?.status, router]);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        if (variant === 'REGISTER') {
            axios
                .post('/api/register', data)
                .then(() => {
                    signIn('credentials', data);
                    toast.success('Register success');
                })
                .catch((e) => {
                    toast.error('Something went wrong!');
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            signIn('credentials', {
                ...data,
                redirect: false,
            })
                .then((callback) => {
                    if (callback?.error) {
                        toast.error('Invalid credentials');
                    } else {
                        if (callback?.ok) {
                            toast.success('Login Success');
                            router.push('/users');
                        }
                    }
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    };

    const socialAction = (action: string) => {
        setIsLoading(true);

        signIn(action, { redirect: false })
            .then((callback) => {
                if (callback?.error) {
                    toast.error('Invalid credentials');
                } else {
                    if (callback?.ok) {
                        toast.success('Login Success');
                        router.push('/users');
                    }
                }
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <div
            className="
            mt-2
            sm:mx-auto
            sm:w-full
            sm:max-w-md
            "
        >
            <div
                className="
                px-4
                py-8
                s:px-10
            "
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div
                        className="
                    space-y-6
                    "
                    >
                        {variant === 'REGISTER' && (
                            <Input
                                id="name"
                                label="User name"
                                register={register}
                                errors={errors}
                                disabled={isLoading}
                            ></Input>
                        )}
                        <Input
                            id="email"
                            label="Email address"
                            type="email"
                            register={register}
                            errors={errors}
                            disabled={isLoading}
                        ></Input>
                        <Input
                            id="password"
                            label="Password"
                            type="password"
                            register={register}
                            errors={errors}
                            disabled={isLoading}
                        ></Input>
                    </div>
                    <div className="mt-10">
                        <Button disabled={isLoading} fullWidth type="submit">
                            {variant === 'LOGIN' ? 'Sign in' : 'Register'}
                        </Button>
                    </div>
                </form>
                <div className="mt-6">
                    <div className="relative">
                        <div className="flex absolute items-center inset-0">
                            <div className="border-t w-full border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-2">
                        <AuthSocialButton
                            icon={BsGithub}
                            onClick={() => socialAction('github')}
                            disabled={isLoading}
                        />
                        <AuthSocialButton
                            icon={BsGoogle}
                            onClick={() => socialAction('google')}
                            disabled={isLoading}
                        />
                    </div>
                </div>

                <div
                    className="
                            flex
                            justify-center
                            px-2
                            mt-6
                            text-sm
                          text-gray-500
                            gap-2"
                >
                    <div>
                        {variant === 'LOGIN'
                            ? 'New to Messenger ? '
                            : 'Already have an account?'}
                    </div>
                    <div
                        className="cursor-pointer underline"
                        onClick={toggleVariant}
                    >
                        {variant === 'LOGIN' ? 'Create an account' : 'Login'}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AuthForm;
