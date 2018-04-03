import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCity } from '../../ducks/reducer.js';

class WizardTwo extends Component {
    render(){
        const {updateCity} = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">
            
                <p>In what city will the property be located?</p><br />
                    
                        {/* <input placeholder="city name" type="text" onChange={this.props.updateCity}/> */}
                        {/* Now that our component is connected to the store, we can update the onChange event to call updateCity instead. You can either deconstruct updateCity off of props or call this.props.updateCity. */}

                        <input placeholder="city name" type="text" onChange= {(e) => updateCity(e.target.value)}/>
                
                    <Link to="/wThree"><button className="wTwo-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

//Since the second screen of the wizard process only asks the user for their city, we only need city from the store's state.

function mapStateToProps( state ){
    const { city } = state;

    return{
        city
    };
}

// export default WizardTwo;
// Now that we have a mapStateToProps function, let's modify the export default statement to use connect. Remember that we should also include updateCity as a second parameter. This will allow us to call updateCity off of props without having to worry about dispatch.

export default connect( mapStateToProps, { updateCity })(WizardTwo);