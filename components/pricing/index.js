import Image from "next/image";
import React, { useState, useEffect } from "react";
function Pricing() {
  return (
    <section className="pricing-con">
      <h1 className="mainheading">3 Roles</h1>
      <div className="pricing-card-wrap">
        <div className="card-wrap">
          <h1 className="card-heading">Marketing Assistant</h1>
          <p className="sub-text">Pre trained Digital Marketers*</p>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Media Buying
          </h3>
          <ul className="pricing-list">
            <li className="price-items">Launch key Campaigns</li>
            <li className="price-items">
              Build Competitive Analysis for New Accounts
            </li>
            <li className="price-items">Helping Record New Creatives</li>
          </ul>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Cold Outreach
          </h3>
          <ul className="pricing-list">
            <li className="price-items">Building an MQL prospect List</li>
            <li className="price-items">
              Setting Cold Email & LinkedIn Outreach Campaigns
            </li>
            <li className="price-items">
              Writing Custom Icebreakers for Each Prospect
            </li>
          </ul>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Social Media Management
          </h3>
          <ul className="pricing-list">
            <li className="price-items">Content Creation</li>
            <li className="price-items">Content Management</li>
            <li className="price-items">Facebook Group Management</li>
          </ul>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Automation & Workflows
          </h3>
          <ul className="pricing-list">
            <li className="price-items">
              Setting basic workflows in Zapier or Integromat
            </li>
            <li className="price-items">
              Building Workflows within your CRM (GHL or Hubspot)
            </li>
            <li className="price-items">Landing Pages & Forms</li>
          </ul>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Billing
          </h3>
          <ul className="pricing-list">
            <li className="price-items">
              Handling Payment Processers like Stripe or Wave
            </li>
          </ul>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Excellent Leadership Qualities
          </h3>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" /> Pre
            Launch and Manage Podcasts/Webinars
          </h3>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" /> Pre
            Entry Level Managers
          </h3>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" /> Pre
            Pre trained Digital Marketers*
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
            <li className="price-items">120-150 Outbound Dials/day</li>
            <li className="price-items">Setting Outbound SMS Sequences</li>
            <li className="price-items">Setting Outbound Email Sequences</li>
            <li className="price-items">Daily Manual & Automated Follow-ups</li>
            <li className="price-items">Booking 1-3 Qualified Sets</li>
          </ul>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Technical Skills
          </h3>
          <ul className="pricing-list">
            <li className="price-items">
              CRM Management (GHL, Hubspot, Salesforce, Pipedrive)
            </li>
            <li className="price-items">Daily Shutdown Scorecards</li>
            <li className="price-items">
              Setting up SDR Task Templates in your Task Management Tool
            </li>
            <li className="price-items">Calendar Management</li>
          </ul>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Taking Inbound Calls & Qualifying Prospects
          </h3>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Capable of Setting Comp Structure for Others
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
            <li className="price-items">Weekly Client Calls</li>
            <li className="price-items">Client Communication Management</li>
            <li className="price-items">KPI & SLA Management</li>
            <li className="price-items">Upselling</li>
          </ul>
          <h3>
            <Image src="/images/done.png" width={12} height={16} alt="~" />
            Customer Success
          </h3>
          <ul className="pricing-list">
            <li className="price-items">Building Rapport from day 1</li>
            <li className="price-items">
              Brain Storming with Clients to Scale their Accounts
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
