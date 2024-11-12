import { Sidebar } from 'flowbite-react'
import {
    HiBeaker,
    HiChartBar,
    HiCloud,
    HiCode,
    HiQuestionMarkCircle,
    HiSwitchHorizontal,
    HiViewBoards
} from 'react-icons/hi'

const Index = () => (
    <div className="w-64 px-4 overflow-hidden">
        <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="" icon={HiQuestionMarkCircle}>
                        Introduction
                    </Sidebar.Item>
                    <Sidebar.Item className="hidden" href="#" icon={HiSwitchHorizontal}>
                        Process
                    </Sidebar.Item>
                    <Sidebar.Item className="hidden" href="#" icon={HiViewBoards}>
                        Collaboration
                    </Sidebar.Item>
                    <Sidebar.Item href="#development-best-practices" icon={HiCode}>
                        Development
                    </Sidebar.Item>
                    <Sidebar.Item href="#testing-best-practices" icon={HiBeaker}>
                        Testing
                    </Sidebar.Item>
                    <Sidebar.Item href="#deployment-best-practices" icon={HiCloud}>
                        Deployment
                    </Sidebar.Item>
                    <Sidebar.Item href="#obervability-best-practices" icon={HiChartBar}>
                        Observability
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    </div>
)

export default Index