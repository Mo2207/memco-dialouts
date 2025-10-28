
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
                <h2>icon here</h2>
                <Button href="/building-details">Details</Button>
            </div>
        </li>
        
        {/* Building Info */}
        <li>
            <ul> 
                <li>Type:</li>
                <li>License Owner's Name:</li>
                <li>License Site's Name:</li>
                <li>Name/Tag:</li>
            </ul>
        </li>
        
        {/* City/Province */}
        <li>
            <ul>
                <li>City:</li>
                <li>Province:</li>
            </ul>
        </li>
        
        {/* URL */}
        <li>
            URL here
        </li>
        
        {/* Connection Status */}
        <li>
            <ul>
                <li>Status:</li>
                <li>connection status here</li>
            </ul>
        </li>
        
        {/* WebCTRL Login Info */}
        <li>
            <ul>
                <li>User:</li>
                <li>Password:</li>
                <li>Date Changed:</li>
                <li>(YYYY-MM-DD):</li>
            </ul>
        </li>


      </ul>

    </div>
  );
}