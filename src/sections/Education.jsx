import React from "react";
import Card from "../components/Card";
import EducationData from "../data/Education"


export default function Education({id}){
    return (
        <section className="my-3 row" id={id}>
            <h2>Education</h2>
            {EducationData.map((item) => {
                return (
                    <div className="col-lg-6 my-2" key={item.title}>
                        <Card title={item.title} sub_title={item.sub_title} link={item.link} text={item.description} />
                    </div>
                )
            })}
        </section>
    )
}