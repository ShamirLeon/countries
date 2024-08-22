export default function Dropdown() {
    return (
        <div>
            <div>
                <select className="py-4 p-6 rounded-md shadow-md mb-8">
                    <option value="" disabled selected>Select a country</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        </div>
    )
}