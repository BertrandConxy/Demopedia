import Divider from '@mui/material/Divider'
import Button from '../Common/Button'
import Link from 'next/link'

export default function CountryCard() {
  return (
    <div className="bg-white p-4 flex justify-between border border-1 border-gray-200 shadow-sm">
      <div>
        <h2 className="text-2xl font-extrabold">Albania</h2>
        <span className="text-blue-400 font-light">Area: 26,340 km²</span>

        <div className="mt-5 flex h-8">
          <button className="text-blue-400 font-light hover:text-blue-700">
            Delete
          </button>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            className="mx-2"
          />
          <button className="text-blue-400 font-light hover:text-blue-700">
            Edit
          </button>
        </div>
      </div>
      {/* Divider */}
      <Divider orientation="vertical" flexItem />
      <div className="flex flex-col mx-8 items-start">
        <h3 className="text-lg font-light text-gray-400">Total Population:</h3>
        <span className="text-lg font-light">34000000 people</span>
        <Link href={`/details/1`}>
          <Button text="More Details" />
        </Link>
      </div>
    </div>
  )
}
