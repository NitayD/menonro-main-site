import React, { PureComponent } from 'react'
import Title from '../Default/Title'

class Contacts extends PureComponent {
    constructor() {
        super()
        this.state = {
            now: this.getBaseTime()
        }
    }

    converToGMT6() {
        let time = new Date().toLocaleString("en-US", {timeZone: "Asia/Omsk"})
        time = new Date(time)
        return time
    }

    getBaseTime() {
        const hours = this.converToGMT6().getHours()
        if (hours < 6 && hours > 0) {
            return 'night'
        } else if (hours <= 24 && hours > 22) {
            return 'pre-night'
        } else if (hours <= 22 && hours >= 21) {
            return 'evening'
        } else if (hours >= 6 && hours <= 9) {
            return 'morning'
        } else {
            return 'day'
        }
    }

    nowTime() {
        switch (this.state.now) {
            case 'night': return 'скорее всего у меня сейчас глубокий сон.'
            case 'pre-night': return 'вероятнее всего я сейчас погружаюсь в сон, но есть шанс, что я ещё бодрствую.'
            case 'evening': return 'моё рабочее время заканчивается, скоро время для сна.'
            case 'morning': return 'сейчас у меня утренние часы.'
            default: return 'сейчас я открыт к сотрудничеству'
        }
    }

    render() {
        return (
            <>
            <section className='section contacts'>
                <Title type='section' text='Как связаться со мной?'/>
                <Title subtitle type='section' text={`Я сверил свои часы с вашими, ${this.nowTime()}`}/>
            </section>
            <style jsx>{`
                .contacts
            `}</style>
            </>
        )
    }
}

export default Contacts