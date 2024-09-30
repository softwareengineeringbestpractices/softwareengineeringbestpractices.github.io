import { List } from 'flowbite-react'
import { HiCheckCircle } from 'react-icons/hi'

function Index() {
    return (
        <div className="w-64 px-4">
            <List className="border-r-2">
                <List.Item icon={HiCheckCircle} className="hover:underline hover:cursor-pointer">Why?</List.Item>
                <List.Item icon={HiCheckCircle} className="hover:underline hover:cursor-pointer">Process</List.Item>
                <List.Item icon={HiCheckCircle} className="hover:underline hover:cursor-pointer">Version Control</List.Item>
                <List.Item icon={HiCheckCircle} className="hover:underline hover:cursor-pointer">Development</List.Item>
                <List.Item icon={HiCheckCircle} className="hover:underline hover:cursor-pointer">Testing</List.Item>
                <List.Item icon={HiCheckCircle} className="hover:underline hover:cursor-pointer">Deployment</List.Item>
                <List.Item icon={HiCheckCircle} className="hover:underline hover:cursor-pointer">Observability</List.Item>
            </List>
        </div>
    )
}

export default Index