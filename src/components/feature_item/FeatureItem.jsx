import React from 'react'
import icon_chat from '../../assets/img/icon-chat.png'
import icon_money from '../../assets/img/icon-money.png'
import icon_security from '../../assets/img/icon-security.png'
import PropTypes from 'prop-types'

export class FeatureItem extends React.Component {

    render() {
        return (
            <>
            <div className="feature-item">
                {this.props.data.icon === "chat" ? <img src={icon_chat} alt={`${this.props.data.icon} Icon`} className="feature-icon"/>
                : this.props.data.icon === "money" ? <img src={icon_money} alt={`${this.props.data.icon} Icon`} className="feature-icon"/>
                : this.props.data.icon === "security" ? <img src={icon_security} alt={`${this.props.data.icon} Icon`} className="feature-icon"/>
                : ""}
                <h3 className="feature-item-title">{this.props.data.title}</h3>
                <p>{this.props.data.content}</p>
            </div>
            </>
        )
    }
}

FeatureItem.propTypes = {
    data: PropTypes.object
}