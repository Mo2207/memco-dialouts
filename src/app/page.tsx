
import Navigation from './components/navigation';
import BuildingCard from './components/building-card';
import Menu from './components/menu';

export default function Home() {
  return (
    <div className="flex-col min-h-screen min-w-screen items-center justify-center font-sans bg-white">
      <Navigation/>
      <Menu/>
      <BuildingCard/>
    </div>
  );
}
