import React from 'react';
import mainLogo from '../../images/gra.png';
import './header.less'
import './sidebar.less'
export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: this.setTime()
        }
    }
    setTime() {
        let tempTime = new Date();
        return tempTime.toLocaleTimeString();
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ time: this.setTime() })
        }, 1000)
    }
    render() {
        return <header className="header wrapper">

            <div className="headlogo">
                <img src={mainLogo} alt="Logo" />
            </div>
            <div className="headtext">
                <h3 >e-Invoice</h3>

            </div>

            <div className="headclock">
                <h3>
                    {this.state.time}
                </h3>
            </div>

        </header>;
    }
}

