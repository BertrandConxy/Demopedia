import Back from '../Common/Back'

export default function Details({ name, area, population, year }) {
  return (
    <div className="bg-white p-4 flex flex-col justify-between border border-1 border-gray-200 shadow-sm">
      <div className="flex items-end">
        <Back />
        <h2 className="font-bold">Country Details</h2>
      </div>
      <div className="my-5 pl-8">
        <p className="text-lg font-bold mb-3">
          Country Name: <span className="font-light">{name}</span>
        </p>
        <p className="text-lg font-bold mb-3">
          Year Recorded: <span className="font-light">{year}</span>
        </p>
        <p className="text-lg font-bold mb-3">
          Area: <span className="font-light">{area} km²</span>
        </p>
        <p className="text-lg font-bold mb-3">
          Total Population:{' '}
          <span className="font-light">{population} people</span>
        </p>
      </div>
    </div>
  )
}
