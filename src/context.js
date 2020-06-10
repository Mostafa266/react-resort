import React, { Component } from 'react'

const RoomContext = React.createContext();


class RoomProvider extends Component {
    state={
        rooms:[
            {
                name:'First room',
                id:1,
                type:'valley'
            },
            {
                name:'Second room',
                id:2,
                type:'valley'
            }, {
                name:'Third room',
                id:3,
                type:'valley'
            }
            
        ]
    }
    render() {
        return (
            <div>
                <RoomContext.Provider value={this.state.rooms}>
                {this.props.children}
                </RoomContext.Provider>
            </div>
        )
    }
}
const RoomConsumer = RoomContext.children;
export {RoomProvider,RoomContext,RoomConsumer}