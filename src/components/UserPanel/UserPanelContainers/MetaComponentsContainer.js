/**
 * Created by Master on 02-Jul-17.
 */
import React, { Component } from 'react';
import TimerCountComponent from './../UserPanelComponents/MetaComponents/TimerCountComponent';
import TimerDisplayAverageComponent from '../UserPanelComponents/MetaComponents/TimerDisplayAverageComponent';
import TimerTotalComponent from '../UserPanelComponents/MetaComponents/TimerTotalComponent';
class MetaComponentsContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <TimerCountComponent count={ this.props.count }/>
                <TimerDisplayAverageComponent average={ this.props.average } />
                <TimerTotalComponent total={ this.props.total} />
            </div>
        )
    }

}

export default MetaComponentsContainer;