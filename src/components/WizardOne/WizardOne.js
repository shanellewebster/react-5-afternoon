import React,  { Component } from 'react';
import {Link} from 'react-router-dom'
//Let's begin by importing connect and the action creators we have created so far.
import { connect } from 'react-redux';
import { updateLoanType, updatePropertyType } from '../../ducks/reducer';


class WizardOne extends Component {
    render(){
        //We can then destructure our action creators off of props. It is imperative that you call your action creators off of props otherwise the function call will never make it to the store.
        const { updateLoanType, updatePropertyType } = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">
                    <p>What type of loan will you be needing?</p> <br />
                
                    {/* BEFORE */}
                    {/* <select onChange={this.props.handleLoanType}>

                        <option type="text" value="Home Purchase" >Home Purchase</option>
                        <option type="text" value="Refinance" >Refinance</option>
                        <option type="text" value="Home Equity" >Home Equity loan/line</option>

                    </select> <br/> */}

                    {/* AFTER */}
                    <select onChange={ ( e ) => updateLoanType( e.target.value ) }>
                    <option type="text" value="Home Purchase" >Home Purchase</option>
                    <option type="text" value="Refinance" >Refinance</option>
                    <option type="text" value="Home Equity" >Home Equity loan/line</option>
                    </select> <br/>

                    <p>What type of property are you purchasing?</p> <br />

                    {/* <select onChange={this.props.handlePropType}>

                        <option value="Single Family Home">Single Family Home</option>
                        <option value="Town Home">Townhome</option>
                        <option value="Condo">Condo</option>
                        <option value="Multi Family Home">Multi Family Dwelling</option>
                        <option value="Mobile Home">Mobile Home</option>

                    </select> */}

                    <select onChange={ ( e ) => updatePropertyType( e.target.value ) }>
                    <option value="Single Family Home">Single Family Home</option>
                    <option value="Town Home">Townhome</option>
                    <option value="Condo">Condo</option>
                    <option value="Multi Family Home">Multi Family Dwelling</option>
                    <option value="Mobile Home">Mobile Home</option>
                    </select>
                    
                    <Link to="/wTwo"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}
// export default WizardOne; 

// We can modify the export default statement to connect to our store. In this case, we'll only need two properties from state and we'll also be passing in the action creators. When we pass in the action creators into our connect statement it wraps them in a dispatch function. This allows our component to just call the action creator. If we didn't do it this way, we would have to import dispatch and call dispatch with our action creator as an argument.
// Since this component has select statements for a loan type and property type, we will want the loanType and propertyType from state.

function mapStateToProps (state){
    const {loanType, propertyType} = state;

    return{
        loanType,
        propertyType
    };
}

export default connect (mapStateToProps, { updateLoanType, updatePropertyType })(WizardOne);
