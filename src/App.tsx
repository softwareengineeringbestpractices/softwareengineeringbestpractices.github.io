import './App.css'
import { Flowbite } from 'flowbite-react'
import FooterWrapper from './components/FooterWrapper'
import HeaderWrapper from './components/HeaderWrapper'
import ContentWrapper from './components/ContentWrapper'


function App() {
    return (
        <Flowbite>
            <div className="flex flex-col min-h-svh">
                <HeaderWrapper />
                <ContentWrapper />
                <FooterWrapper />
            </div>
        </Flowbite>
    )
}

export default App
