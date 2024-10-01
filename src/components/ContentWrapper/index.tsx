import building from '../../images/building-website.svg'
import Index from '../Index'
import Why from '../Why'
import { HR } from 'flowbite-react'
import Quote from '../Quote'

const ContentWrapper = () => <div className="flex-1 min-h-48 justify-center overflow-hidden shadow">
    <div className="flex max-w-5xl mx-auto py-8">
        <Index />
        <div className="flex-1 px-8">
            <Quote />
            <Why />
            <HR.Trimmed />
            <img className="mx-auto my-16" src={building} alt="under development" width={400} />
        </div>
    </div>
</div>


export default ContentWrapper