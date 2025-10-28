
import Button from "../components/button";

export default function BuildingDetails() {
  return (
    <div className="bg-white min-h-screen min-w-screen">
      <div className="flex flex-col items-left justify-top text-black px-5 py-5">

        <div>
          <ul>

            <li className="mb-40 mt-20">
              <Button href="../home-page" variant="outline">Return to Dailouts</Button>
            </li>

          </ul>
        </div>

        <ul>
          <li className="pb-15">
            <div className="flex flex-col items-left text-black bg-slate-200">
              <h2 className="font-bold text-lg pb-3">Building Info</h2>
              <ul className="flex justify-between w-full px-20 py-3 ">
                <li>
                  <h3>Building Name:</h3>
                  <p>name here</p>
                </li>
                <li>
                  <h3>Building Type:</h3>
                  <p>type here</p>
                </li>
                <li>
                  <h3>Full Address:</h3>
                  <p>address here, maybe link to google maps</p>
                </li>
                <li>
                  <h3>Site Contact Info:</h3>
                  <p>info here</p>
                </li>
              </ul>
            </div>
          </li>

          <li  className="pb-15">
            <div className="flex flex-col items-left text-black bg-slate-200">
              <h2 className="font-bold text-lg pb-3">System Info</h2>
              <ul className="flex justify-between w-full px-20 py-3 ">
                <li>
                  <h3>Software/Patches:</h3>
                  <p>info here</p>
                </li>
                <li>
                  <h3>License Info:</h3>
                  <p>info here</p>
                </li>
                <li>
                  <h3>Database Info:</h3>
                  <p>info here</p>
                </li>
                <li>
                  <h3>Who Supplied PC?</h3>
                  <p>info here</p>
                </li>
                <li>
                  <h3>DELL Info:</h3>
                  <p>info here</p>
                </li>
                <li>
                  <h3>IT Contact Info:</h3>
                  <p>contact info here</p>
                </li>
              </ul>
            </div>
          </li>

          <li  className="pb-15">
            <div className="flex flex-col items-left text-black bg-slate-200">
              <h2 className="font-bold text-lg pb-3">Connection Info</h2>
              <ul className="flex justify-between w-full px-20 py-3 ">
                <li>
                  <h3>URL:</h3>
                  <p>url here</p>
                </li>
                <li>
                  <h3>Terminal Sessions:</h3>
                  <ul>
                    <li>IP: 12345</li>
                    <li>PC Name: name here</li>
                    <li>Username: name here</li>
                    <li>Password: password123</li>
                  </ul>
                </li>
                <li>
                  <h3>How to Connect:</h3>
                  <p>blah blah blah</p>
                </li>
                <li>
                  <h3>Connection Status:</h3>
                  <p>status here</p>
                </li>
              </ul>
            </div>
          </li>

        </ul>

      </div>
    </div>
  );
}