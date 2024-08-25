import { useLocation, Link } from "wouter";

import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import NavBar from "../components/NavBar";
import ArrowLeftIcon from "../assets/ArrowLeft";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const routeLocation = useLocation()[0];

    return (
        <div className="font-Nunito py-28 px-8 bg-lightGray dark:bg-veryDarkBlue">
            <NavBar />
            {
                routeLocation == "/" ? (
                    <>
                        <Input />
                        <Dropdown />
                    </>
                ) : (
                    <Link href="/" className="flex gap-2 items-center shadow-xl py-3 px-6 dark:text-white dark:bg-darkBlue rounded-md max-w-32">
                        <ArrowLeftIcon />
                        Back
                    </Link>
                )
            }
            <div className="isolate">
                {children}
            </div>
        </div>
    )
}