import Link from 'next/link'
import Button from '../Common/Button'
export default function NavBar() {
  return (
    <div className="h-[4rem] flex bg-white items-center justify-between px-8">
      <div className="flex">
        <h1 className="text-blue-400 text-2xl font-bold">Demopedia</h1>
        <Link
          href="/"
          className="ml-5 mt-[0.4rem] text-gray-500 font-light hover:text-gray-700"
        >
          Countries
        </Link>
      </div>
      <Link href={`/add`} className="justify-self-end">
        <Button text="Add Country" />
      </Link>
    </div>
  )
}
