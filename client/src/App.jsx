import app from "./App.module.css";
import Collections from "./components/collection/Collections.jsx";
import List from "./components/list/List.jsx";
import {useState} from "react";

function App() {
  const [collections, setCollections] = useState([
    {
      name: "Work",
      items: ["Mow lawn", "Wash dishes", "Do taxes", "Fix doorhinge"],
    },
    {name: "Home", items: ["Clean"]},
    {name: "Hobby", items: ["Walk"]},
    {name: "Health", items: ["Wash"]},
    {name: "Cars", items: ["Buy"]},
  ]);
  const [activeCollection, setActiveCollection] = useState(collections[0]);

  const addListItemHandler = (item) => {
    setCollections((prevCollections) => {
      const updatedCollections = [...prevCollections];
      const index = updatedCollections.findIndex((collection) => {
        return collection.name === activeCollection.name;
      });
      if (index !== -1) {
        updatedCollections[index].items = [item, ...updatedCollections[index].items];
      }
      return updatedCollections;
    });
  };

  const deleteListItemHandler = (e) => {
    setActiveCollection((prevstate) => {
      return {...prevstate, items: prevstate.items.filter((item) => item !== e)};
    });
  };

  const selectCollectionHandler = (name) => {
    const selectedCollection = collections.filter((collection) => collection.name === name);
    setActiveCollection(selectedCollection[0]);
  };

  return (
    <div className={app.grid}>
      <Collections collectionsArray={collections} onCollectionSelect={selectCollectionHandler} />
      <List items={activeCollection.items} onDeleteItem={deleteListItemHandler} submitHandler={addListItemHandler} />
    </div>
  );
}

export default App;
