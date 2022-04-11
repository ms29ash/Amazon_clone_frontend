import React from 'react'
import './ServiceCard.css'

function ServiceCard({ title, service }) {
    return (
        <div className="service__card">
            <h3>{title}</h3>
            <div className="services">
                {
                    service.map((serviceItem) => {

                        return (
                            <div className="wrapper__service">
                                <img src={serviceItem.image_url} alt="" />
                                <p>{serviceItem.name}</p>
                            </div>)
                    })
                }
                {/* <div className="wrapper__service">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/November/GWPercolate/Bus_186x116._SY116_CB653435429_.jpg" alt="" />
                    <p>Bus tickets</p>
                </div>
                <div className="wrapper__service">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/November/GWPercolate/Train_186x116._SY116_CB653435429_.jpg" alt="" />
                    <p>Train tickets</p>
                </div>
                <div className="wrapper__service">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/November/GWPercolate/essential_186x116._SY116_CB653435429_.jpg" alt="" />
                    <p>Essential travel products</p>
                </div> */}
            </div>

        </div>
    )
}

export default ServiceCard
