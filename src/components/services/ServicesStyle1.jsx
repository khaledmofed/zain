"use client"
import React, { useEffect } from 'react';
import shape10 from '@/assets/img/shape/10.png'
import Services1TabData from '@/assets/jsonData/services/Services1TabData.json'
import SingleServices1 from './SingleServices1';
import Image from 'next/image';
import Link from 'next/link';

const ServicesStyle1 = () => {
    useEffect(() => {
        // Ensure Bootstrap is loaded
        if (typeof window !== 'undefined' && window.bootstrap) {
            return;
        }
    }, []);

    const handleUnitClick = (tabId) => {
        if (typeof window !== 'undefined') {
            // Trigger click on the corresponding tab button
            const tabButton = document.querySelector(`[data-bs-target="#${tabId}"]`);
            if (tabButton) {
                // Use Bootstrap Tab API if available
                if (window.bootstrap && window.bootstrap.Tab) {
                    const tab = new window.bootstrap.Tab(tabButton);
                    tab.show();
                } else {
                    // Fallback: trigger click
                    tabButton.click();
                }
            }
        }
    };

    return (
        <>
            <div className="services-style-one-area default-padding bg-gray">
                <div className="triangle-shape">
                    <Image src={shape10} alt="Shape" className="toty-logo" />
                </div>
                <div className="center-shape" style={{ backgroundImage: `url(/assets/img/shape/5.png)` }}></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-md-60">
                            <div className="service-nav-info">
                                <h4 className="sub-title">Business Model</h4>
                                <h2>Two Specialized Business Units Delivering Integrated Solutions</h2>
                                <div className="nav nav-tabs service-tab-navs" id="nav-tab" role="tablist" suppressHydrationWarning>
                                    <button className="nav-link active" id="nav-id-1" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true" suppressHydrationWarning>
                                        <i className="flaticon-portfolio"></i>
                                        Business Model
                                    </button>
                                    <button className="nav-link" id="nav-id-2" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false" suppressHydrationWarning>
                                        <i className="flaticon-megaphone"></i>
                                        Zain Infra
                                    </button>
                                    <button className="nav-link" id="nav-id-3" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false" suppressHydrationWarning>
                                        <i className="flaticon-save-money"></i>
                                        Zain DX
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 pl-50 pl-md-15 pl-xs-15">
                            <div className="tab-content services-tab-content" id="nav-tabContent">
                                {Services1TabData.map(service => {
                                    if (service.tabType === 'businessModel') {
                                        return (
                                            <div className={`tab-pane fade ${service.tabClass}`} id={service.tabId} role="tabpanel" aria-labelledby={service.ariaLabelled} key={service.id}>
                                                <div className="business-model-content">
                                                    <h3 className="mb-10">Business Units</h3>
                                                    <p className="mb-20">{service.intro}</p>
                                                    <div className="row mb-10">
                                                        {service.businessUnits.map(unit => {
                                                            // Map unit to corresponding tab
                                                            const tabId = unit.title === "Zain Infra" ? "tab2" : "tab3";
                                                            return (
                                                                <div className="col-md-6 mb-30" key={unit.id}>
                                                                    <div 
                                                                        className="business-unit-card clickable-unit-card" 
                                                                        onClick={() => handleUnitClick(tabId)}
                                                                    >
                                                                        <i className={unit.icon}></i>
                                                                        <h4>{unit.title}</h4>
                                                                        <p>{unit.subtitle}</p>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                    <h4 className="mb-20">This model provides:</h4>
                                                    <ul className="model-provides-list">
                                                        {service.modelProvides.map(item => (
                                                            <li key={item.id}>
                                                                <i className={item.icon}></i>
                                                                <span>{item.title}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        );
                                    } else if (service.tabType === 'businessUnit') {
                                        return (
                                            <div className={`tab-pane fade ${service.tabClass}`} id={service.tabId} role="tabpanel" aria-labelledby={service.ariaLabelled} key={service.id}>
                                                <div className="business-unit-content">
                                                    <h3 className="mb-20">{service.unitTitle}</h3>
                                                    <p className="mb-30">{service.unitDescription}</p>
                                                    <h4 className="mb-20" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>Services: {service.btnText && service.link && (
                                                        <div className="position-xd-infra">
                                                            <Link className="btn-animation dark mt-0" href={service.link}>
                                                                <i className="fas fa-arrow-right"></i> <span>{service.btnText}</span>
                                                            </Link>
                                                        </div>
                                                    )}</h4>
                                                    <div className="row">
                                                        {service.services.map(data => (
                                                            <div className="col-lg-6 col-md-6 mt-15 mt-md-15 mt-xs-10" key={data.id}>
                                                                <SingleServices1 data={data} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="value-delivered mt-20">
                                                        <h4 className="mb-2">Value Delivered:</h4>
                                                        <p>{service.valueDelivered}</p>
                                                    </div>
                                                    
                                                    {/* {service.integratedApproach && (
                                                        <div className="integrated-approach mt-40">
                                                            <h4 className="mb-15">{service.integratedApproach.title}</h4>
                                                            <p className="mb-20">{service.integratedApproach.description}</p>
                                                            <ul className="approach-points">
                                                                {service.integratedApproach.points.map((point, index) => (
                                                                    <li key={index}>{point}</li>
                                                                ))}
                                                            </ul>
                                                            <p className="mt-20"><strong>{service.integratedApproach.conclusion}</strong></p>
                                                        </div>
                                                    )} */}
                                                </div>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesStyle1;
