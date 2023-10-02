import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
        <div className="">
            <Link href="/" className="">Main page</Link>
            <Link href="/add_song" className="">Add song</Link>
            <Link href="/edit_song" className="">Edit song</Link>
        </div>
    </nav>
  )
}

export default Navbar