
import Button from "./button";
import SearchBar from "./searchbar";

export default function Navigation() {
  return (
    <div className="flex flex-col items-left justify-center font-sans text-black bg-[#ffffff] min-w-screen px-20 py-10">

      <div className="absolute right-30 top-30 transform -translate-y-1/2 font-bold text-lg">
        {new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>

      <div className="relative my-10">

        {/* Buttons */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4">
          <ul>
            <li className="mb-2">
              <Button variant="secondary">Add a new Site</Button>
            </li>
            <li className="mb-2">
              <Button variant="outline">Logout</Button>
            </li>
          </ul>
        </div>

        {/* Searchbar */}
        <div className="mx-auto">
          <SearchBar />
        </div>

      </div>


    </div>
  );
}