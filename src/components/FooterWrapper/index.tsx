import { Footer } from 'flowbite-react'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const FooterWrapper = () => <Footer container className="rounded-none">
    <div className="w-full">
        <Footer.Divider />
        <div className="border-0 w-full px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Sumit Suresh Jadhav™" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="#" icon={BsGithub} />
                <Footer.Icon href="#" icon={BsLinkedin} />
            </div>
        </div>
    </div>
</Footer>


export default FooterWrapper;