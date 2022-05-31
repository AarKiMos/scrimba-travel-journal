import Header from "./components/Header";
import JournalEntry from "./components/JournalEntry";
import data from "./data";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <section className="journal">
                {data.map((item) => (
                    <JournalEntry key={item.id} obj={item} />
                ))}
            </section>
        </div>
    );
}

export default App;
