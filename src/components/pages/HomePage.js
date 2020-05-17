import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Card, CardColumns, CardDeck, CardGroup} from 'react-bootstrap'
import TopNavigation from "../Navigation/TopNavigation";
import {battleBasedOnLocation} from '../actions/battleData'
class HomePage extends React.Component {

    state = {
        location:null,
        isLoading :false,
        battles:[]
    }

    componentWillMount() {
        if (JSON.parse(localStorage.getItem("location")) === null){
            this.setState({location:null})
        }
    }

    componentDidUpdate(){
       if (JSON.parse(localStorage.getItem("location")) !== null){
           console.log(localStorage.getItem("location"))
           this.props.battleBasedOnLocation(JSON.parse(localStorage.getItem("location")))
               .then(battles=> {
                   this.setState({battles:battles, location:JSON.parse(localStorage.getItem("location"))})
               })
        }
    }
    updateState(){
        this.setState({isLoading :!this.state.isLoading})
    }
    createBattleCards(battles){

        battles.forEach(battle=>{

        })
    }
    render() {
        const {isLocation} = this.props
        const {location} = this.state
        return (

            <div>
                <TopNavigation updateParent={this.updateState.bind(this)}/>
                <div  className="ui container">
                <br/>
                {
                    (JSON.parse(localStorage.getItem("location")) === null || location === null) &&
                    <CardGroup>
                        <CardDeck style={{"font-family": "Game of Thrones"}} >
                            <CardColumns>
                                <Card bg="dark" text="white" style={{"width": "250%"}} className="text-center p-3">
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0 card-body">
                                            <Card.Text>
                                                Welcome to
                                            </Card.Text>
                                        </blockquote>
                                    </Card.Body>
                                </Card>
                            </CardColumns>
                            <CardColumns>

                                <Card style={{"width": "300%"}} bg="danger" text="white" className="text-center p-3">
                                    <Card.Body>
                                        <Card.Title>
                                            Game Of Thrones
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </CardColumns>
                                <CardColumns>
                                    <Card bg="dark" text="white" style={{"width": "250%"}} className="text-center p-3">
                                        <Card.Body>
                                            <blockquote className="blockquote mb-0 card-body">
                                                <Card.Text>
                                                    Battle App
                                                </Card.Text>
                                            </blockquote>
                                        </Card.Body>
                                    </Card>
                                </CardColumns>


                        </CardDeck>
                    </CardGroup>
                }
                {
                    (JSON.parse(localStorage.getItem("location")) !== null &&  location !== null) && <div>
                        <CardGroup>
                            <CardDeck style={{"font-family": "Game of Thrones"}} >
                                <CardColumns>
                                    <Card bg="dark" text="white">
                                        Head

                                    </Card>
                                </CardColumns>
                            </CardDeck>
                        </CardGroup>
                    </div>
                }
                </div>
            </div>)
    }
};


HomePage.propTypes = {
    isLocation: PropTypes.bool.isRequired,
    battleBasedOnLocation: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        isLocation: !!state.location,

        // userType:decode(localStorage.iotJWT).userType
    }
}


export default connect(mapStateToProps,{battleBasedOnLocation})(HomePage)