import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <div>
        <Suspense fallback={null}>{children}</Suspense>
      </div>
    </div>
  );
};

export default Layout;
