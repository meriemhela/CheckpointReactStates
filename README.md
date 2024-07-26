# React State Checkpoint

## In this checkpoint, we are going to create our first class-based component and we are going also to create our first state.

### Instructions :
1. Create a project using create-react-app. -> "npx create-react-app checkpointreactstate"
2. Transform the App.js into a class-based component. -> " export default class App extends React.component{... constroctor(){} render(){} ... } "
3. Implement a state for this class containing a Person ={ fullName,bio, imgSrc, profession} and a boolean shows. -> " this.state:{person:{fullName:"..",bio:".."...}, shows:false}"
4. Add a button that toggles the show state. When the show state is true, the person's profile will appear. -> "<button onClick={this.toggleShow}>{shows ? "Hide" : "Display"} the profil</button>"
5. Create a field that shows the time interval since the last component was mounted using the component lifecycle. -> constructor(){},componentDidMount() {} , componentWillUnmount() {},render(){}..etc
    Hint: use the setInterval method.

### Output :![Capture d’écran 2024-07-26 173559](https://github.com/user-attachments/assets/48585a46-489f-4b31-8937-9436943acb6e)
