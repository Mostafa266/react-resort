import React, { Component } from 'react'
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms:[], // add all rooms
        sortedRooms:[], // add rooms after filter it
        featuredRooms:[], // all rooms has a featured value is true,
        loading:true //to show loading div after load the data request
    };
    
    componentDidMount(){
        let rooms = this.formatData(items)
        let featuredRooms = rooms.filter(room => room.featured === true)
        this.setState({
            rooms,featuredRooms,sortedRooms: rooms, // here you do all equal [rooms] directly and featuredRooms too equal rooms
            loading:false
        })
    }

    formatData = formatedItems => {
        let tempItem = formatedItems.map(item => { //loop over all items coming from parameter
            let id = item.sys.id; // get id from data to copy in new array with all values
            let images= item.fields.images.map(image => //get array images from data to copy in new array with all values
                image.fields.file.url // access the image directly     
            );
            let room = {...item.fields,images,id} // assign all values to new variable 
            return room
        });

        return tempItem
    }


    render() {
        return (
            <div>
                {/* <RoomContext.Provider value={this.state}>  the same thiing if use speread operator*/}
                <RoomContext.Provider value={{...this.state}}>
                {this.props.children}
                </RoomContext.Provider>
            </div>
        )
    }
}
const RoomConsumer = RoomContext.children;
export {RoomProvider,RoomContext,RoomConsumer}