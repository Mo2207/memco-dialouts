
import Image from "next/image";
import Button from './button';
import BuildingDetails from "../building-details/page";

export default function BuildingCard() {
  return (
    <div className="flex flex-row items-left justify-center font-sans text-black bg-slate-200 min-w-screen">
      
      <ul className="flex justify-between items-center w-full px-20 py-2">
        
        {/* Software Version */}
        <li className="">
            <div>
                <li>icon here</li>
                <Button href="/building-details">Details</Button>
            </div>
        </li>
        
        {/* Building Info */}
        <li>
            <div> 
                <li>Type:</li>
                <li>License Owner's Name:</li>
                <li>License Site's Name:</li>
                <li>Name/Tag:</li>
            </div>
        </li>
        
        {/* City/Province */}
        <li>
            <div>
                <li>City:</li>
                <li>Province:</li>
            </div>
        </li>
        
        {/* URL */}
        <li>
            URL here
        </li>
        
        {/* Connection Status */}
        <li>
            <div>
                <li>Status:</li>
                <li>connection status here</li>
            </div>
        </li>
        
        {/* WebCTRL Login Info */}
        <li>
            <div>
                <li>User:</li>
                <li>Password:</li>
                <li>Date Changed:</li>
                <li>(YYYY-MM-DD):</li>
            </div>
        </li>


      </ul>

    </div>
  );
}