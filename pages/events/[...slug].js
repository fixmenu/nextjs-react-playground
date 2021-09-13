import router from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';

function FilteredEventsPage(){

    const filterData= router.query.slug;
    console.log(filterData)

    if(!filterData) {
        return <p className="center">Loading ...</p>
    }

    const filteredEvents = getFilteredEvents({
        year: filterData[1],
        month: filterData[0]
    })

    if(!filteredEvents || filteredEvents.length === 0) {
        return <p className="center">No events</p>
    }
    return (
        <div>
                <EventList items={filteredEvents}></EventList>
        </div>
    )
}


export default FilteredEventsPage;