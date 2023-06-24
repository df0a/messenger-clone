import Image from 'next/image';
import AuthForm from './components/AuthForm';
import { Suspense } from 'react';

export default function Home() {
    return (
        <>
            <div
                className="
            flex
            min-h-full
            flex-col
            justify-center
            py-12
            sm:px-6
            lg:px-8
            bg-gray-100
            "
            >
                <div className="bg-white mx-auto p-8 rounded-2xl shadow-2xl">
                    <div
                        className="
                sm:mx-auto sm:w-full sm:-max-w-md
                "
                    >
                        <div className="w-12 h-12 mx-auto">
                            <Image
                                alt="Logo"
                                height={48}
                                width={48}
                                className="m-auto w-auto"
                                src="/images/logo.png"
                            />
                        </div>
                        <h2
                            className="
                    mt-6
                    text-center
                    text-3xl
                    font-bold
                    text-gray-900
                    tracking-tight
                    "
                        >
                            Sign in to your account
                        </h2>
                    </div>
                    <Suspense fallback={<p>Loading...</p>}>
                        <AuthForm />
                    </Suspense>
                </div>
            </div>
        </>
    );
}
