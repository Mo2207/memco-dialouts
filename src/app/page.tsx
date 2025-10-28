
import Button from "./components/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center">

      <div className="flex flex-col items-center justify-center font-sans bg-gray-300 max-w-100 text-black">

        {/* Enter Username */}
        <div className="flex flex-col">
          <h2>Username:</h2>
          <input type="text" />
        </div>

        {/* Enter Password */}
        <div className="flex flex-col">
          <h2>Password:</h2>
          <input type="text" />
        </div>

        {/* Submit Button */}
        <div>
          <Button href="./home-page" variant="secondary">Login</Button>
        </div>

      </div>
    </div>
  );
}
