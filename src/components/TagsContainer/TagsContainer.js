import React from 'react';
import './TagsContainer.scss'

const TagsContainer = ({tags}) => {
  return (
    <div className='blog-template-tag-container'>
    {tags.map(tag => {
      return (
        <div key={tag} className='blog-template-tag'>
          {tag}
        </div>
      );
    })}
  </div>
  );
};

export default TagsContainer;