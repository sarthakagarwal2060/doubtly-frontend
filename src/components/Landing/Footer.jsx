import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="border-t px-20 md:px-32 bg-white py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              
              <span className="font-semibold text-xl">Doubtly</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link to="#" className="hover:underline hover:text-primary">Terms</Link>
              <Link to="#" className="hover:underline hover:text-primary">Privacy</Link>
              <Link to="#" className="hover:underline hover:text-primary">About</Link>
              <Link to="#" className="hover:underline hover:text-primary">Contact</Link>
            </div>
            <div>
                <span className="font-semibold text-white">Doubtly</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer