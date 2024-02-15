import React, { useEffect, useState } from 'react'

function Cards() {
    let apikey = "access_key=8665796aff93a21595a296677d4d2a0f0f8aaa72";
    let url = "https://emoji-api.com/emojis?" + apikey;

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((actualData) => setEmojis(actualData))
            .catch(err => console.log(err));


    }, []);

    const [emojis, setEmojis] = useState([]);
    const [searchEmoji, setSearchEmoji] = useState("");


    return (

        <div className="container">
            <h2>Search Emoji....</h2>
            <form>
                <input type="text" id="search-int" placeholder="Search" onChange={(e) => setSearchEmoji(e.target.value)} />
            </form>
            <div className="row">
                {

                    emojis.filter((items) => {

                        // console.log(searchEmoji);
                        if (searchEmoji == "") {
                            // console.log(items.slug);
                            return items;
                        }

                        else if (items.slug.toLowerCase().includes(searchEmoji.toLowerCase())) {
                            // console.log(items);
                            return items;
                        }
                    }).map((items) => {
                        return (
                            <div className="card" >

                                <div className="card-img">
                                    {items.character}
                                </div>

                            </div>

                        )

                    })

                }
            </div>
        </div>

    )
}

export default Cards