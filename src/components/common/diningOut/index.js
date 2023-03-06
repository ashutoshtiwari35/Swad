import React from 'react'
import { diningOut } from '../../../data/diningOut'
import Collections from '../collections'
import ExploreSection from '../exploreSection'
import Filters from '../filters'
import './diningOut.css'

const DiningOut = () => {

  const diningList = diningOut;


  const collectionList = [
    {
        id: 1,
        title: "10 Unmissable Holi Plans",
        cover: "https://b.zmtcdn.com/data/collections/f9c45a101d402ce2d045479da4fd1122_1677824627.jpg",
        places: "12 places"

    },
    {
        id: 2,
        title: "7 Newly Opened Restaurants",
        cover: "https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674825385.jpg",
        places: "5 places"

    },
    {
        id: 3,
        title: "18 Serene Rooftop Places",
        cover: "https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674825836.jpg",
        places: "18 places"

    },
    {
        id: 4,
        title: "Top 10 Pictursque Cafes",
        cover: "https://b.zmtcdn.com/data/collections/bfa5063b43c9b8f6c9c3b1a37c815d3b_1674826835.jpg",
        places: "10 places"

    },
    {
        id: 5,
        title: "10 Trending Restaurants",
        cover: "https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247364.jpg",
        places: "10 places"

    },
    {
        id: 6,
        title: "11 Romantic Dining Places",
        cover: "https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674825932.jpg",
        places: "11 places"

    },
    {
        id: 7,
        title: "21 Romantic Finest Microbreweries",
        cover: "https://b.zmtcdn.com/data/collections/d7755d2b4aea34ef9bfce4d60838750d_1674826498.jpg",
        places: "21 places"

    },
    {
        id: 8,
        title: "21 Best Bars & Pubs",
        cover: "https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674826727.jpg",
        places: "21 places"

    },
]

const diningFilters = [
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
      title: "Outdoor Seating",
  },
  {
      id: 4,
      title: "Serves Alchohol",
  },
  {
      id: 5,
      title: "Open Now"
  },
  {
      id: 6,
      title: "Pure Veg",
  },
]


  return (
    <div>
      <Collections list ={ collectionList} />
      <div className="max-width">
       <Filters filtersList ={diningFilters} />
      </div>
      <ExploreSection list={diningList} collectionName="Best Dining Restaurants near you in Bengaluru" />
    </div>
  )
}

export default DiningOut