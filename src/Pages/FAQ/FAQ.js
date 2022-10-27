import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>What is online learning like?
                </Accordion.Header>
                <Accordion.Body>
                    For those who have never encountered online learning, the biggest question is often what it is actually like. The caveat, as you know, is that online learning comes in several forms. Therefore, this is your chance to explain that to people. Point out that there are different types of online courses and programs, and that they'll have to decide which is best for them. Then, explain the types of courses you offer and how your online programs work to give them all the information they need. This not only gives them information, but it increases their trust because you're being transparent and giving them straightforward answers.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Can I learn at my own pace?</Accordion.Header>
                <Accordion.Body>
                    This is another common question that people have about online courses. There are usually self-paced programs and traditional classroom or meeting-style programs available. Today's world is full of busy people that want to better themselves, so the self-paced programs are popular. Whether or not you provide this option, be sure to answer this question for people and explain the pros and cons of each type of learning. As a bonus, you can even invite them to contact you for more information or to discuss what their options are.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );

};

export default FAQ;