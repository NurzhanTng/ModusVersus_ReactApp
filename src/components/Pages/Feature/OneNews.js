import React from "react";

function OneNews(arg) {
    const item = arg['arg'][0]
    const id = arg['arg'][1]

    return (
        <li key={id} className='one-news'>
            <p className="one-news__date"></p>
            <div className="one_news__container">
                <img src={item.urlToImage} alt="" className='one-news__img'/>
                <h3 className="one-news__header">{item.title}</h3>
                <p className="one-news__text">{item.description}</p>
                <a href={item.url} className="one-news__link">Continue reading</a>
            </div>
        </li>
    );
}

export default OneNews