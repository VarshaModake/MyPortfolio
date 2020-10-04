import React ,{Component} from 'react';

const Joke=({joke:{setup,punchline}})=>(<p>{setup}<em>{punchline}</em></p>);

export default class Jokes extends Component{
    state={Joke:{},JokeArray:[]};
componentDidMount()
{
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(resonse=>resonse.json())
    .then(json=>this.setState({Joke:json}))
    .catch(error=>alert(error.message));
}
fetchJokes=()=>
{
    fetch('https://official-joke-api.appspot.com/random_ten')
    .then(response=>response.json())
    .then(json=>this.setState({JokeArray:json}))
    .catch(error=>alert(error.message));
}
render()
{
    return(
        <div className="JokeWrapper">
            <div>
            <h2>Highlited Joke</h2>
            <Joke joke={this.state.Joke} />
            < hr/>
                <h3>Want more jokes?</h3>
            <button onClick={this.fetchJokes}>Click Me!</button>{
                this.state.JokeArray.map(jokeItem=>(<Joke key={jokeItem.id} joke={jokeItem} />))
            }
            </div>
        </div>
    )
}

}

