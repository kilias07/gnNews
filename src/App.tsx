import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home";
import CountryPage from "./pages/country";
import Layout from "./components/layout/layout";


function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="country">
                    <Route index element={<CountryPage/>}/>
                    <Route path=":countryCode" element={<CountryPage/>}/>
                </Route>
            </Routes>
        </Layout>
    );
}

export default App;
