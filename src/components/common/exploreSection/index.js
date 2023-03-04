import React from 'react';
import ExploreCard from './exploreCard';
import './exploreSection.css';

const ExploreSection = ({ list, collectionName }) => {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grids">
          {
              list.map((rest) =>{
                  return(
                      <ExploreCard restaurant = {rest} />
                  )
              })
          }
      </div>
    </div>
  )
}

export default ExploreSection