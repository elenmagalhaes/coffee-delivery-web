import { Outlet } from 'react-router-dom'
import { Banner } from '../../components/Banner'
import { Header } from '../../components/Header'

export const WrapperLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Banner />
      <Outlet />
    </div>
  )
}
