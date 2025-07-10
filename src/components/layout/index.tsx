import "./styles.css";

import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <header className="user">
        <p>Hi, John Doe.</p>
      </header>

      <Outlet />
      <footer>
        <span>All rights reserved. ®</span>
      </footer>
    </div>
  );
}
