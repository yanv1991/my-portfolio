import Link from "next/link";

const Navbar = (): JSX.Element => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Yaser's Portfolio
        </Link>
      </div>
      <a href="" className="cta-btn">Resume</a>
    </div>
  )
}

export default Navbar;