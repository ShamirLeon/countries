import { ICountry } from "../interfaces/interfaces"
import { Link } from "wouter"

export default function Country({ country }: { country: ICountry }) {
    return (
        <Link href={`/country-details/${country.capital?.[0]}`} className="rounded-md shadow-md overflow-hidden dark:bg-darkBlue dark:text-pureWhite">
            <img src={country.flags.png} alt={country.flags.alt || `${country.name.common} Flag`} className="w-full" />
            <div className="p-6">
                <span className="block font-bold text-xl mb-4">{country.name.common}</span>
                <span className="block">
                    <strong className="mr-2">
                        Population: 
                    </strong>
                    {country.population.toLocaleString()}</span>
                <span className="block">
                    <strong className="mr-2">
                        Region: 
                    </strong>
                    {country.region}</span>
                <span className="block">
                    <strong className="mr-2">
                        Capital: 
                    </strong>
                    {country.capital}</span>
            </div>

        </Link>
    )
}