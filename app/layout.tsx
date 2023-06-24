import './globals.css';
import ToasterContext from './context/ToasterContext';

export const metadata = {
    title: 'Messenger Clone',
    description: 'Messenger Clone',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ToasterContext />
                {children}
            </body>
        </html>
    );
}
