import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Meriem HELALI",
        bio: " React js devolper and UI/UX designer",
        imgSrc:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Ffree-images%2F&psig=AOvVaw2xrBDTZeBrilmd-h5yy79I&ust=1722091027394000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODhzpH3xIcDFQAAAAAdAAAAABAI",
        profession: "Frontend Developer",
      },
      show: false,
      timeSinceMounted: 0,
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(() => ({
        timeSinceMounted: this.state.timeSinceMounted + 1,
        //--------------- previous value of this.state.timeSinceMounted +1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval((this.intervalId = () => this.setState({ intervalId: 0 })));
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, timeSinceMounted } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? "Hide" : "Display"} the profil
        </button>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profil" />
            <h2>{person.profession}</h2>
          </div>
        )}
        <p>
          Temps écoulé depuis le montage du composant : {timeSinceMounted}{" "}
          secondes
        </p>
      </div>
    );
  }
}
