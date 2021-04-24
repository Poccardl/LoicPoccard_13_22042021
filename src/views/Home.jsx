import React from 'react'
import { Hero } from '../components/hero/Hero.jsx'
import { Feature } from '../components/feature/Feature.jsx'

export class Home extends React.Component {

    render() {
        return (
            <>
            <Hero/>
            <Feature/>
            </>
        )
    }
}