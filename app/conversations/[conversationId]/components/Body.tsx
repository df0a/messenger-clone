'use client';
import useConversation from '@/app/hooks/useConversation';
import { FullMessageType } from '@/app/types';
import { Suspense, useRef, useState } from 'react';
import MessageBox from './MessageBox';

interface BodyProps {
    initialMessages: FullMessageType[];
}
const Body: React.FC<BodyProps> = ({ initialMessages }) => {
    const [messages, setMessages] = useState(initialMessages);
    const bottomRef = useRef<HTMLDivElement>(null);
    const { conversationId } = useConversation();
    return (
        <div className="flex-1 overflow-y-auto">
            {messages.map((message, i) => (
                <Suspense fallback={<p>Loading...</p>}>
                    <MessageBox
                        isLast={i === messages.length - 1}
                        key={message.id}
                        data={message}
                    />
                </Suspense>
            ))}
            <div ref={bottomRef} className="pt-24" />
        </div>
    );
};
export default Body;
