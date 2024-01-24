import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function PlanCard() {
  return (

          <div className=" border rounded rh-[350px] w-full pointer mr-3">
            <div className="rounded bg-gradient-to-r from-cyan-500 to-blue-500 w-full p-3 text-white font-bold">
              <h3 className="text-2xl">Basic</h3>
              <p className="font-light">$5.00</p>
            </div>

            <div className="border-b py-4 flex       text-reg items-center ">
              <div className="w-6 h-6 rounded-full text-5m bg-cyan-500 flex items-center justify-center">
                <CheckIcon color="white" width={15} fontWeight={900} />
              </div>
              <div className="ml-3">
                <h3 className="text-gray-600">Monthly Price </h3>
                <h3 className="font-semibold">$5.00</h3>
              </div>
            </div>

            <div className="border-b py-4 flex       text-reg items-center ">
              <div className="w-6 h-6 rounded-full text-5m bg-cyan-500 flex items-center justify-center">
                <CheckIcon color="white" width={15} fontWeight={900} />
              </div>
              <div className="ml-3">
                <h3 className="text-gray-600">Download </h3>
                <h3 className="font-semibold">Included</h3>
              </div>
            </div>

            <div className="border-b py-4 flex       text-reg items-center ">
              <div className="w-6 h-6 rounded-full text-5m bg-cyan-500 flex items-center justify-center">
                <CheckIcon color="white" width={15} fontWeight={900} />
              </div>
              <div className="ml-3">
                <h3 className="text-gray-600">South Park </h3>
                <h3 className="font-semibold">Included</h3>
              </div>
            </div>



          </div>
        
  )
}
