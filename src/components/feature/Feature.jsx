import React from 'react'
import data from '../../data/features.json'
import { FeatureItem } from '../feature_item/FeatureItem.jsx'

export class Feature extends React.Component {

    render() {
        console.log("data.json ->", data)
        return (
            <>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {data.map((data, index) => (
                    <FeatureItem key={`${index}_feature`} data={data}/>
                ))}
            </section>
            </>
        )
    }
}