import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Card, CardColumns, CardDeck, CardGroup, Col,Row} from 'react-bootstrap'
import TopNavigation from "../Navigation/TopNavigation";
import {battleBasedOnLocation} from '../actions/battleData';
import {Link} from 'react-router-dom';
import attack from '../icons/attack.png';
import defend from '../icons/defend.png';


class HomePage extends React.Component {

    state = {
        location:null,
        isLoading :false,
        battles:[],
    }

    componentWillMount() {
        if (JSON.parse(localStorage.getItem("location")) === null){
            this.setState({location:null})
        }
        this.setState(prevState=>({
            location: prevState.location
        }))
    }

    componentDidUpdate(){

                if (this.state.isLoading===true && JSON.parse(localStorage.getItem("location")) !== null) {
                    console.log(localStorage.getItem("location"))
                    this.props.battleBasedOnLocation(JSON.parse(localStorage.getItem("location")))
                        .then(battles => {
                            this.setState({battles: battles, location: JSON.parse(localStorage.getItem("location"))})
                        })
                    this.updateState()
                }
            }

    updateState(){
        this.setState({isLoading :!this.state.isLoading})
    }
    createBattleCards(battles){
        var html=[]
        battles.forEach(battle=>{
            html.push(
                <Link to={"/battleDetail/"+battle.name} >
                <Card bg="dark" text="white"  style={{"width": "100%"}} className="text-center p-3">
                    <Card.Title>{battle.name}</Card.Title>
                    <Card.Subtitle>{battle.region}</Card.Subtitle>

                    <Card.Body>
                        <Card.Text>
                        <Row>
                        <Col xs={2}><img className="cardIcon" src={attack}></img></Col><Col xs={10}>{" "+battle.attacker_king}</Col>
                        </Row>
                            <hr/>
                        <Row>
                            <Col xs={2}><img className="cardIcon" src={defend}></img></Col><Col xs={10}>{" "+battle.defender_king}</Col>
                        </Row>

                        </Card.Text>
                    </Card.Body>
                </Card>
                </Link>

            )
        })
        return html;
    }
    render() {
        const {isLocation} = this.props
        const {location,battles} = this.state
        return (

            <div>
                <TopNavigation updateParent={this.updateState.bind(this)}/>
                <div  className="ui container " >
                <br/>
                {
                    (JSON.parse(localStorage.getItem("location")) === null || location === null) &&
                    <div style={{"margin-left":"50%"}}>
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

                                <Card style={{"width": "250%"}} bg="danger" text="white" className="text-center p-3">
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
                    </div>
                }
                {
                    (JSON.parse(localStorage.getItem("location")) !== null &&  location !== null) && <div>
                        <CardGroup>
                            <CardDeck style={{"font-family": "Game of Thrones"}} >
                                <CardColumns>
                                    {this.createBattleCards(battles)}
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