import Link from "next/link"
function Navbar() {
    return (
        <div style={{ background: "white", color: "black", width: "100%",}}>
            <br />
            <Link href="/">
                Home
            </Link> <br />
            <Link href="/about">
                About
            </Link> <br />
            <Link href="/sport">
                Sport
            </Link>
            <hr />
        </div>
    )
}

export default Navbar