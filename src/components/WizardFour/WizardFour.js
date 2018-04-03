import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateFound } from '../../ducks/reducer.js';

class WizardFour extends Component {
    render(){
        const { updateFound } = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">            
                    <p>Have you already found your new home?</p> <br />
                    
                    <div className="row">
                        {/* BEFORE */}
                        {/* <Link to="/wFive"><button onClick={this.props.foundTrue}>Yes</button></Link>
                        <Link to="/wFive"><button onClick={this.props.foundFalse}>No </button></Link>   */}
                        
                        <Link to="/wFive"><button onClick={(e) => this.props.updateFound('True')}>Yes</button></Link>
                        <Link to="/wFive"><button onClick={(e) => this.props.updateFound('False')}>No </button></Link>

                    </div>         
                </div>
            </div>
        )
    }
}

// export default WizardFour;

function mapStateToProps (state){
    const { found } = state;

    return {
        found
    };
}

export default connect ( mapStateToProps, {updateFound})(WizardFour);