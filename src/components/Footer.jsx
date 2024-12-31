import { resourcesLinks , platformLinks, communityLinks } from "../constants"
const Footer = () => {
  return (
    <footer className="py-10 mt-20 ml-5 border--t border-neutral-700">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            <div>
                <h3 className="mb-4 font-semibold text-md">Resources</h3>
                <ul className="space-y-2">
                    {resourcesLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className="text-neutral-300 hover:text-white">{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="mb-4 font-semibold text-md">Platform</h3>
                <ul className="space-y-2">
                    {platformLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className="text-neutral-300 hover:text-white">{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="mb-4 font-semibold text-md">Commuinity</h3>
                <ul className="space-y-2">
                    {communityLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className="text-neutral-300 hover:text-white">{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="mt-5 text-center text-neutral-600">Copyright-2024 AkilaS</div>
    </footer>
  )
}

export default Footer