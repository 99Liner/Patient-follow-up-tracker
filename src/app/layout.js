import "./global.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export const metadata = {
  title: "Patient Follow-Up Tracker",
  description: "Patient follow-up management application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-layout">
          <Sidebar />

          <div className="content-area">
            <Header />

            <main className="main-content">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}