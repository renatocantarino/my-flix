import Menu from '../../components/menu';
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import dadosIniciais from '../../data/dados_iniciais.json';

export default function Home() {
  return (
    <div>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={dadosIniciais.categorias[0].videos[0].titulo}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
    </div>
  );
}


