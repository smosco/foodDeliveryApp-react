import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { AnimatePresence } from "framer-motion";
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initialState";
import reducer from "./context/reducer";

export default function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <AnimatePresence>
        <div className="w-screen h-auto flex flex-col bg-primary">
          <Header />
          <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
            <Outlet />
          </main>
        </div>
      </AnimatePresence>
    </StateProvider>
  );
}
