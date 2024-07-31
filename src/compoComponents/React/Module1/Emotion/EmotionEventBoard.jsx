import EmotionEvent from './EmotionEvent';

import { EmotionBoard } from './EmotionEventBoard.styled';

const EmotionEventBoard = ({ events }) => {
  return (
    <EmotionBoard>
      {events.map(({ name, location, speaker, type, time }) => (
        <EmotionEvent
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        />
      ))}
    </EmotionBoard>
  );
};

export default EmotionEventBoard;
