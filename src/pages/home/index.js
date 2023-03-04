import React, { useState } from 'react'
import Delivery from '../../components/common/delivery'
import DiningOut from '../../components/common/diningOut'
import Footer from '../../components/common/footer'
import Header from '../../components/common/header'
import Nightlife from '../../components/common/nightlife'
import TabOptions from '../../components/common/tabOptions'

const HomePage = () => {

    const [activeTab, setActiveTab] = useState("Delivery");

    const getCorrectScreen = (tab) => {
        switch (tab) {
            case "Delivery":
                return <Delivery />
            case "Dining out":
                return <DiningOut />
            case "Nightlife":
                return <Nightlife />
            default:
                return <Delivery />
        }
    }

    return (
        <div>
            <Header />
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
            {
                getCorrectScreen(activeTab)
            }
            <Footer />
        </div>
    )
}

export default HomePage