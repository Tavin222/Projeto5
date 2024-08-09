import BotaoAdicionar from '../../components/BotaoCadastro'
import BarraLateral from '../../Containers/BarraLateral'
import ListaDeTarefas from '../../Containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltro />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
