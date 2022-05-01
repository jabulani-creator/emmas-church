import { MdQueryStats, MdOutlineLocalPostOffice, MdOutlinePostAdd } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import {BsCalendar2Event} from 'react-icons/bs'
import {RiHealthBookLine} from 'react-icons/ri'

const links = [
  {
    id: 1,
    text: 'request',
    path: '/admin',
    icon: <MdOutlineLocalPostOffice />,
  },
  {
    id: 2,
    text: 'all post',
    path: 'all-posts',
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: 'add post',
    path: 'add-post',
    icon: <MdOutlinePostAdd />,
  },
  {
    id: 4,
    text: 'all events',
    path: 'all-events',
    icon: <BsCalendar2Event />,
  },
  {
    id: 5,
    text: 'add event',
    path: 'add-event',
    icon: <FaWpforms />,
  },
  {
    id: 6,
    text: 'all health',
    path: 'all-health',
    icon: <RiHealthBookLine />,
  },
  {
    id: 7,
    text: 'add health',
    path: 'add-health',
    icon: <RiHealthBookLine />,
  },
  {
    id: 8,
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
  {
    id: 9,
    text: 'add leaders',
    path: 'add-position',
    icon: <ImProfile />,
  },
]

export default links