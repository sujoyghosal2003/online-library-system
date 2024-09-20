import Book from "./Book";
import "./Style.css";

function BookList (props){
    console.log(props);
    return(
        <div className="bookList">
            {
                props.BooksData.map((data) => (<Book key={data.id} BooksDetails = {data}/>))
            }
        </div>
    )
    
}
export default BookList;