// import { About, SeasonLife } from './components/about';
// import { Footer } from './components/footer';
// import { Header } from './components/header';
// import { Menu } from './components/menu';
// import NavigationBar from './components/navbarz';
// import { Products } from './components/products';
// import { SubHeader } from './components/subheader';
// import { Subscripe } from './components/subscripe';
// import Special from './components/special';

import { Header, TopBar, Special, SubHeader, Menu, Products, About, SeasonLife, Subscripe, Footer} from "./components";

function App() {
  const womenItems = [
    { image: "/img/menu.png", path: "#menu", title: "CARDIGANS" },
    { image: "/img/menu1.png", path: "#menu", title: "DRESSES" },
    { image: "/img/menu.png", path: "#menu", title: "CARDIGANS" },
  ];
  const manItems = [
    { image: "/img/menu2.png", path: "#menu", title: "TURTLENECK" },
    { image: "/img/menu3.png", path: "#menu", title: "POLO" },
    { image: "/img/menu2.png", path: "#menu", title: "TURTLENECK" },
  ];

  const products = [
    {
      name: "Zweiseitiger Wendemantel Mit schmetterling",
      image: "prod1.png",
      colors: [],
      price: {
        old: "$ 299.00",
        current: "$ 79.00",
      },
    },
    {
      name: "Écharpe tisée avec bords contrastants et franges",
      image: "prod2.png",
      colors: [
        { color: "#CC3B38", img: "prod2.png" },
        { color: "#6D705A", img: "prod3.png" },
        { color: "#E0D7C8", img: "prod4.png" },
        { color: "#000000", img: "prod5.png" },
        { color: "#718CBF", img: "prod6.png" },
        { color: "#985B4F", img: "prod7.png" },
        { color: "#C66666", img: "prod8.png" },
        { color: "#FFFFFF", img: "prod2.png" },
        { color: "#D0D0D0", img: "prod2.png" },
      ],
      price: {
        old: "$ 299.00",
        current: "$ 79.00",
      },
    },
    {
      image: "prod3.png",
      name: "Трикотажный Супер Мягкий Плед Контрастного Оттенка",
      colors: [],
      price: {
        old: "$ 299.00",
        current: "$ 79.00",
      },
    },
    {
      image: "prod4.png",
      name: "Кардиган в Стиле Колор-Блок с V-Образным Воротником",
      colors: [],
      price: {
        old: "$ 299.00",
        current: "$ 79.00",
      },
    },
    {
      image: "prod5.png",
      name: "Zweiseitiger Wendemantel Mit schmetterling",
      colors: [],
      price: {
        old: "$ 299.00",
        current: "$ 79.00",
      },
    },
    {
      image: "prod6.png",
      name: "Écharpe tisée avec bords contrastants et franges",
      colors: [
        { color: "#CC3B38", img: "prod2.png" },
        { color: "#6D705A", img: "prod3.png" },
        { color: "#E0D7C8", img: "prod4.png" },
        { color: "#000000", img: "prod5.png" },
        { color: "#718CBF", img: "prod6.png" },
        { color: "#985B4F", img: "prod7.png" },
        { color: "#C66666", img: "prod8.png" },
        { color: "#FFFFFF", img: "prod2.png" },
        { color: "#D0D0D0", img: "prod2.png" },
      ],
      price: {
        old: "$ 299.00",
        current: "$ 79.00",
      },
    },
    {
      image: "prod7.png",
      name: "Трикотажный Супер Мягкий Плед Контрастного Оттенка",
      colors: [],
      price: {
        old: "$ 299.00",
        current: "$ 79.00",
      },
    },
    {
      image: "prod8.png",
      name: "Кардиган в Стиле Колор-Блок с V-Образным Воротником",
      colors: [],
      price: {
        old: "$ 299.00",
        current: "$ 79.00",
      },
    },
  ];
  return (
    <div className="main">
      <TopBar />
      <Header />
      <Special className="specialm" />
	  <SubHeader />
	  <Menu items={womenItems} title={'WOMEN'} />
	  <Menu items={manItems} title={'MEN'} />
	  <Menu items={womenItems} title={'WOMEN'} mobile/>
	  <Menu items={manItems} title={'MEN'} mobile/>
	  <Products products={products} />
	  <About />
	  <SeasonLife />
	  <Subscripe />
	  <Footer />
      {/* <NavigationBar />
			<Header />
			
			
			
			<Menu items={manItems} title={'MEN'} />
			<Products products={products} />
			<About />
			<SeasonLife />
			<Subscripe />
			<Footer /> */}
    </div>
  );
}

export default App;
