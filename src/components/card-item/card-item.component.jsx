import classes from './card-item.module.css';

const CardItem = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <article className={classes['card-container']}>
      <img src={`https://robohash.org/${id}?set=set2`} alt='' />
      <h1>{name}</h1>
      <p>{email}</p>
    </article>
  );
};

export default CardItem;
