import React from 'react'
import Sidebar from '../../../components/Sidebar'
import Friends from './Friends'

import DropdownButton from '../../../components/DropDownButton'

export default function Userfriends() {
  return (
    <div>
        <main className='flex min-h-screen max-w-7xl mx-auto pt-1 '>
            {/* Sidebar */}
            <Sidebar/>

            {/* Friends */}
            <Friends/>

            {/* DropDownButton */}
            <DropdownButton/>

        </main>
    </div>
  )
}
