import React from 'react';

const SingleUser = ({user}) => {
    const {name, id} = user || {};
    return (
        <div className="col-4 gy-4">
            <div className="card shadow p-3 mb-5 bg-body rounded">
                <div className="card-body">
                    <h5 className="card-title">Card Title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </p>
                    <a href="#" class="card-link">Card link</a>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;