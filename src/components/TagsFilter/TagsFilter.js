import React from 'react';

const TagsFilter = ({tags}) => {
  return (
    <>
      {tags.map(tag=>{
        return <span key={tag}>{tag}</span>
      })}
    </>
  );
};

export default TagsFilter;