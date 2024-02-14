import Image from '../images/values.jpg'
import { IoDiamond } from "react-icons/io5";
import SectionHead from './SectionHead';
import Card from './Card'
import {values} from '../data.js'

const Values = () => {
  return (
    <>
    <section className='values'>
        <div className="container values_container">
            <div className="values_left">
                <div className="values_image">
                    <img src={Image} alt="true"/>
                </div>
            </div>
            <div className="values_right">
                <SectionHead icon={<IoDiamond/>} title="Values"></SectionHead>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, inventore ipsa.
                    <div className="values_wrapper">
                        {
                            values.map(({id,icon,title,desc})=>
                            {
                                return<Card className="values_value" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                                </Card>
                            })
                        }
                    </div>
                </p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Values