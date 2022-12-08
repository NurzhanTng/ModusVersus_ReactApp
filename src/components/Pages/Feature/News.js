import React from "react";
import OneNews from "./OneNews";

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            newsCount: 5,
        };
    }

    componentDidMount() {
        fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-11-08&sortBy=publishedAt&apiKey=bfea9840525d403d89ea156d350244b0")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.articles
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className='loading'>Загрузка...</div>;
        } else {
            return (
                <ul className='news'>
                    {items
                        .map((item, id) => <OneNews arg={[item, id]} /> )
                        .filter((item, id) => id < this.state.newsCount && item !== [])
                    }
                </ul>
            );
        }
    }
}

export default News