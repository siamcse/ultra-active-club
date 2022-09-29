import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='question'>
            <h1 className='faq-title'>Some FAQ about ReactJS</h1>
            <div>
                <h2>Q.How does react work?</h2>
                <article>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</article>
            </div>
            <div>
                <h2>Q.props and state difference in react js</h2>
                <article>Components receive data from outside with props, whereas they can create and manage their own data with state
                Props are used to pass data, whereas state is for managing data
                Data from props is read-only, and cannot be modified by a component that is receiving it from outside
                State data can be modified by its own component, but is private (cannot be accessed from outside)
                Props can only be passed from parent component to child (unidirectional flow)
                Modifying state should happen with the setState ( ) method</article>
            </div>
            <div>
                <h2>Q.useEffect use cases:</h2>
                <article>Running once on mount: fetch API data
                Running on state change: validating input field
                Running on state change: live filtering
                Running on state change: trigger animation on new array value
                Running on props change: update paragraph list on fetched API data update
                Running on props change: updating fetched API data to get BTC updated price</article>
            </div>
        </div>
    );
};

export default Question;