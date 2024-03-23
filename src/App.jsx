import { Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Characters from "./views/Characters"
import NotFound from "./views/NotFound"
import CharacterDetail from "./views/CharacterDetail"
import Navigation from "./components/Navigation"
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
<>
    <Navigation />
    <Routes>
<Route path="/" element={<Home />} />
<Route path="/pokemones" element={<Characters />} />
<Route path="/pokemones/:name" element={<CharacterDetail />} />
<Route path="*" element={<NotFound />} />
</Routes>
</>
  )
}

export default App