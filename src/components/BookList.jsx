import Book from "./Book";
import "./Style.css";

function BookList(props) {
    console.log(props);
    return (
        <div className="bookList">
            {props.BooksData.map((data, index) => (
                // Use a combination of id and index as a fallback
                <Book key={`${data.id}-${index}`} BooksDetails={data} />
            ))}
        </div>
    );
}

export default BookList;
