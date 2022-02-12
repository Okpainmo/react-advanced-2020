import React from 'react';
// import Card from './Card';
import { useState } from 'react';
import { BirthdayPeople } from '../data';

function ParentContainer() {
  const [people, resetState] = useState(BirthdayPeople);
  const birthdayCounter = people.length;

  function cancelReminders() {
    return resetState([]);
  }

  return (
    <div className="parent-wrapper">
      <h2 className="app-header">{birthdayCounter} Birthdays Today</h2>
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
      <div className="btn-case">
        <button className="clear-btn" type="button" onClick={cancelReminders}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default ParentContainer;
