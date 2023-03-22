import Link from 'next/link'
export default function NavBar() {
  return (
    <div className="h-[4rem] flex bg-white items-center px-8">
      <h1 className="text-blue-400 text-2xl font-bold">Demopedia</h1>
      <Link href="/" className="ml-5">
        Countries
      </Link>
    </div>
  )
}
