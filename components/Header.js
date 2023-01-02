import Image from "next/image";

import {
    HomeIcon,
    CheckBadgeIcon,
    BuildingLibraryIcon,
    BoltIcon,
    MagnifyingGlassIcon,
    UserIcon,
  } from "@heroicons/react/24/outline";
import HeaderItems from "./HeaderItems";

  
function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center height-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
      <HeaderItems Title="HOME" Icon={HomeIcon} />
      <HeaderItems Title="TRENDING" Icon={BoltIcon} />
      <HeaderItems Title="VERIFIED" Icon={CheckBadgeIcon} />
      <HeaderItems Title="COLLECTIONS" Icon={BuildingLibraryIcon} />
      <HeaderItems Title="SEARCH" Icon={MagnifyingGlassIcon} />
      <HeaderItems Title="ACCOUNT" Icon={UserIcon} />
      
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt=""
      />

    </header>
  )
}
export default Header