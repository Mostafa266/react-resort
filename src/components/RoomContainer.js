import React from 'react'
import  {RoomConsumer} from './../context';
import Loading from './Loading';
import RoomList from './RoomList';
import RoomFilter from './RoomFilter';


export default function RoomContainer() {
    return (
        // why here must use Consumer = coz we in React funcional component not a class
        <RoomConsumer>
            {/* must run this function with arguments = value - this value we was passed from Context.js */}
           
            {value => {
                const {loading,sortedRooms,rooms} = value;
                if(loading) {
                    return <Loading/>
                }
                return(
                    <div>
                        <RoomList/>
                        <RoomFilter/>
                    </div>
                )
            }}
        </RoomConsumer>
    )
}
