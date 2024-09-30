import building from '../../images/building-website.svg'
import Index from '../Index'

const ContentWrapper = () => <div className="flex-1 min-h-48 justify-center overflow-hidden shadow">
    <div className="flex max-w-5xl mx-auto py-8">
        <Index />
        <div className="flex-1">
            <img className="mx-auto" src={building} alt="under development" width={400} />
        </div>
    </div>
</div>


export default ContentWrapper