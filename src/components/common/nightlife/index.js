import React from 'react'
import { nightlife } from '../../../data/nightlife'
import Collections from '../collections'
import './nightlife.css';
import ExploreSection from '../exploreSection'
import Filters from '../filters'

const Nightlife = () => {

  const nightlifeList = nightlife;

  const collectionList = [
    {
        id: 1,
        title: "21 Romantic Finest Microbreweries",
        cover: "https://b.zmtcdn.com/data/collections/d7755d2b4aea34ef9bfce4d60838750d_1674826498.jpg",
        places: "21 places"

    },
    {
        id: 2,
        title: "21 Best Bars & Pubs",
        cover: "https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674826727.jpg",
        places: "21 places"

    },
]

const nightlifeFilters = [
  {
      id: 1,
      icon: <i class="fi fi-rr-settings-sliders absolute-center"></i>,
      title: "Filters"
  },
  {
      id: 2,
      title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Rating: 4.0+",
  },
  {
      id: 4,
      title: "Pubs and Bars",
  },
]

  return (
    <div>
      <Collections list={collectionList} />
      <div className="max-width">
       <Filters filtersList ={nightlifeFilters} />
      </div>
      <ExploreSection list={nightlifeList} collectionName="Nightlife Restaurants in Bengaluru" />
    </div>
  )
}

export default Nightlife