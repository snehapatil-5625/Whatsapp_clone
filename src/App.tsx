import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import MainLayout from "./layout";
import Status from "./pages/status";
import Chats from "./pages/chats";
import Channels from "./pages/channels";
import Communities from "./pages/communities";
import Settings from "./pages/settings";
import Profile from "./pages/profile";
import { ChatProvider } from "./lib/chat-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/chats" replace />,
      },
      {
        path: "/chats",
        element: <Chats />,
      },
      {
        path: "/status",
        element: <Status />,
      },
      {
        path: "/channel",
        element: <Channels />,
      },
      {
        path: "/community",
        element: <Communities />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <ChatProvider>
        <RouterProvider router={router} />
      </ChatProvider>
    </>
  );
}

export default App;
