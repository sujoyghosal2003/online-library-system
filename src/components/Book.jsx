import "./Style.css";

function Book(props) {
    return (
        <div className="book-card">
            <img src={props.BooksDetails.coverImage} alt="IMAGE" height="200px" width="200px" className="book-cover" />
            <div className="book-details">
                <h2 className="book-title">{props.BooksDetails.title}</h2>
                <h4 className="book-author">{props.BooksDetails.author}</h4>
                <h4 className="book-pages">{props.BooksDetails.pages}</h4>
                <p className="book-description">{props.BooksDetails.description}</p>
            </div>
        </div>
    );
}

export default Book;
