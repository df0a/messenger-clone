import DesktopSideBar from './DesktopSideBar';
import MobileFooter from './MobileFooter';
const SideBar = async ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <DesktopSideBar />
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
