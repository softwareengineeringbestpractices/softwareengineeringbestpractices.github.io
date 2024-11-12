import Index from '../Index'
import { HR } from 'flowbite-react'
import Introduction from '../Introduction'
import Skeleton from '../Skeleton'

const ContentWrapper = () => <div className="flex-1 min-h-48 justify-center overflow-hidden shadow">
    <div className="flex max-w-5xl mx-auto py-8">
        <Index />
        <div className="flex-1 px-8">
            <Introduction />
            <HR.Trimmed />
            
            <h2 id="development-best-practices" className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-300">Development</h2>
            <Skeleton />

            <HR.Trimmed />
            
            <h2 id="testing-best-practices" className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-300">Testing</h2>
            <Skeleton />
            
            <HR.Trimmed />

            <h2 id="deployment-best-practices" className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-300">Deployment</h2>
            <Skeleton />
            
            <HR.Trimmed />

            <h2 id="obervability-best-practices" className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-300">Observability</h2>
            <Skeleton />
            
            <HR.Trimmed />
        </div>
    </div>
</div>


export default ContentWrapper