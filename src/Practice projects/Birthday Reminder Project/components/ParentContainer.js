import React, { useEffect } from 'react';
// import Card from './Card';
import { useState } from 'react';
import { BirthdayPeople } from '../data';
import '../index.css';

function ParentContainer() {
  const [people, resetState] = useState(BirthdayPeople);
  const birthdayCounter = people.length;

  console.log('component rendered');

  useEffect(
    function () {
      let birthdayNotification = `${birthdayCounter} birthdays`;
      if (birthdayCounter !== 0) {
        document.title = birthdayNotification;
        console.log('use effect triggered');
      } else {
        document.title = 'No birthday';
        console.log('No birthday right now');
      }
    },
    [people, birthdayCounter]
  );

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  function resizeWindow() {
    return setWindowSize(window.innerWidth);
  }

  useEffect(
    function () {
      console.log(windowSize);
      console.log('second use effect triggered');
      window.addEventListener('resize', resizeWindow);
      return () => {
        console.log('use effect cleaned up');
        window.removeEventListener('resize', resizeWindow);
      };
    },
    [windowSize]
  );

  function cancelReminders() {
    return resetState([]);
  }

  // function removeEvent(id) {
  //   let newEventList = people.filter(function (eachItem) {
  //     return eachItem.id !== id;
  //   });
  //   setTimeout(() => {
  //     resetState(newEventList);
  //   }, 2000);
  // }

  // or using the functional approach as below

  function removeEvent(id) {
    setTimeout(() => {
      resetState((oldEventList) => {
        let newEventList = oldEventList.filter(function (eachItem) {
          return eachItem.id !== id;
        });
        return newEventList;
      });
    }, 500);
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
            <aside className="remove-item-btn" onClick={() => removeEvent(id)}>
              Remove
            </aside>
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
