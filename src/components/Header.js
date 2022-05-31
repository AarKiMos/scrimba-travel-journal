import logo from "../images/journal-logo.png"

export default function Header() {
    return (
        <header className="main-header">
            <img src={logo} alt="journal-logo"/>
            <h1>My Travel Journal</h1>
        </header>
    )
}