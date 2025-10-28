
import Button from "../components/button";

export default function BuildingDetails() {
  return (
    <div className="flex flex-col items-left justify-center font-sans text-black bg-slate-200 min-w-screen px-20 py-10">
      
      <div>
        <ul>

            <li className="mb-2">
                <Button href="../" variant="outline">Return to Dailouts</Button>
            </li>

        </ul>
      </div>

    </div>
  );
}