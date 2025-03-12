import React from "react";

function WelcomeSec({username}) {
  return (
    <>
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-textSecondary">
          Welcome back
        </h4>
        <h1 className="text-3xl font-bold tracking-tight">Hello, {username}</h1>
        <p className="text-textSecondary">
          Keep solving doubts and earn points!
        </p>
      </div>
    </>
  );
}

export default WelcomeSec;
