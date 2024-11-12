import { Footer } from 'flowbite-react'
import { BsGithub, BsLinkedin, BsEnvelopeAtFill } from 'react-icons/bs'


const FooterWrapper = () => <Footer container className="rounded-none">
    <div className="container max-w-5xl mx-auto">
        <Footer.Divider />
        <div className="border-0 w-full px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Sumit Suresh Jadhav™" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon href="mailto:summit.jadhav@gmail.com" icon={BsEnvelopeAtFill} />
                <Footer.Icon href="https://github.com/sumitsj" target="_blank" icon={BsGithub} />
                <Footer.Icon href="https://www.linkedin.com/in/sumitsjadhav/" target="_blank" icon={BsLinkedin} />
            </div>
        </div>
    </div>
</Footer>


export default FooterWrapper;