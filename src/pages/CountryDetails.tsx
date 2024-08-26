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
                    <div className='mt-14'>
                        <picture>
                            <img src={country?.flags.png} alt={country?.flags.alt || NativeName} className='mb-6' />
                        </picture>
                        <div className='dark:text-white mb-6'>
                            <h1 className='font-bold text-2xl mb-6'>{country?.name.common}</h1>
                            <p className='font-bold mb-2'>Native Name:
                                <span className='font-normal ml-1'>
                                    {NativeName}
                                </span>
                            </p>
                            <p className='font-bold mb-2'>Population:
                                <span className='font-normal ml-1'>
                                    {country?.population.toLocaleString()}
                                </span>
                            </p>
                            <p className='font-bold mb-2'>Region:
                                <span className='font-normal ml-1'>
                                    {country?.region}
                                </span>
                            </p>
                            <p className='font-bold mb-2'>Subregion:
                                <span className='font-normal ml-1'>
                                    {country?.subregion}
                                </span>
                            </p>
                            <p className='font-bold mb-2'>Capital:
                                <span className='font-normal ml-1'>
                                    {country?.capital}
                                </span>
                            </p>
                        </div>
                        <div className='dark:text-pureWhite mb-8'>
                            <p className='font-bold mb-2'>Top Level Domain:
                                <span className='font-normal ml-1'>
                                    {country?.tld}
                                </span>
                            </p>
                            <p className='font-bold mb-2'>Currencies:
                                <span className='font-normal ml-1'>
                                    {country?.currencies?.[Object.keys(country?.currencies)[0]].name}
                                </span>
                            </p>
                            <p className='font-bold mb-2'>Languages: {
                                    country?.languages && Object.keys(country?.languages).map((language, index) => {
                                        return (
                                            <span key={index} className='font-normal mr-2'>{country?.languages?.[language]},</span>
                                        )
                                    })
                                }</p>
                        </div>
                        <div className='dark:text-pureWhite'>
                            <p className='font-bold'>Borders: </p>
                            <div className='flex flex-wrap gap-3'>
                                {
                                    bordersCountries && bordersCountries.map((border) => {
                                        return (
                                            <Link href={`/country-details/${border.name.official}`} key={border.name.official} className='shadow-md py-1 px-4 dark:bg-darkBlue'>{border.name.common}</Link>
                                        )
                                    }) || 'No Borders'
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}