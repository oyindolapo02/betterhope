import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Homef/Home';
import Campaigns from './Campaignsf/Campaings';
import Aboutus from './Aboutusf/Aboutus';
import Faq from './Faqf/Faq';
import Blog from './Blogf/Blog';
import Donate from './Donatef/Donate'
import Donateitem from './Donateitems/Donateitem';
import Registerngo from './Registerngo/Registerngo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Campaigns' element={<Campaigns />}/>
          <Route path='/Aboutus' element={<Aboutus />} />
          <Route path='/Faq' element={<Faq />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Donate' element={<Donate />} />
          <Route path='/Donateitem' element={<Donateitem />} />
          <Route path='/RegisterNGO' element={<Registerngo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
