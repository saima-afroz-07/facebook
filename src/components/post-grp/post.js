import React from 'react'
import Photos from './photos'
import CreatePost from './create-post'
 

export default class Post extends React.Component {
    render(){
        return (
            <div>
            <CreatePost />
            <Photos />
        </div>
    
        )
    }
}
