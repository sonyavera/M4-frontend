import React, { useReducer } from 'react';
import EventCard from '../components/EventCard'
import { Segment, Container, Dropdown, Form } from 'semantic-ui-react'
import Footer from '../components/Footer.jsx'
import SearchForm from '../components/SearchForm.jsx'



class AllEventsContainer extends React.Component {



    renderAllEvents=()=>{
        if (this.props.filteredEvents.length > 0) {
            
            return this.props.filteredEvents.map(event => {
                return <EventCard 
                    key={event.id} 
                    event={event}
                    joinedEvents={this.props.joinedEvents}
                    learnMore={this.props.learnMore} 
                    joinEvent={this.props.joinEvent}
                    user={this.props.user}
                    deleteUserEvent={this.props.deleteUserEvent}
                    />})
        } else {
            
            return this.props.events.map(event => {
                return <EventCard 
                    key={event.id} 
                    event={event}
                    joinedEvents={this.props.joinedEvents}
                    learnMore={this.props.learnMore} 
                    joinEvent={this.props.joinEvent}
                    user={this.props.user}
                    deleteUserEvent={this.props.deleteUserEvent}
                    />})
        }

    }


    render() {
        return (
        <>
            
            <Container inverted='true' style={{ marginTop: '7em' }}>
           
            <Segment className="ui grid container" attached="bottom" > 
               
               <span>
                <h1>All Events </h1>
               </span>
                <span style={{}}>
                  <SearchForm 
                  right='true' 
                  searchHandler={this.props.searchHandler}/>
                </span>
                    <Segment className="ui grid container">
                        {
                        this.renderAllEvents()
                        } 
                    </Segment>      
            </Segment>
       

            </Container>
            <Footer />

            </>
        )
    }

}

export default AllEventsContainer;

