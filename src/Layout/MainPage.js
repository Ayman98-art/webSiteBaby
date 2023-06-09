import BasicNav from '../App';
import { Outlet } from 'react-router-dom';
import UpToNav from '../components/UpToNav/upToNav';


function MainPage() {
  return (
    <>
    <UpToNav />
    <BasicNav/>
    < Outlet/>
    </>
  )
}

export default MainPage;