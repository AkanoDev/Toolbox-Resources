import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NavigationTab />
      <SearchTab />
      <ul className="listContainer">
        <Resources
          title="LandBook"
          link="https://land-book.com/gallery/portfolios"
          logo="./logos/landbook.png"
        />
        <Resources
          title="Unplush"
          logo="./logos/unplush.png"
          link="https://unsplash.com/"
        />
        <Resources
          title="Pexels"
          logo="./logos/pexels.png"
          link="https://www.pexels.com/"
        />
        <Resources
          title="Ionicons"
          logo="./logos/ionicons.png"
          link="https://ionic.io/ionicons"
        />
        <Resources
          title="10015.io"
          logo="./logos/10015io.png"
          link="https://10015.io/"
        />
        <Resources
          title="UIverse.io"
          logo="./logos/uiverse.png"
          link="https://uiverse.io/"
        />
        <Resources
          title="Dribble"
          logo="./logos/dribble.png"
          link="https://www.dribble.com/"
        />
      </ul>
    </div>
  );
}

function Resources(prop) {
  return (
    <li className="cardList">
      <a href={prop.link}>
        <div className="resourceCard">
          <img src={prop.logo} className="logo" />
          {prop.title}
        </div>
      </a>
    </li>
  );
}

function SearchTab() {
  return <input type="search" placeholder="Search.." className="search" />;
}

function NavigationTab() {
  return (
    <nav>
      <span>Logo</span>
      <ul className="navigationList">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Web Designs</a>
        </li>
        <li>
          <a href="#">Photos</a>
        </li>
        <li>
          <a href="#">Icons</a>
        </li>
        <li>
          <a href="#">Toolbox</a>
        </li>
      </ul>
    </nav>
  );
}
