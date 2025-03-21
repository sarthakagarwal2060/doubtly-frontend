import React from 'react'
import { Mail, Calendar } from 'lucide-react';
import { Avatar, Card, Text, Separator, Button } from '@radix-ui/themes'

function UserInfo({userDetails}) {
  return (
    <>
      <Card >
        <div className='flex flex-col items-center justify-center py-6 px-10'>

          <div className='p-5'>
            <Avatar src={userDetails.image} fallback={userDetails.name[0]} color="blue" size="6" radius='large'></Avatar>
          </div>
          <h1 className='font-bold text-2xl'>{userDetails.name}</h1>

          {/* <div className='flex gap-4 mt-4'>
            <Button color='gray' size="3">XXXX</Button>
            <Button color='gray' size="3">XXXX</Button>
          </div> */}

          <Separator size="4" className='m-8'/>

          <div className="w-full space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="text-gray-900 h-4 w-4" />
              <span className="text-sm">{userDetails.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="text-gray-900 h-4 w-4" />
              <span className="text-sm">Joined {userDetails.joinedDate}</span>
            </div>
          </div>

          <Separator size="4" className='m-8'/>

          <div className="flex gap-8 w-full text-center">
            <div>
              <p className="text-xl font-bold">{userDetails.doubts}</p>
              <Text className="text-xs text-gray-900">Doubts</Text>
            </div>
            <div>
              <p className="text-xl font-bold">{userDetails.answers}</p>
              <Text className="text-xs text-gray-900">Answers</Text>
            </div>
            <div>
              <p className="text-xl font-bold">{userDetails.points}</p>
              <Text className="text-xs text-gray-900">Points</Text>
            </div>
          </div>    
        </div>
      </Card>
    </>
  )
}

export default UserInfo