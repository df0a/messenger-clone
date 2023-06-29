import DesktopSideBar from './DesktopSideBar';
import MobileFooter from './MobileFooter';
import { getCurrentUser } from '@/app/actions/getCurrentUser';

const SideBar = async ({ children }: { children: React.ReactNode }) => {
    const currentUser = await getCurrentUser();

    return (
        <div className="h-full">
            <DesktopSideBar currentUser={currentUser!} />
            <MobileFooter />
            <main
                className="
                  lag:pl-20 h-full
                  "
            >
                {children}
            </main>
        </div>
    );
};
export default SideBar;
