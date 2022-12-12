import React from 'react';
import './App.css';
import BasicInfo from './components/BasicInfo';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        name: '',
        number: '',
        birthDate: '',
      },
      people: [
        {
          name: "Mariah Teasdale",
          number: "980-269-9935",
          birthDate: "03/18/1998",
        },
        {
          name: "Georgia Teasdale",
          number: "123-456-7891",
          birthDate: "10/10/1949",
        },
        {
          name: "Caleb Niver",
          number: "803-904-8374",
          birthDate: "02/15/1998",
        },
      ]
  }
}
  render() {
    return this.state.people.map(function (person, index) {
      return <BasicInfo key="{index}" person={person} />;
    })
  };
}

export default App;
