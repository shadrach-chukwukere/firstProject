import { Outlet } from 'react-router-dom'
import FooterComponent from '../component/Footer'
import HeaderComponent from '../component/Header'

export default function MainLayout() {
  return (
    <div>
           <HeaderComponent/>
           <Outlet/>
           <FooterComponent/>
           
    </div>
  )
}
