import { Banner, DarkThemeToggle, Navbar } from 'flowbite-react'
import logo from '../../logo.png'

const HeaderWrapper = () => <>
    <Banner className="bg-yellow-200 text-center text-xs p-2">This site is under development.</Banner>
    <Navbar fluid>
        <Navbar.Brand href="/">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="SEBP Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Software Engineering Best Practices</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Navbar.Link href="/" active>Home</Navbar.Link>
            <Navbar.Link href="/">About</Navbar.Link>
            <Navbar.Link href="/">Contact</Navbar.Link>
            <Navbar.Link href={'javascript:void(0);'}>
                <DarkThemeToggle className="p-0" />
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
</>


export default HeaderWrapper