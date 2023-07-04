import SideBar from '../components/sidebar/SideBar';
import ConversationList from './components/ConversationList';
import getConversations from '@/app/actions/getConversations';

export default async function ConversationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const conversations = await getConversations();
    console.log(conversations);
    return (
        <SideBar>
            <div className="h-full">
                <ConversationList initialItems={conversations} />
                {children}
            </div>
        </SideBar>
    );
}
