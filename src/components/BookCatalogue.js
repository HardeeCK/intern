import React from "react";
import Books from "./Books.js";
import BookMap from "./BookMap.js";
import Button from '@material-ui/core/Button';
function Catalogue(){
    return <div className="catalogue">
        <h2>THE BEST BOOKS AND AUDIOBOOKS ARE WAITING FOR YOU</h2>
        <div className="books">
            {Books.map(book =>{
                return <BookMap number={book.book_no} />
            })}
        </div>
        <div className="button"><Button className="Book-button" variant="contained" disableElevation>Read Free For 30 Days</Button></div>
        <div ><p className="cancel-para">Cancel anytime</p></div>
    </div>
}
export default Catalogue;