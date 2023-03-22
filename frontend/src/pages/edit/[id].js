import { useRouter } from 'next/router'
import Form from '../../components/Common/Form'
import Back from '../../components/Common/Back'
import useGetCountry from '../../hooks/useGetCountry'

export default function CountryEdit() {
  const router = useRouter()
  const id = router.query.id
  const { loading, country } = useGetCountry(id)

  return (
    <div className="bg-white p-4 flex flex-col justify-between border border-1 border-gray-200 shadow-sm">
      <div className="flex items-end">
        <Back />
        <h2 className="font-bold">Edit Country Data</h2>
      </div>
      <div className="my-5 pl-8">
        <Form label="Update" Country={country} />
      </div>
    </div>
  )
}
