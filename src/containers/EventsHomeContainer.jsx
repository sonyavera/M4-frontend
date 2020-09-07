import React from 'react';
import EventsContainer from './EventsContainer.jsx';
import RecommendationsContainer from './RecommendationsContainer.jsx';
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Redirect } from 'react-router-dom';

class EventsHomeContainer extends React.Component {



    
    render() {
        return (  
            <>
            { this.props.user ?
            <>
            <Navbar />
            <EventsContainer events={this.props.events} user={this.props.user} joinEvent={this.props.joinEvent} deleteEvent={this.props.deleteEvent}/>
            <Footer />
            </>
            
            :

            <Redirect to='/signup' />
            
            }
        </>
        )
    }

}

export default EventsHomeContainer;