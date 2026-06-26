import "./global.css";

export const metadata = {
    title: "Patient Follow-up Tracekr",
    description: "Healthcare freont desk work flow",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
