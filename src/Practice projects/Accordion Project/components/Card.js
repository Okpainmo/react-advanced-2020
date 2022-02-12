import React from 'react';
import { BirthdayPeople } from '../data';

const people = BirthdayPeople;

function Card() {
  return (
    <>
      {people.map(function (eachItem) {
        const { celebrant, photo, age, id } = eachItem;

        // const celebrant = eachItem.celebrant;
        // const photo = eachItem.photo;
        // const age = eachItem.age;
        // const id = eachItem.id;

        return (
          <section key={id} className="card">
            <section className="card-image-case">
              <img src={photo} alt="celebrant-pic" />
            </section>
            <section className="card-body">
              <div className="card-title">{celebrant}</div>
              <div className="card-text">{age + ' Years'}</div>
            </section>
          </section>
        );
      })}
    </>
  );
}

export default Card;
