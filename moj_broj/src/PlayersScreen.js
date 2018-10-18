import React, { Component } from 'react';

class PlayersScreen extends Component {

    render() {
        let message = null;
        let corrOrWrong = this.props.klasaSolution
        let pInputClass = `container--pInput ${corrOrWrong}`
        let playersInput = this.props.btnClickedArr;
        playersInput = playersInput.map((input, i) => {
            return <span key={i}>{input.value}</span>
        })

        if (this.props.message.length > 0) {
            message = (
                <div className='alertMy'>
                    <p className='message'>
                        {this.props.message}
                    </p>
                </div>)
        }
        return (
            <div className={pInputClass}>{playersInput} = <span>{this.props.solution} </span>
                {message}
            </div>



        );
    }
}

export default PlayersScreen;