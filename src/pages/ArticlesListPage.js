import React, { Component } from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';

class ArticlesListPage extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>
                    Articles List
                </h1>
                <ArticlesList articles={articleContent} />
            </React.Fragment>
        )
    }
}

export default ArticlesListPage;