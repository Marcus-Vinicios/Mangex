import Link from "@/hooks/Link";

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between bg-[#444] text-white p-2'>
      <span className='font-bold text-[1.5rem]'>Mangex</span>
      <ul className='flex justify-between gap-4 font-bold'>
        <li>
          <Link href={'/'} >Dashboard</Link>
        </li>
        <li>
          <Link href={'/lists/create'} >Criar Lista</Link>
        </li>
      </ul>
    </nav>
  )
}
