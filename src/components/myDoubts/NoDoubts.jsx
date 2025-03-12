import React from "react";

function NoDoubts() {
  return (
    <>
      <main className="pt-16 pl-72 pr-8 h-screen bg-primary ">
        <div className="container py-6 space-y-8 ">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">My Doubts</h1>
            </div>
          </div>
          <h4 className="text-md font-semibold text-textSecondary">
            No doubts posted yet...
          </h4>
        </div>
      </main>
    </>
  );
}

export default NoDoubts;
