import Profile from './Profile';
import Sidebar from '../../../components/Sidebar';
import DropdownButton from '../../../components/DropDownButton';


export default function Userprofile() {
  return (
    <div>
    <main className='flex min-h-screen max-w-7xl mx-auto pt-1'>
        {/* Sidebar */}
        <Sidebar/>

        {/* Profile */}
        <Profile/>

        {/* DropDownButton */}
        <DropdownButton/>
    </main>
    </div>
  )
}
