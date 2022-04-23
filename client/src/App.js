import {  BrowserRouter, Routes, Route} from 'react-router-dom'
import { Youth, Children,GeneralMinistry } from './Components/MINISTRIES';
import { Error, Register, Landing, Home, About, New, Ministries, Media, Contact, Resources, SinglePost } from './pages';
import { OurBeliefs } from './pages/about/OurBeliefs';
import { OurHistory } from './pages/about/OurHistory';
import { AddEvent, AddHealth, AddPost, AllEvents, AllHealth, AllPost, Profile, ProtectedRoute, Request, SharedLayout } from './pages/dashboard';


function App() {
  return (
    < BrowserRouter>
    <Routes>
     <Route path='/admin' element={
       <ProtectedRoute>
           <SharedLayout />
       </ProtectedRoute>
      } >
       <Route index element={<Request />} />
       <Route path='all-posts' element={<AllPost />} />
       <Route path='add-post' element={<AddPost />} />
       <Route path='all-events' element={<AllEvents />} />
       <Route path='add-event' element={<AddEvent />} />
       <Route path='all-health' element={<AllHealth />} />
       <Route path='add-health' element={<AddHealth />} />
       <Route path='profile' element={<Profile />} />
     </Route>
     <Route path='/' exact element={<Home />} />
     <Route path='/post/:postId' element={<SinglePost />}/>
     <Route path='/register' element={<Register />} />
     <Route path="/landing" element={<Landing />} />
     <Route path='/about' element={<About />} />
     <Route path='/about/our-beliefs' element={<OurBeliefs />} />
     <Route path='/about/our-history' element={<OurHistory />} />
     <Route path='/new' element={<New />} />
     <Route path='/ministries' element={<Ministries />} />
     <Route path='/ministries/youth' element={<Youth />} />
     <Route path='/ministries/children' element={<Children />} />
     <Route path='/ministries/communication' element={<GeneralMinistry title="COMMUNICATION" />} />
    <Route path='/ministries/education' element={<GeneralMinistry title="EDUCATION" />} />
    <Route path='/ministries/family' element={<GeneralMinistry title="FAMILY MINISTRIES" />} />
    <Route path='/ministries/health' element={<GeneralMinistry title="HEALTH MINISTRIES DEPARTMENT" />} />
    <Route path='/ministries/public-affairs' element={<GeneralMinistry title="PUBLIC AFFAIRS AND RELIGIOUS LIBERTY" />} />
    <Route path='/ministries/publishing' element={<GeneralMinistry title="PUBLISHING" />} />
    <Route path='/ministries/sabbath-school' element={<GeneralMinistry title="SABBATH SCHOOL/PERSONAL MINISTRIES" />} />
    <Route path='/ministries/stewardship' element={<GeneralMinistry title="STEWARDSHIP" />} />
    <Route path='/ministries/women' element={<GeneralMinistry title="WOMEN’S MINISTRIES" />} />
    <Route path='/ministries/amo' element={<GeneralMinistry title="AMO" />} />
     <Route path='/media' element={<Media />} />
     <Route path='/contact' element={<Contact />} />
     <Route path='/resources' element={<Resources />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </ BrowserRouter>
  );
}

export default App;
