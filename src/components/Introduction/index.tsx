const Introduction = () => {
    return (
        <div className="p-4 text-gray-900 dark:text-gray-300">
            <p className="my-4">
                When we talk about Software Development Life Cycle (SDLC), it involves multiple different phases.
                Let&apos;s understand each phase quickly.
            </p>
            <ul className="my-4">
                <li className="my-4">
                    <b>Planning:</b>
                    <ul>
                        <li>What it is: Figuring out what the software needs to do and how to make it happen.</li>
                        <li>Why it matters: This sets the groundwork for the entire project, making sure everyone is on
                            the same page.
                        </li>
                    </ul>
                </li>
                <li className="my-4">
                    <b>Requirements Gathering and Analysis:</b>
                    <ul>
                        <li>What it is: Talking to people (like users and stakeholders) to find out exactly what
                            features and functions they want.
                        </li>
                        <li>Why it matters: Clear requirements help avoid misunderstandings later on.</li>
                    </ul>
                </li>
                <li className="my-4">
                    <b>Design:</b>
                    <ul>
                        <li>What it is: Creating a blueprint for the software, deciding how it will look and work.</li>
                        <li>Why it matters: A good design helps developers know exactly what to build.</li>
                    </ul>
                </li>
                <li className="my-4">
                    <b>Implementation (or Development):</b>
                    <ul>
                        <li>What it is: Writing the actual code to create the software.</li>
                        <li>Why it matters: This is where the ideas and designs become a working product.</li>
                    </ul>
                </li>
                <li className="my-4">
                    <b>Testing:</b>
                    <ul>
                        <li>What it is: Checking the software to find and fix any problems or bugs.</li>
                        <li>Why it matters: Testing ensures that the software works properly and meets users’ needs.
                        </li>
                    </ul>
                </li>
                <li className="my-4">
                    <b>Deployment:</b>
                    <ul>
                        <li>What it is: Launching the software so that users can start using it.</li>
                        <li>Why it matters: This is when all the hard work pays off and users get to experience the new
                            software.
                        </li>
                    </ul>
                </li>
                <li className="my-4">
                    <b>Maintenance:</b>
                    <ul>
                        <li>What it is: Ongoing support for the software after it’s launched, including fixing any
                            issues and making improvements.
                        </li>
                        <li>Why it matters: Software needs to adapt and improve over time based on user feedback and
                            changing needs.
                        </li>
                    </ul>
                </li>
            </ul>
            <p>
                As we are working as a team, we need to a do lot of collaboration and manual work. And there are a lot
                of things which may go wrong which could result in project failure, bugs or poor quality software which
                is not efficient. These things can also affect the delivery dates and business targets.
            </p>
            <p className="my-4">
                So what&apos;s the solution? As you guessed correctly, we need to optimize these things by following
                some guidelines or standard practices, and we call them best practices.
            </p>
        </div>
    )
}

export default Introduction