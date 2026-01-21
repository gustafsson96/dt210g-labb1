import banner from "../assets/images/banner.jpg"

// Header containing title and banner image, both with inline styling
function Header({title}: { title: string}) {
    return (
        <>
            <header>
                <h1 style={{textAlign: "center", fontSize: "2.5em", fontFamily: "Tahoma, Verdana, Segoe UI, Arial, sans-serif" }}>{title}</h1>
                <img src={banner} alt="Tjej med hantlar som gör en tricepsövning" style={{ width: "100%", height: "auto" }} />
            </header>
        </>
    )
}

export default Header

