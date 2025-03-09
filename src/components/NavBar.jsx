import React, { useState } from "react";
import { Search, Bell, Menu, ChevronLeft } from "lucide-react";
import { DropdownMenu, Button, Avatar } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

function NavBar({doubtly, searchBar, notification, profile}) {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);
  const Logout = ()=> {
    setLogout(true) ;
    localStorage.removeItem("token");
    navigate("/");
  } ;
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between bg-primary px-4 border-b border-borderColor">
        {doubtly ? <div className="font-bold text-2xl">Doubtly</div> : <div className="font-bold text-2xl cursor-pointer"  onClick={() => navigate("/dashboard")}><ChevronLeft/></div>}
        {searchBar && 
          <div className="flex-1 flex items-center justify-center max-w-2xl">
            <div className="w-full flex items-center space-x-2">
              <div className="relative w-full">
                <Search className="absolute left-3 top-2.5 h-4 w-4" />
                <input
                  placeholder="Search doubts..."
                  className="w-full pl-9 h-9 rounded-md bg-gray-100 px-3 py-1 text-base shadow-sm focus-visible:outline-zinc-800 focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 "
                />
              </div>
            </div>
          </div>
        }
        {notification && profile &&
          <div className="flex items-center gap-6">
            <button className="h-full w-full">
              <Bell className="h-4 w-4" />
            </button>

            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full" color="blue">
                  <Avatar
                    // src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                    fallback="A"
                  />
                  {/* <Avatar fallback="A" /> */}
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="w-56" align="end" color="blue">
                <DropdownMenu.Label className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none ">john@example.com</p>
                  </div>
                </DropdownMenu.Label>
                <DropdownMenu.Separator />
                <DropdownMenu.Item className="hover:bg-gray-100 hover:text-black" onClick={()=> {navigate("/dashboard/profile")}}>Profile</DropdownMenu.Item>
                <DropdownMenu.Item className="hover:bg-gray-100 hover:text-black">Settings</DropdownMenu.Item>

                {/* <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                  <DropdownMenu.SubContent>
                    <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                    <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
                  </DropdownMenu.SubContent>
                </DropdownMenu.Sub> */}

                <DropdownMenu.Separator />
                <DropdownMenu.Item className="hover:bg-gray-100 hover:text-black">Share</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item color="red" onClick={Logout}>Log Out</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        }
      </nav>
    </>
  );
}

export default NavBar;
