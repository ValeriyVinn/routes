import { formatEventDuration, formatEventStart } from './utils';
import css from './EmotionEvent.module.css';
import { Card, EventName, Info, Chip } from './EmotionEvent.styled';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { iconSize } from './constants';

const EmotionEvent = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);

  return (
    <Card>
      <EventName>{name}</EventName>
      <Info>
        <FaMapMarkerAlt className={css.icon} size={iconSize.sm} />
        {location}
      </Info>
      <Info>
        <FaUserAlt className={css.icon} size={iconSize.sm} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt className={css.icon} size={iconSize.sm} />
        {formattedStart}
      </Info>
      <Info>
        <FaClock className={css.icon} size={iconSize.sm} />
        {duration}
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
};

// className={`${css.chip} ${css[type]}`}

export default EmotionEvent;
