
import React, { useState, useEffect } from 'react';

const Booklist = props => {
    const [bookData, setBookData] = useState(null);
    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response));
        console.log(props)

    }, [props])
    return (
        <div>
            <ul>
                {
                    bookData === null ? <p>now loading...</p>
                        : bookData.data.items.map((x, index) =>
                            <li key={index}>{x.volumeInfo.title}
                            著者{x.volumeInfo.authors}
                                <br />
                                {x.volumeInfo.readingModes.image ? <img src={x.volumeInfo.imageLinks.thumbnail} /> : "No image"}

                            </li>
                        )

                }
            </ul>

        </div>
    );
}
export default Booklist;