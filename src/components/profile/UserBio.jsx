import { Card, Text, Button } from "@radix-ui/themes";
import { Save, Edit } from "lucide-react";
import React from "react";

function UserBio({userDetails}) {
  return (
    <>
    <div className='mb-4'>
      <Card>
        <div className="px-3 py-3">
            <div className="flex items-center justify-between mb-6">
            <div>
                <h2 className="font-semibold text-xl">About Me</h2>
                <Text className="text-xs text-gray-700 ">Your personal bio and information</Text>
            </div>
            <Button variant="ghost" size="icon">
                <Edit className="h-5 w-5" color="black" />
            </Button>
            </div>
            <div>
                <Text className="text-sm text-black">{userDetails.bio}</Text>
            </div>
        </div>
      </Card>
    </div>
    </>
  );
}

export default UserBio;
