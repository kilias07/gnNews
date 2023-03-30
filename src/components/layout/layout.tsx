import Header from "./header/header";
import { ReactNode } from "react";
import Footer from "./footer";
import SideBar from "./Sidebar/sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex mx-auto container">
        <div className="flex-0">
          <SideBar />
        </div>
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </>
  );
}
