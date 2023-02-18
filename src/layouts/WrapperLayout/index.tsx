import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export const WrapperLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  )
}
