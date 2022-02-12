import React, { useEffect } from 'react';
import { useState } from 'react';
// import { BirthdayPeople } from '../data';
import '../index.css';

function ParentContainer() {
  const [profiles, setProfiles] = useState([]);
  const profileCounter = profiles.length;

  const url = 'https://api.github.com/users';

  async function getProfiles() {
    const response = await fetch(url);
    const loadProfiles = await response.json();
    setProfiles(loadProfiles);
  }

  useEffect(function () {
    getProfiles();
  }, []);

  console.log('component rendered');

  useEffect(
    function () {
      let profileNotification = `${profileCounter} User Profiles`;
      if (profileCounter !== 0) {
        console.log('use effect triggered');
        document.title = profileNotification;
      } else {
        console.log('No profiles found');
        document.title = 'No profiles found';
      }
    },
    [profiles, profileCounter]
  );

  function cancelReminders() {
    return setProfiles([]);
  }

  function removeProfile(id) {
    setTimeout(() => {
      setProfiles((oldProfileList) => {
        let newProfileList = oldProfileList.filter(function (eachItem) {
          return eachItem.id !== id;
        });
        return newProfileList;
      });
    }, 500);
  }

  return (
    <>
      <h2 className="app-header">{profileCounter} Profiles Found</h2>
      <div className="parent-wrapper">
        {profiles.map(function (eachUser) {
          const { id, login, avatar_url, html_url } = eachUser;

          // const celebrant = eachItem.celebrant;
          // const photo = eachItem.photo;
          // const age = eachItem.age;
          // const id = eachItem.id;

          return (
            <section key={id} className="card">
              <section className="card-image-case">
                <img src={avatar_url} alt="celebrant-pic" />
              </section>
              <section className="card-body">
                <div className="card-title">{login}</div>
                <div className="card-text">{html_url}</div>
              </section>
              <aside
                className="remove-item-btn"
                onClick={() => removeProfile(id)}
              >
                Remove
              </aside>
            </section>
          );
        })}
      </div>
      <div className="btn-case">
        <button className="clear-btn" type="button" onClick={cancelReminders}>
          Clear All
        </button>
      </div>
    </>
  );
}

export default ParentContainer;
