import { Button } from "@radix-ui/themes";
import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
  return (
    <>
    <nav className="sticky top-0 z-50">
      <div className="px-20 md:px-32 border-b-[1px] bg-white">
        <div className="px-6 pt-4 pb-2">
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl font-bold ">Doubtly</h1>
            </div>
            <div className="flex gap-4 text-md">
              <Button size="3" color="transparent" variant="soft" onClick={() => navigate("/login")}> Log in </Button>
              <Button size="3" color="blue" onClick={() => navigate("/signup")}> Sign up </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

export default NavBar;
