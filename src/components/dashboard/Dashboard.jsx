import NavBar from "../NavBar";
import SideBar from "../SideBar";
import WelcomeSec from "./WelcomeSec";
import Stats from "./Stats";
import TrendingDoubts from "./TrendingDoubts";
import LatestDoubts from "./LatestDoubts";
import LeaderBoard from "./LeaderBoard";
export default function Dashboard() {
  return (
    <>
      <NavBar searchBar={true} />
      <SideBar />
      <main className="pt-16 pl-72 pr-8 bg-primary">
        <div className="container py-6 space-y-8 ">
          <WelcomeSec />

          <Stats />

          <div className="flex justify-between">
            <div className="w-[70%]">
              <TrendingDoubts />
              <LatestDoubts />
            </div>

            <div className="w-[27.5%]">
              <LeaderBoard />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
