import SA from './images/pexels-errin-casano-2356045.jpg';
import EN from './images/caleb-woods-j50op0lqTHM-unsplash.jpg';
import EU from './images/pexels-thorsten-technoman-338515.jpg';
import AS from './images/pexels-vo-thuy-tien-2602490.jpg';
import KO from './images/pexels-porapak-apichodilok-348523.jpg';
import NP from './images/pexels-yaroslav-shuraev-6881610.jpg';
import MR from './images/pexels-tom-leishman-5258144.jpg';
import TA from './images/pexels-francesco-ungaro-998646.jpg';

const aboutText = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque, praesentium quidem qui adipisci dolorem doloremque! Nihil maxime rem, id dolorem enim natus placeat molestiae odio repudiandae itaque harum in?',
  'Inventore, ullam velit rerum eum magnam nam fuga nobis iste unde porro facere quidem aperiam accusamus saepe, tempore doloremque deserunt quos dolores distinctio, odio voluptas reiciendis explicabo placeat. Obcaecati, voluptatem?',
  'Quod assumenda adipisci voluptatibus id provident similique sed tempora illo vel optio exercitationem ea laudantium eius dignissimos aperiam totam nam praesentium, labore deserunt ipsam corrupti? Illo officia laudantium odio. Autem?',
];

const tipsText = [
  `When traveling abroad, be sure to drink your Ovaltine. Realistically, you should check around official websites for any any warnings. There are warnings and travel advisories for every country below... but, DISCLAIMER, that info isn't guaranteed to be accurate.`,
  'Placeat magni libero commodi velit tempora quae eius aperiam, eveniet quod molestias aliquam porro suscipit rerum maxime nostrum quis soluta amet non nemo labore. Est rerum cupiditate tempore aut sed?',
  'Praesentium dignissimos itaque officia similique quidem nulla illum quis eveniet reprehenderit sequi blanditiis, possimus accusantium, temporibus voluptate iusto nisi dolores dolorum. Tempora expedita dicta ducimus provident commodi illo ab exercitationem!',
];

const cities = [
  {
    id: 1,
    city: "South America",
    src: SA,
    price: 145000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quas, laudantium repellendus voluptatibus qui nisi voluptates voluptas ipsam debitis omnis aut doloremque magnam ducimus, placeat, ullam incidunt eos dignissimos a! Vel soluta autem ex, ipsam animi beatae reprehenderit, libero eligendi, in quod dignissimos adipisci vitae. Quaerat alias ullam tempore vero, adipisci est minus ducimus eius at nulla iure vitae inventore?",
  },
  {
    id: 2,
    city: "Kokomo",
    src: KO,
    price: 120000,
    description: "Aut rerum laudantium soluta eum dolorum explicabo sint natus repudiandae esse. Molestias, voluptatum asperiores eum, sunt laudantium vel illo doloribus ab ratione qui accusantium architecto debitis quaerat. Provident, sed non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quas, laudantium repellendus voluptatibus qui nisi voluptates voluptas ipsam debitis omnis aut doloremque magnam ducimus, placeat, ullam incidunt eos dignissimos a!",   
  },
  {
    id: 3,
    city: "Forest Moon of Endor",
    src: EN,
    price: 160000,
    description: "Vel soluta autem ex, ipsam animi beatae reprehenderit, libero eligendi, in quod dignissimos adipisci vitae. Quaerat alias ullam tempore vero, adipisci est minus ducimus eius at nulla iure vitae inventore? Laboriosam, sint? Natus molestias a veniam, nam sed qui excepturi totam laboriosam! Repellat in natus voluptatem nemo possimus quibusdam iusto omnis, impedit quis facilis? Sint, pariatur magni. Minima, quibusdam delectus. Natus, delectus.",   
  },
  {
    id: 4,
    city: "Asia",
    src: AS,
    price: 175000,
    description: "Natus molestias a veniam, nam sed qui excepturi totam laboriosam! Repellat in natus voluptatem nemo possimus quibusdam iusto omnis, impedit quis facilis? Sint, pariatur magni. Minima, quibusdam delectus. Natus, delectus. Sapiente, temporibus. Quibusdam, ipsum! Debitis alias, totam dolorem consectetur quos amet id molestias, nulla officiis consequuntur doloribus laudantium maiores dolor magnam nemo eius soluta. Quo quia facilis impedit recusandae et.",   
  },
  {
    id: 5,
    city: "Europe",
    src: EU,
    price: 190000,
    description: "Nobis iure, expedita doloribus sequi beatae unde est quia quae cumque quasi ea rem. Praesentium vitae nulla consequatur, architecto officia laboriosam nihil maiores iure ipsum doloremque rerum ullam. Laboriosam, sint? Natus molestias a veniam, nam sed qui excepturi totam laboriosam! Repellat in natus voluptatem nemo possimus quibusdam iusto omnis, impedit quis facilis? Sint, pariatur magni. Minima, quibusdam delectus. Natus, delectus.",   
  },
  {
    id: 6,
    city: "North Pole",
    src: NP,
    price: 200000,
    description: "Sapiente, temporibus. Quibusdam, ipsum! Debitis alias, totam dolorem consectetur quos amet id molestias, nulla officiis consequuntur doloribus laudantium maiores dolor magnam nemo eius soluta. Quo quia facilis impedit recusandae et. Nobis iure, expedita doloribus sequi beatae unde est quia quae cumque quasi ea rem. Praesentium vitae nulla consequatur, architecto officia laboriosam nihil maiores iure ipsum doloremque rerum ullam. Laboriosam, sint?",   
  },    
  {
    id: 7,
    city: "Mars",
    src: MR,
    price: 99,
    description: "Architecto corporis quaerat libero odio voluptatem, minima nesciunt mollitia voluptatibus! Rerum architecto cumque voluptate in accusamus. Eveniet nobis dolorem earum unde excepturi odio vel similique, architecto, commodi eum expedita nisi? Sit error aut atque facere quis! Fugiat voluptatibus libero tenetur repellat sapiente vero pariatur molestiae similique asperiores corrupti fugit quaerat optio doloremque impedit itaque ipsum adipisci, officia alias quidem error!",   
  },    
  {
    id: 8,
    city: "Tatooine",
    src: TA,
    price: 1,
    description: "Sit error aut atque facere quis! Fugiat voluptatibus libero tenetur repellat sapiente vero pariatur molestiae similique asperiores corrupti fugit quaerat optio doloremque impedit itaque ipsum adipisci, officia alias quidem error! Vel soluta autem ex, ipsam animi beatae reprehenderit, libero eligendi, in quod dignissimos adipisci vitae. Quaerat alias ullam tempore vero, adipisci est minus ducimus eius at nulla iure vitae inventore?",   
  },    
];

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 110,
      mass: 0.5,
      damping: 9,
      duration: 0.4      
    } 
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

export { aboutText, tipsText, cities, containerVariants };