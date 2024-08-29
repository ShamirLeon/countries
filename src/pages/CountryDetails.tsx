import { Link, useParams } from 'wouter';
/* Custom hooks imports */
import useGetCountryByCapital from '../hooks/useGetCountryByCapital';
import useBorders from '../hooks/useBorders';

/* Components imports */
import FourOFour from '../components/404';

export default function CountryDetails() {

    const { capital }: { capital: string } = useParams()
    const { country, loading, error } = useGetCountryByCapital(capital)
    const { bordersCountries } = useBorders(country?.borders || [])

    const NativeName = country?.name?.nativeName?.[country?.cca3.toLowerCase()]?.official || country?.name?.official

    return (
        <>
            {
                loading ? (
                    <h1>Loading...</h1>
                ) : error ? (
                    <FourOFour />
                ) : (
                    <div className='grid lg:grid-cols-2 lg:gap-28 mt-14 dark:text-white 2xl:text-2xl'>
                        <picture>
                            <img src={country?.flags.svg} alt={country?.flags.alt || NativeName} className='mb-6 w-full shadow-lg' />
                        </picture>
                        <div className='grid grid-cols-1 lg:grid-cols-[0.4fr,0.4fr] lg:grid-rows-[.3fr,.3fr,.2fr]'>
                            <h1 className='font-bold text-2xl lg:text-5xl mb-4 col-span-1 lg:col-span-2'>
                                {country?.name.common}
                            </h1>
                            <div className='space-y-2 lg:h-min'>
                                <p className='font-bold'>Native Name:
                                    <span className='font-normal dark:font-thin ml-1'>
                                        {NativeName}
                                    </span>
                                </p>
                                <p className='font-bold'>Population:
                                    <span className='font-normal dark:font-thin ml-1'>
                                        {country?.population.toLocaleString()}
                                    </span>
                                </p>
                                <p className='font-bold'>Region:
                                    <span className='font-normal dark:font-thin ml-1'>
                                        {country?.region}
                                    </span>
                                </p>
                                <p className='font-bold'>Subregion:
                                    <span className='font-normal dark:font-thin ml-1'>
                                        {country?.subregion}
                                    </span>
                                </p>
                                <p className='font-bold'>Capital:
                                    <span className='font-normal dark:font-thin ml-1'>
                                        {country?.capital}
                                    </span>
                                </p>
                            </div>
                            <div className='space-y-2'>
                                <p className='font-bold'>Top Level Domain:
                                    <span className='font-normal dark:font-thin ml-1'>
                                        {country?.tld}
                                    </span>
                                </p>
                                <p className='font-bold'>Currencies:
                                    <span className='font-normal dark:font-thin ml-1'>
                                        {country?.currencies?.[Object.keys(country?.currencies)[0]].name}
                                    </span>
                                </p>
                                <p className='font-bold'>Languages:
                                    {country?.languages && Object.keys(country?.languages).map((language, index) => (
                                        <span key={index} className='font-normal dark:font-thin ml-1'>
                                            {country?.languages?.[language]},
                                        </span>
                                    ))}
                                </p>
                            </div>
                            <div className='dark:text-pureWhite col-span-1 lg:col-span-2 lg:mt-14 '>
                                <p className='font-bold mb-2'>Borders: </p>
                                <div className='flex flex-wrap gap-2'>
                                    {bordersCountries && bordersCountries.map((border) => (
                                        <Link href={`/country-details/${border.capital}`} key={border.name.official} className='shadow-md py-1 px-4 dark:bg-darkBlue'>
                                            {border.name.common}
                                        </Link>
                                    ))}
                                    {
                                         !bordersCountries.length ? 'No borders' : null
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                )
            }
        </>
    )
}