import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Youth, Children, GeneralMinistry } from "./Components/MINISTRIES";
import {
  Error,
  Register,
  Landing,
  Home,
  About,
  New,
  Ministries,
  Media,
  Contact,
  Resources,
  SinglePost,
} from "./pages";
import { OurBeliefs } from "./pages/about/OurBeliefs";
import { OurHistory } from "./pages/about/OurHistory";
import {
  AddEvent,
  AddHealth,
  AddLeader,
  AddPost,
  AllEvents,
  AllHealth,
  AllPost,
  EditEvent,
  EditPost,
  Profile,
  ProtectedRoute,
  Request,
  SharedLayout,
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Request />} />
          <Route path="all-posts" element={<AllPost />} />
          <Route path="add-post" element={<AddPost />} />
          <Route path="edit-post/:postId" element={<EditPost />} />
          <Route path="all-events" element={<AllEvents />} />
          <Route path="add-event" element={<AddEvent />} />
          <Route path="edit-event/:eventId" element={<EditEvent />} />
          <Route path="all-health" element={<AllHealth />} />
          <Route path="add-health" element={<AddHealth />} />
          <Route path="profile" element={<Profile />} />
          <Route path="add-position" element={<AddLeader />} />
        </Route>
        <Route path="/about" element={<About />}>
          <Route path="our-beliefs" element={<OurBeliefs />} />
          <Route path="our-history" element={<OurHistory />} />
        </Route>
        <Route path="/ministries" element={<Ministries />}>
          <Route path="youth" element={<Youth />} />
          <Route path="children" element={<Children />} />
        </Route>
        {/* <Route path="/ministries" element={<Ministries />} />
        <Route path="/ministries/youth" element={<Youth />} />
        <Route path="/ministries/children" element={<Children />} /> */}

        <Route path="/" exact element={<Home />} />
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/new" element={<New />} />
        <Route
          path="/ministries/communication"
          element={<GeneralMinistry title="COMMUNICATION" />}
        />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
