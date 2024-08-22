export default function Input() {
    return (
        <div className="py-4 px-6 rounded-md shadow-md mb-8 dark:bg-darkBlue">
            <span className="mr-6">O</span>
            <input type="text" placeholder="Search for a country..." className="outline-none border-none bg-inherit dark:text-gray-900"/>
        </div>
    )
}