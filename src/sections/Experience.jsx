import React from "react"
import Card from "../components/Card"
import ExperienceData from "../data/Experience"

export default function Experience({id}){
    return (
        <section className="my-3 row" id={id}>
            <h2>Experience</h2>
            {ExperienceData.map((item) => {
                return (
                    <div className="col-lg-6 my-2" key={item.title}>
                        <Card>
                            <Card.Header link={item.link} title={item.title} sub_title={item.place} />
                            <Card.Body text={item.description} />
                        </Card>
                    </div>
                )
            })}
        </section>
    )
}