import { useLocation, Link } from "wouter";

import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import NavBar from "../components/NavBar";
import ArrowLeftIcon from "../assets/ArrowLeft";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const routeLocation = useLocation()[0];

    return (
        <div className="font-Nunito py-[72px] px-8 lg:px-32 ">
            <NavBar />
            {
                routeLocation == "/" ? (
                    <div className="flex flex-col gap-8 lg:flex-row lg:justify-between my-12 lg:my-14">
                        <Input />
                        <Dropdown />
                    </div>
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