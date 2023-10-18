import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Price.css';

class PriceSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPrice: this.props.selectedPrice,
        };
    }

    handlePriceChange = (value) => {
        this.setState({
            selectedPrice: value,
        });
        this.props.onPriceChange(value);
    };

    render() {
        return (
            <div className="price-slider">
                <div className="price-range">
                    <div className="label">Precio:</div>
                    <div className="value">${this.state.selectedPrice}</div>
                </div>
                <Slider
                    min={this.props.minPrice}
                    max={this.props.maxPrice}
                    step={1}
                    value={this.state.selectedPrice}
                    onChange={this.handlePriceChange}
                />
            </div>
        );
    }
}

export default PriceSlider;
