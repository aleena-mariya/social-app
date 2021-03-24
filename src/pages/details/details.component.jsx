import React, {Component} from 'react';
//link jsx with css
import './details.styles.scss';


class Details extends React.Component {
  state = {
    loading: true,
    people: [20]
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        
        {this.state.people.map(person => (
          <div key={person.name.first + person.name.last}>
            <img src={person.picture.large} />
            <div>{person.name.title}</div>
            <div>{person.name.first}</div>
            <div>{person.name.last}</div>
            <div>Gender:{person.gender}</div>
            <div>City:{person.location.city}</div>
            <div>State:{person.location.state}</div>
            <div>Email:{person.email}</div>
            <div>User Name:{person.login.username}</div>
            <div>Age:{person.dob.age}</div>
            <div>Using for:{person.registered.age}yrs</div>
            <div>Phone:{person.phone}</div>
            <div>Cell:{person.cell}</div>
            <div>Nationality:{person.nat}</div>

        
          
          </div>
        ))}
      </div>
    );
  }
}
export default Details;
//<NavLink activeClassName="subtitle" to ="/KOCHI">See More</NavLink>
//{person.name.first}