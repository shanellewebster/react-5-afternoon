import React from 'react';
import WizardOne from './components/WizardOne/WizardOne';
import WizardTwo from './components/WizardTwo/WizardTwo';
import WizardThree from './components/WizardThree/WizardThree';
import WizardFour from './components/WizardFour/WizardFour';
import WizardFive from './components/WizardFive/WizardFive';
import WizardSix from './components/WizardSix/WizardSix';
import WizardSeven from './components/WizardSeven/WizardSeven';
import WizardEight from './components/WizardEight/WizardEight';
import WizardNine from './components/WizardNine/WizardNine';
import WizardTen from './components/WizardTen/WizardTen';
import WizardEleven from './components/WizardEleven/WizardEleven';
import Finish from './components/Finish/Finish';

import NextBtn from './components/NextBtn/NextBtn';


//Let's begin by opening src/router.js and importing HashRouter from react-router-dom. We can replace Switch with HashRouter since we will no longer be using Switch.
// import { Switch, Route } from 'react-router-dom';
import { HashRouter, Route } from 'react-router-dom';

//Let's add an export default () statement above the current export default statement. In the new export default statement, add a HashRouter component that has a <div> inside of it. We use this single <div> to export all of our routes.
export default(
    <HashRouter>
        <div>
        <Route component={NextBtn} exact path= '/'/>
        <Route component={WizardOne}  path='/wOne'/>
        <Route component={WizardTwo}  path="/wTwo"/>
        <Route component={WizardThree} path="/wThree"/>
        <Route component={WizardFour} path="/wFour"/>
        <Route component={WizardFive} path="/wFive"/>
        <Route component={WizardSix} path="/wSix"/>
        <Route component={WizardSeven} path="/wSeven"/>
        <Route component={WizardEight} path="/wEight"/>
        <Route component={WizardNine} path="/wNine"/>
        <Route component={WizardTen} path="/wTen"/>
        <Route component={WizardEleven} path="/wEleven"/>
        <Route component={Finish} path='/finish'/>
        </div>
    </HashRouter>
)


// export default function(loanType, propType, changeLoanType, changePropertyType, changePropertyToBeUsedOn, propToBeUsedOn, city, updateCity, foundFalse, foundTrue, found, realEstateAgentTrue, realEstateAgentFalse, realEstateAgent, updateDownPayment, downPayment, updateCost, cost, credit, updateCreditE,updateCreditG, updateCreditF,updateCreditP, history, updateHistory, addressOne, addressTwo, addressThree, updateAddLineOne, updateAddLineTwo, updateAddLineThree, updateFirst, updateLast, updateEmail, firstName, lastName, email){

//         return (
//             <Switch>
//                 <Route exact path= '/' render={()=> <NextBtn />} />

//                 <Route 
//                     path='/wOne' 
//                     render={ ()=> <WizardOne 
//                                     loanType={loanType} 
//                                     propType={propType} 
//                                     handleLoanType={changeLoanType} 
//                                     handlePropType={changePropertyType}/> } 
//                 />
//                 <Route
//                     path="/wTwo" 
//                     render={ ()=> <WizardTwo 
//                                     city={city} 
//                                     updateCity={updateCity}/> } 
//                 />
//                 <Route 
//                     path="/wThree" 
//                     render={ ()=> <WizardThree 
//                                     loanType={loanType} 
//                                     propType={propType} 
//                                     propToBeUsedOn={changePropertyToBeUsedOn} 
//                                     propUsedOn={propToBeUsedOn}/> } 
//                 />
//                 <Route
//                     path='/wFour' 
//                     render={ ()=> <WizardFour 
//                                     foundFalse={foundFalse} 
//                                     foundTrue={foundTrue} 
//                                     found={found}/> }  
//                 />
//                 <Route
//                     path="/wFive" 
//                     render={ ()=> <WizardFive 
//                                     realEstateAgentTrue={realEstateAgentTrue} 
//                                     realEstateAgentFalse={realEstateAgentFalse} 
//                                     realEstateAgent={realEstateAgent}/> }  
//                 />
//                 <Route 
//                     path="/wSix" 
//                     render={ ()=> <WizardSix 
//                                     downPayment={downPayment} 
//                                     updateDownPayment={updateDownPayment} 
//                                     cost={cost} 
//                                     updateCost={updateCost}/> } 
//                 />
//                 <Route 
//                     path="/wSeven" 
//                     render={ ()=> <WizardSeven 
//                                     credit={credit} 
//                                     updateCreditE={updateCreditE} 
//                                     updateCreditF={updateCreditF} 
//                                     updateCreditG={updateCreditG} 
//                                     updateCreditP={updateCreditP}/> } 
//                 />
//                 <Route 
//                     path="/wEight" 
//                     render={ ()=> <WizardEight 
//                                     history={history} 
//                                     updateHistory ={updateHistory} /> } 
//                 />
//                 <Route
//                     path="/wNine" 
//                     render={ ()=> <WizardNine 
//                                     addressOne={addressOne} 
//                                     addressTwo={addressTwo} 
//                                     addressThree={addressThree} 
//                                     updateAddLineOne={updateAddLineOne} 
//                                     updateAddLineTwo={updateAddLineTwo} 
//                                     updateAddLineThree={updateAddLineThree} /> } 
//                 />
//                 <Route 
//                     path="/wTen"
//                     render={ ()=> <WizardTen 
//                                     firstName={firstName} 
//                                     lastName={lastName} email={email} 
//                                     updateFirst={updateFirst} 
//                                     updateLast={updateLast} 
//                                     updateEmail={updateEmail} /> } 
//                 />
//                 <Route 
//                     path="/wEleven"
//                     render={ ()=> <WizardEleven 
//                                     firstName={firstName} 
//                                     lastName={lastName} 
//                                     email={email} 
//                                     loanType={loanType} 
//                                     propType={propType} 
//                                     propToBeUsedOn={propToBeUsedOn} 
//                                     city={city} 
//                                     found={found} 
//                                     realEstateAgent={realEstateAgent} 
//                                     downPayment={downPayment} 
//                                     cost={cost} 
//                                     credit={credit} 
//                                     history={history} 
//                                     addressOne={addressOne}
//                                     addressTwo={addressTwo} 
//                                     addressThree={addressThree} /> } 
//                 />
//                 <Route path='/finish' component={Finish} />
//             </Switch>
//         )
// }
 

 