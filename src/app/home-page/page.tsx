
import Button from "../components/button";
import Navigation from "../components/navigation";
import Menu from "../components/menu";
import BuildingCard from "../components/building-card";

export default function HomePage() {
    return (
        <div className="bg-white min-h-screen min-w-screen">
            <div className="flex flex-col justify-center items-center">

                <Navigation />
                <Menu />
                <ul>
                    <li className="pb-2"><BuildingCard /></li>
                    <li className="pb-2"><BuildingCard /></li>
                    <li className="pb-2"><BuildingCard /></li>
                    <li className="pb-2"><BuildingCard /></li>
                    <li className="pb-2"><BuildingCard /></li>
                </ul>
            </div>
        </div>);
}