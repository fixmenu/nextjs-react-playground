import EventList from '../../components/events/event-list';
import { getFeaturedEvents } from '../../dummy-data';
function AllEventsPage(){
    const featuredEvents = getFeaturedEvents();

  return <div>
    <ul>
        <EventList items={featuredEvents}></EventList>
    </ul>
  </div>
}

export default AllEventsPage;