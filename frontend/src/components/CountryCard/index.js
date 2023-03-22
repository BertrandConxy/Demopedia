export default function CountryCard() {
  return (
    <div className="bg-white p-4 flex justify-between border border-1 border-gray-200 shadow-sm">
      <div>
        <h2 className="text-2xl font-extrabold">Albania</h2>
        <span className="text-blue-300 font-light">Area: 26,340 km²</span>

        <div className="mt-5 flex">
          <button className="text-blue-300 font-light">Delete</button>
          <button className="text-blue-300 font-light">Edit</button>
        </div>
      </div>
      {/* Divider */}
      <div className="flex flex-col mx-8 items-start">
        <h3 className="text-lg font-light text-gray-400">Total Population:</h3>
        <span className="text-lg font-light">34000000 people</span>
        <button className=" mt-2 px-8 py-1 bg-blue-400 text-white font-light text-md">
          More Details
        </button>
      </div>
    </div>
  )
}
