import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import NavBar from "../components/NavBar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="font-Nunito py-28 px-8 bg-lightGray dark:bg-veryDarkBlue">
            <NavBar />
            <Input />
            <Dropdown />
            <div className="isolate">
                {children}
            </div>
        </div>
    )
}