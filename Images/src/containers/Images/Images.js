import React, { Component } from 'react';
import axios from 'axios';

import Image from '../../components/Image/Image';
import './Image.css';

class Images extends Component {
    state = {
        images: []
    }

    componentDidMount () {
        axios.get( 'https://ceegees.com/api/v1/problem/images')
            .then( response => {
                    this.setState({images:response.data});
                });
    }

    render () {
        const images = this.state.posts.map(image => {
            return <Image disp = {image} />
        });

        return (
            <div>
                <section className="Images">
                    {images}
                </section>
            </div>
        );
    }
}

export default Images;