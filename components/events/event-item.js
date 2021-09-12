import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapPin,faCalendar,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Button from '../ui/button';
import classes from './event-item.module.css';

function EventItem(props) {
    const {title, image, date, location, id} = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return <li className={classes.item}>
        <img src={'/' + image} alt=''/>
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.date}>
                <FontAwesomeIcon icon={faCalendar} />
                    <time>{humanReadableDate}</time>
                </div>
                <div className={classes.address}>
                <FontAwesomeIcon icon={faMapPin} />
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={classes.actions}> 
            
                <Button link={exploreLink}>Explore Event <FontAwesomeIcon icon={faArrowRight} /></Button>
            </div>
        </div>
    </li>;
}

export default EventItem;