import { useState } from "react"
import { testimonials } from "../data"
import Card from "./Card";
import SectionHead from "./SectionHead";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import {ImQuotesLeft} from "react-icons/im"

const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} = testimonials[index];

const prevTestHandler=()=>{
    setIndex(prev => prev-1)

    if(index <= 0)
    {
        setIndex(testimonials.length-1)
    }
}
const nextTestHandler=()=>{
    setIndex(prev => prev+1)

    if(index >= testimonials.length-1)
    {
        setIndex(0)
    }
}

  return (
    <section className="testimonials">
        <div className="container testimonials_container">
            <SectionHead icon={<ImQuotesLeft/>} title="Testimonials" className="testimonials_head" />
            <Card className="testimonial">
                <div className="testimonial_avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p className="testimonial_quote">{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small className="testimonial_title">{job}</small>
            </Card>
            <div className="testimonials_btn_container">
                <button className="testimonials_btn" onClick={prevTestHandler} ><IoIosArrowDropleftCircle/></button>
                <button className="testimonials_btn" onClick={nextTestHandler} ><IoIosArrowDroprightCircle/></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials