import React from 'react'
import Layout from '../components/Layout'
import header from "../img/header.svg";

export default () => (
    <Layout>
        <section className="hero has-background">
            <img
                className="hero-background"
                src={header}
                alt="skilling time"
            />
        </section>
        <section className="has-background-purpletransparent section">
            <div className="container">
                <div className="content">
                    <p>Skilling Time is a bank of content that helps professionals like you discover how pro bono work
                        boosts your career and provides a meaningful way to give back

                        Or as I like to call it, doing good with your day job </p>
                    <h2>Read</h2>
                    <p>Action-orientated articles about career boosting pro bono experiences</p>
                    <h2>Listen</h2>
                    <p>20-minute interviews with people with pro bono know-how</p>
                    <h2>Meet</h2>
                    <p>Professionals like you who want to discover how to do good with their day job</p>
                </div>
            </div>
        </section>
    </Layout>
)
