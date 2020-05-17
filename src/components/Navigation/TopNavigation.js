import React from 'react';
import PropTypes from 'prop-types';
import{connect} from 'react-redux';
import {Menu,Dropdown,Label} from 'semantic-ui-react';
import {Navbar, NavItem,FormLabel, Button, Badge} from "react-bootstrap";


import {battleDataList,battleDataCount} from '../actions/battleData'

class TopNavigation extends React.Component{

    constructor(props) {
        super(props);
    }
    state={
        location:null,
        locations:[],
        battleCount:0
    }

    componentWillMount(){
        var {location} = this.state
        this.props.battleDataList().then(locations =>{
            //console.log(locations)
            this.setState({locations: locations})
        })
            localStorage.setItem('location',JSON.stringify(null));

        this.props.battleDataCount(location).then(count=>{

            this.setState({battleCount: count})
        })
    }
    handleChange = (e,{value}) =>{
        e.preventDefault()
        this.props.updateParent()

        this.props.battleDataCount(value).then(count=>{
            this.setState({battleCount: count,location:value})
        })
        localStorage.setItem('location',JSON.stringify(value));
        this.props.updateParent()
    }

    render () {

        const {locations,battleCount,location} = this.state;
        const {isLocation} = this.props;
        return(
            <Navbar bg="dark" className="align-content-md-end" style={{"font-family":"Game of Thrones"}}>
                <NavItem className="dropdown">

                    { !isLocation && <Dropdown
                        placeholder='Select Battle Field'
                        fluid
                        selection
                        search
                        options={locations}
                        value={location}
                        onChange={this.handleChange}
                    />}
                </NavItem>
                <hr/>
                <NavItem style={{"color":"#fff"}} className="dropdown">
                    Game Of Thrones
                </NavItem>

                <hr/>
                <NavItem  >
                    <Button variant="danger" style={{"font-size":"10px"}}>
                       <span>{(location === null) ?"All Battles":location}</span>
                        <span>
                        <Badge variant="light" style={{"margin-left":"5px","font-size":"12px"}}>{battleCount}</Badge>
                        </span>
                    </Button>


                </NavItem>
            </Navbar>
    )
    }
};


TopNavigation.propTypes={
    isLocation: PropTypes.bool.isRequired,
    battleDataList:PropTypes.func.isRequired,
    battleDataCount: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        isLocation: !!state.locations
        // userType:decode(localStorage.iotJWT).userType
    }
}


export default connect(mapStateToProps,{battleDataList,battleDataCount})(TopNavigation)