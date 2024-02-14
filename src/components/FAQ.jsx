import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const FAQ = ({ question, answer }) => {
  const [answerShow, setAnswerShow] = useState(false);
  return (
    <article className="faq">
      <div>
        <h4>{question}</h4>
        <button
          className="faq_icon"
          onClick={() => setAnswerShow((prev) => !prev)}
        >
          {answerShow ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {answerShow && <p>{answer}</p>}
    </article>
  );
};
export default FAQ;
