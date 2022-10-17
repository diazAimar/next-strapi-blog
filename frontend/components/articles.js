import React from 'react';
import Card from './card';

const Articles = ({ articles }) => {
  return (
    <div>
      <div className="" data-uk-grid="true">
        <div
          className="uk-grid-collapse uk-grid-medium"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}
        >
          {articles.map((article, i) => {
            return <Card article={article} key={`${article.attributes.slug}`} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
