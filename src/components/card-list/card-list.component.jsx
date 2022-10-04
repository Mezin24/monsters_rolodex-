import React, { Component } from 'react';
import CardItem from '../card-item/card-item.component';
import classes from './card.list.module.css';

export class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className={classes['card-list']}>
        {monsters.map((monster) => (
          <CardItem key={monster.id} monster={monster} />
        ))}
      </div>
    );
  }
}

export default CardList;
