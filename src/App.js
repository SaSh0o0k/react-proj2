// import logo from './logo.svg';
import React from 'react';
import './App.css';
import User from './components/User';

// function App() {
//   return (
//     <section>
//     <User married={false} name="Арнольд Шварцнегер" avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg/250px-Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg"/>
//     <User married={true} name="Илон Маск" avatar="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE"/>
//     <User married={false} name="Сильвестер Сталлоне" avatar="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTycuWyHFzuaSqgAWxYop7igeo5o_tDwQZYXpTHUuJ105VD0DoCozsp0FVsUdLhuOll"/>
//     <User married={true} name="Райан Гослінг" avatar="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQuW7VQCvyYXQZEG2aCYyTLeNmNjDyyw9K-IjoqNG2GXITFvNSQiBdBVhFjPdlf71sO"/>
//     </section>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: 'Арнольд Шварцнегер',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg/250px-Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg',
          married: false,
        },
        {
          id: 2,
          name: 'Илон Маск',
          avatar: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE',
          married: true,
        },
        {
          id: 3,
          name: 'Сильвестер Сталлоне',
          avatar: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTycuWyHFzuaSqgAWxYop7igeo5o_tDwQZYXpTHUuJ105VD0DoCozsp0FVsUdLhuOll',
          married: false,
        },
        {
          id: 4,
          name: 'Райан Гослінг',
          avatar: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQuW7VQCvyYXQZEG2aCYyTLeNmNjDyyw9K-IjoqNG2GXITFvNSQiBdBVhFjPdlf71sO',
          married: true,
        },
      ]
    }
  }
  render() {
    const renderUsers = this.state.users.map(({ id, name, avatar, married }) =>
      <li key={id}><User name={name} avatar={avatar} married={married} /></li>);

    return (
      <>
        <h1>Users</h1>
        <ul>{renderUsers}</ul>
      </>
    )
  }
}

export default App;
