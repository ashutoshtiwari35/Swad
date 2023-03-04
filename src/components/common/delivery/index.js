import React from 'react';
import { restaurants } from '../../../data/restaurants';
import ExploreSection from '../exploreSection';
import Filters from '../filters';
import './delivery.css'
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topBrands';

const Delivery = () => {

    const deliveryFilters = [
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
            title: "Safe and Hygienic",
        },
        {
            id: 4,
            title: "Pure Veg",
        },
        {
            id: 5,
            icon: <i class="fi fi-rr-apps-sort absolute-center"></i>,
            title: "Delivery Time"
        },
        {
            id: 6,
            title: "Great Offers",
        },
    ]

    const restaurantList = restaurants;

    return (
        <div>
            <div className="max-width">
                <Filters filtersList = {deliveryFilters} />
            </div>
            <DeliveryCollections />
            <TopBrands />
            <ExploreSection list ={restaurantList} collectionName="Delivery Restaurant in Bangalore" />
        </div>

    )
}

export default Delivery