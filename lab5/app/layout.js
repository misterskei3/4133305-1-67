import SessionProvider from "./components/SessionProvider";
import { getServerSession } from "next-auth";

export async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <SessionProvider session = {session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
