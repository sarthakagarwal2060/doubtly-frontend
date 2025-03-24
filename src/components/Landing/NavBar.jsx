import { Button } from "@radix-ui/themes";
import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
  return (
    <>
      <nav>
        <div className="px-6 py-3 border-b-[1px]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-2xl font-bold ">Doubtly</h1>
            </div>
            <div className="flex gap-4 text-md">
              <Button size="2" color="transparent" variant="soft" onClick={() => navigate("/login")}> Log in </Button>
              <Button size="2" color="blue" onClick={() => navigate("/signup")}> Sign up </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
