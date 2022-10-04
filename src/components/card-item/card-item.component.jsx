import React, { Component } from 'react';
import classes from './card-item.module.css';

export class CardItem extends Component {
  render() {
    const {
      monster: { id, name, email },
    } = this.props;
    return (
      <article className={classes['card-container']}>
        <img src={`https://robohash.org/${id}?set=set2`} alt='' />
        <h1>{name}</h1>
        <p>{email}</p>
      </article>
    );
  }
}

export default CardItem;
