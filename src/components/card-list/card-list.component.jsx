import CardItem from '../card-item/card-item.component';
import classes from './card.list.module.css';

const CardList = ({ monsters }) => {
  return (
    <div className={classes['card-list']}>
      {monsters.map((monster) => (
        <CardItem key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
