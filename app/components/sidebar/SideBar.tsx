import DesktopSideBar from './DesktopSideBar';
const SideBar = async ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <DesktopSideBar />
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
