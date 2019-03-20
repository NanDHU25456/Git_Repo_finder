import React, { Component } from 'react'

export default class Displayrepo extends Component {
    render() {
        const { repo } = this.props;
        let disp = repo.map((repo) => (
            <li key={repo.id} className='mb-2'>
                <div className="card" style={{ width: 18 + 'rem' }}>
                    <img src={repo.owner.avatar_url} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Name: {repo.name}</h5>
                        <p className="card-text">Description: {repo.description}</p>
                        <p className="card-text">Open Issues: {repo.open_issues_count}</p>
                        <p className="card-text">Forks Count: {repo.forks}</p>
                        <a href={repo.html_url} className="btn btn-primary">Repository Link</a>
                    </div>
                </div>
            </li>
        ))
        return (
            <div>
                <ul className='mt-2' style={{ listStyleType: 'none' }}>
                    {disp}
                </ul>
            </div>
        )
    }
}
