import React from 'react'

const Block = () => {
    return (
        <div class="container my-4 text-center">
            <div class="card text-start shadow border-0 p-5 rounded-5">
                <img class="card-img-top" src="{imageUrl}"/>
                <div class="card-body">
                    <h4 class="card-title">{carditle}</h4>
                    <p class="card-text">Body</p>
                </div>
            </div>
        </div>
    );
}

export default Block