import { Flowbite } from 'flowbite-react'
import './App.css'
import ContentWrapper from './components/ContentWrapper'
import FooterWrapper from './components/FooterWrapper'
import HeaderWrapper from './components/HeaderWrapper'

function App() {
    return (
        <Flowbite>
            <div className="flex min-h-svh flex-col">
                <HeaderWrapper />
                <ContentWrapper />
                <FooterWrapper />
            </div>
        </Flowbite>
    )
}

export default App
