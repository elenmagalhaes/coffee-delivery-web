import { Banner } from '../../components/Banner'
import './styles.scss'

export const Home = () => {
  return (
    <main className="homepage">
      <Banner />
      <section className="body">Página inicial</section>
    </main>
  )
}
