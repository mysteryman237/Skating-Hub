import { Link, Outlet } from "react-router-dom"
import { navStyles } from "../components/navComponents/navStyles"
import { TbCameraHeart } from "react-icons/tb"


function AuthLayOut(){

return(
    <>
    <header className="px-6 bg-transparent">
        <Link to="/" className="inline-flex items-center gap-2" aria-label="SNOMIA home">
          <TbCameraHeart size={35} color="blue" aria-hidden="true" />
          <span className={navStyles.logoText}>SNOMIA</span>
        </Link>
      </header>
    <main className="min-h-dvh relative overflow-hidden">
        < Outlet />
    </main>
    <img src="/images/snowBG.webp" width="1920px" alt="a wall of snow"  aria-hidden="true"
    className="fixed inset-0 h-full w-full object-cover -z-10" />
    </>
)
}
export default AuthLayOut