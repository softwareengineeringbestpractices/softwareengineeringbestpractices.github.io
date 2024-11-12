import { Banner, DarkThemeToggle, Navbar } from 'flowbite-react'
import logo from '../../logo.png'

const HeaderWrapper = () => (
    <div className="shadow">
        <div className="container mx-auto max-w-5xl">
            <Banner className="bg-yellow-200 p-2 text-center text-xs">This site is under development.</Banner>
            <Navbar fluid className="p-4">
                <Navbar.Brand href="/">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="SEBP Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Software Engineering Best Practices
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link className="hidden" href="/" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link className="hidden" href="/">
                        About
                    </Navbar.Link>
                    <Navbar.Link className="hidden" href="/">
                        Contact
                    </Navbar.Link>
                    <Navbar.Link href={'javascript:void(0);'}>
                        <DarkThemeToggle className="p-0" />
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </div>
)

export default HeaderWrapper
