import Details from '../../components/Details'
import { useRouter } from 'next/router'
import useGetCountry from '../../hooks/useGetCountry'
import CircularProgress from '@mui/material/CircularProgress'

export default function CountryDetails() {
  const router = useRouter()
  const id = router.query.id

  const { loading, country } = useGetCountry(id)
  const { area, country: name, totalPopulation, year } = country

  return (
    <div className="mt-10">
      {loading ? (
        <div className="flex flex-col justify-center items-center">
          <CircularProgress size={50} />
        </div>
      ) : (
        <Details
          area={area}
          name={name}
          population={totalPopulation}
          year={year}
          key={year}
        />
      )}
    </div>
  )
}
