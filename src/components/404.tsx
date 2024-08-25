import { Link } from "wouter";

export default function FourOFour() {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl">404 | Not Found</h1>
            <Link href="/">Go home</Link>
        </div>
    )
}