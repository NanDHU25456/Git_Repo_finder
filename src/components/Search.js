import React, { Component } from 'react'
import axios from "axios";
import Displayrepo from './Displayrepo';
import { keys } from "../keys";
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            repos: []
        }
    }

    componentWillMount() {
        axios.defaults.baseURL = 'https://api.github.com/';
    }

    handleChange = (e) => {
        this.setState({ name: e.target.value })
    }
    submit = () => {
        const { name } = this.state;
        axios.get('/search/repositories', {
            params: {
                q: name
            },
            data: {
                client_id: keys.CLIENT_ID,
                client_secret: keys.CLIENT_SECRET
            }
        })
            .then((response) => {
                this.setState({ repos: response.data.items })
                // console.log(this.state.repos.items[0]);
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div class="container">

                <div class="searchContainer">
                    <h1>Search Github Users</h1>
                    <p class="lead">Enter a username to fetch a users profile info and repos</p>
                    <input
                        type="text"
                        id="searchUser"
                        class="form-control"
                        placeholder="Github Username..."
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="button"
                        value="submit"
                        onClick={this.submit}
                        className='mt-3'
                    />
                </div>
                <Displayrepo repo={this.state.repos} />
            </div>
        )
    }
}
