import React from 'react';
import NextImage from '../components/image';

const ArticleHeader = ({ article }) => {
  console.log(article);
  return (
    <div class=" uk-grid-collapse uk-child-width-1-2@s uk-margin uk-flex">
      <div class="">
        <NextImage image={article.attributes.image} />
      </div>
      <div className="uk-flex uk-flex-column uk-flex-center uk-flex-middle	uk-text-center">
        <h1 class="uk-card-title " style={{ fontSize: '4rem' }}>
          {article.attributes.title}
        </h1>
        <p className="uk-padding-small	">{article.attributes.description}</p>
        <p class="uk-article-meta">Written by {article.attributes.author.data.attributes.name}</p>
      </div>
    </div>
  );
};

export default ArticleHeader;
