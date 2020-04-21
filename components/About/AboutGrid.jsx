import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HexagonContainer from '../FirstScreen/HexagonMain'

export default class AboutGrid extends Component {
    render() {
        return (
            <Container>
                <h2>Приветствую!</h2>
                <p>
                    Меня зовут Нитай Джаксибаев и я WEB Разработчик.
                </p>
                <p>
                    Я попал в мир WEB разработки ещё во времена окончания школы, и начинался он с простого "HTML за 1 час".
                    Меня эта темя затянула и я решил пройти курс от Нетологии по PHP.
                </p>
                <p>
                    На момент поступления в колледж я овладел базовыми PHP+MySQL, а так же базовой вёрстке при помощи Bootstrap 3 и ванильного CSS 3 + HTML 5.
                </p>
                <p>
                    Спустя пол года я прошёл курс от Академии вёрстки авторства Артёма Исламова, большой акулы фриланса :), 
                    и устроился младшим front-end разработчиком в небольшую студию. Тут я изучу React+Next и научусь делать SPA приложения.
                </p>
                <p>
                    Отработав год студия будет распущена, но редкие фриланс заказы продолжат поступать. 
                    В это время я возвращаюсь в колледж, параллельно подрабатывая у родственника. Продолжаю совершенствоваться 
                    в React и Next, делаю первые прототипы ботов для Telegram и VK.
                </p>
                <p>
                    Так же выполняя разные поручения от родственника, я немного освоился в 
                    фотографии, фотообработке, видеосъёмке, видеообработке и ведении соц сетей.
                </p>
                <p>
                    Как разработчик, не могу гордится этим, но как разносторонне-развитый человек я рад, что не ограничился одним лишь умением кодить.
                </p>
                <style jsx>{`
                    h2 {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 1rem auto;
                        font-size: 2.5rem;
                        font-weight: 700;
                    }
                    p {
                        font-size: 1.75rem;
                        font-family: sans-serif;
                        letter-spacing: 1px;
                        line-height: 1.4;
                        margin: 1rem auto;
                        text-shadow: 1px 1px 1px gray;
                    }
                `}</style>
            </Container>
        )
    }
}


const AboutItem = ({ href, imgSrc }) => {
    return (
        <div>

        </div>
    );
}

