import React, { useEffect, useState } from 'react'
import './Services.css'
import ServiceCard from './ServiceCard';
import axios from './axios'

function Services() {
    const [services, setService] = useState();
    const fetchServices = async () => {
        try {
            const res = await axios.get('/services')
            console.log(res.data)
            setService(res.data)
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchServices();
    }, [])
    return (
        <div className="service__cards">
            {
                services?.map((service) => {
                    return <ServiceCard key={service._id} title={service.title} service={service.service} />
                })
            }

            {/* <ServiceCard />
                <ServiceCard />
                <ServiceCard /> */}
        </div>
    )
}

export default Services
