import Image from "next/image";
import React, { useState, useEffect } from "react";
function Pricing() {
  return (
    <section className="pricing-con">
      <h1 className="mainheading">3 Roles</h1>
      <div className="pricing-card-wrap">
        <div className="card-wrap">
          <h1 className="card-heading">Media Buying Assistant</h1>
          <p className="sub-text">Pre trained Digital Marketers*</p>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Launch Key Campaigns
          </h3>
          <ul className="pricing-list">
            <li className="price-items">Paid Ads</li>
            <li className="price-items">Cold Email Outreach</li>
            <li className="price-items">Lead Generation</li>
          </ul>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Social Media Management
          </h3>
          <ul className="pricing-list">
            <li className="price-items">Content Creation</li>
            <li className="price-items">Content Management</li>
            <li className="price-items">Social Media Outreach</li>
            <li className="price-items">Content Marketing</li>
          </ul>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Setting up & Managing your CRM
          </h3>
          <ul className="pricing-list">
            <li className="price-items">Automation & Workflows</li>
            <li className="price-items">Landing Pages & Forms</li>
          </ul>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Excellent Leadership Qualities
          </h3>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Launch and Manage Podcasts/Webinars
          </h3>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Entry Level Managers
          </h3>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" /> Pre
            trained Digital Marketers*​
          </h3>
          <div className="price-card-btn">
            <a href="#calendly" className="btnLink">
              Get Started
            </a>
          </div>
        </div>
        <div className="card-wrap">
          <h1 className="card-heading">Sales Development Rep</h1>
          <p className="sub-text">Pre trained Digital Marketers*</p>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Appointment Setting
          </h3>
          <ul className="pricing-list">
            <li className="price-items">80 - 150 outbound calls a day</li>
            <li className="price-items">Follow-ups with all your leads</li>
            <li className="price-items">Scheduling 1 - 3 Demo Calls</li>
          </ul>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Technical Skills
          </h3>
          <ul className="pricing-list">
            <li className="price-items">CRM Management</li>
            <li className="price-items">Opportunity Management</li>
            <li className="price-items">Calendar Management</li>
          </ul>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Taking Inbound Calls & Qualifying Prospects
          </h3>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Strong Interpersonal Skills
          </h3>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Strong Communication Skills
          </h3>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Relationship Building Skills
          </h3>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" /> Pre
            trained Digital Marketers*
          </h3>
          <div className="price-card-btn">
            <a href="#calendly" className="btnLink">
              Get Started
            </a>
          </div>
        </div>
        <div className="card-wrap">
          <h1 className="card-heading">Account Manager</h1>
          <p className="sub-text">Pre trained Digital Marketers*</p>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Client Retention
          </h3>
          <ul className="pricing-list">
            <li className="price-items">Client management</li>
            <li className="price-items">Making upsells</li>
          </ul>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Customer Success Management
          </h3>
          <ul className="pricing-list">
            <li className="price-items">Maximize profitability</li>
            <li className="price-items">
              Fostering positive relations with your clients
            </li>
          </ul>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Culturally Fit
          </h3>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Project Management
          </h3>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Team Management
          </h3>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Perfect English, both spoken and
          </h3>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" /> Pre
            trained Digital Marketers*
          </h3>
          <div className="price-card-btn">
            <a href="#calendly" className="btnLink">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
