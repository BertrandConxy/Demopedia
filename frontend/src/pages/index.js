import CountryCard from '../components/CountryCard'
import useGetCountries from '../hooks/useGetCountries'
import CircularProgress from '@mui/material/CircularProgress'

export default function Home() {
  const { loading, countries, count } = useGetCountries()
  console.log(countries)

  return (
    <div className="mt-10">
      {loading ? (
        <div className="flex flex-col justify-center items-center">
          <CircularProgress size={50} />
        </div>
      ) : count === 0 ? (
        <span className="text-lg font-bold">No Data Found</span>
      ) : (
        countries.map(({ country, area, id, totalPopulation }) => (
          <CountryCard
            area={area}
            id={id}
            key={id}
            population={totalPopulation}
            name={country}
          />
        ))
      )}
    </div>
  )
}
