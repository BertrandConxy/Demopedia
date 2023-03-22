import Divider from '@mui/material/Divider'
import Button from '../Common/Button'
import Link from 'next/link'
import useDeleteCountry from '../../hooks/useDeleteCountry'

export default function CountryCard({ id, name, area, population }) {
  const { deleteCountry } = useDeleteCountry()

  const handleDelete = () => {
    deleteCountry(id).then(() => {
      window.location.reload()
    })
  }
  return (
    <div className="bg-white p-4 flex justify-between border border-1 border-gray-200 shadow-sm mb-6">
      <div>
        <h2 className="text-2xl font-extrabold">{name}</h2>
        <span className="text-blue-400 font-light">Area: {area} km²</span>

        <div className="mt-5 flex ">
          <button
            className="text-blue-400 font-light hover:text-blue-700"
            onClick={handleDelete}
          >
            Delete
          </button>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            className="mx-2"
          />
          <Link href={`/edit/${id}`}>
            <button className="text-blue-400 font-light hover:text-blue-700">
              Edit
            </button>
          </Link>
        </div>
      </div>
      {/* Divider */}
      <Divider orientation="vertical" flexItem />
      <div className="flex flex-col mx-8 items-start">
        <h3 className="text-lg font-light text-gray-400">Total Population:</h3>
        <span className="text-lg font-light">{population} people</span>
        <Link href={`/details/${id}`}>
          <Button text="More Details" />
        </Link>
      </div>
    </div>
  )
}
