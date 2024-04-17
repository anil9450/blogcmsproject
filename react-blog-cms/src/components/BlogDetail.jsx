import React from 'react'

const BlogDetail = () => {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between m-3'>
                <h4>Blogs Title</h4>
                <a href='/' className='btn btn-dark'>back to blogs</a>
            </div>
            <div className='row m-1'>
                <div className='col-md-12'>
                    <p>Anil 16 April 2024</p>
                </div>

                <div className='card border-0 shadow-lg mt-1 m-3'>
                    <img src="https://placehold.co/600x400" className='card-img-top mt-3' />
                    <div className='card-body'>
                        <h2 className='h5'>Heading 1</h2>
                        <p>React is a declarative, efficient, and flexible JavaScript library for building
                            user interfaces. It lets you compose complex UIs from small and isolated pieces of
                            code called “components”. We'll get to the funny XML-like tags soon. We use components
                            to tell React what we want to see on the screen.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail
