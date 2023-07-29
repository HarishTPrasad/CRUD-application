import React, {useState} from 'react'

export default function Container() {

    const [value, setvalue]=useState(0);
    const height={
        height:'100px'
    }
    
    

    return (
        <div>
            <div className="container my-4">
                <h1 className="text-center">TODOs List</h1>
                
                    <div className="mb-3">
                        <label for="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Add an item to a list</div>
                    </div>
                    
                    <div className="form-floating  mb-4">
                        <textarea className="form-control" placeholder="Leave a comment here" id="description" style={height}></textarea>
                        <label for="description">description</label>
                    </div>

                    <button type="submit" className="btn btn-primary"  id="add">Add To List</button>
                
                <div className="my-4 items">
                    <h2>Your Items</h2>
                </div>
            </div>
        </div>
    )
}
