import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/aiSaas.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20">
        <h2 className="mt-6 text-3xl tracking-wide text-center sm:text-5xl lg:text-6xl">
            Accelerating your 
            <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-900 bg-clip-text">
                 {" "}Business workflow. </span></h2>
            <div className="flex flex-wrap justify-center ">
                <div className="w-full p-2 mt-5 border border-purple-700 rounded-lg border- lg:w-1/2 shadow-purple-400">
                <img src={codeImg} alt="codeImage" />
                </div>
                <div className="w-full pt-12 lg:w-1/2">
                {checklistItems.map ((item,index) => (
                    <div key={index} className="flex mb-12">
                        <div className="items-center justify-center w-10 h-10 p-2 mx-6 text-green-500 rounded-full bg-neutral-900">
                            <CheckCircle2 />
                        </div>
                        <div>
                            <h5 className="mt-1 mb-2 text-xl"> {item.title}</h5>
                            <p className="text-md text-neutral-500">{item.description}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
    </div>
  )
}

export default Workflow