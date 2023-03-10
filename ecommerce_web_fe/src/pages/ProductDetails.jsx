import { MDBBadge, MDBCol, MDBRow, MDBTypography } from 'mdb-react-ui-kit'
import React from 'react'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'

export default function ProductDetails() {
    return (
        <div>
            <Navbar />
            <MDBRow id='overview' className='my-4'>
                <MDBCol md='6'>
                    <img src='https://i.ibb.co/qJSRGVK/6-tomato-png-image.png' className='img-fluid w-75 my-3' alt='...' />
                    <img src='https://post.healthline.com/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb-732x549.jpg' className='img-fluid w-75 my-3' alt='...' />
                </MDBCol>
                <MDBCol md='6' className='align-items-start text-center text-md-start'>
                    <h1>Ngũ Cốc Dinh Dưỡng Granola</h1>
                    <div id='rating' className='d-inline-block'>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <MDBTypography className='d-inline-block ms-3 text-info'>183 đánh giá </MDBTypography>
                        <MDBTypography className='d-inline-block mx-3'>|</MDBTypography>
                        <MDBTypography className='d-inline-block text-info'>1.023 lượt mua </MDBTypography>
                    </div>
                    <div id='price'>
                        <MDBTypography className='d-inline-block text-secondary fs-3' tag='s'>50.000đ</MDBTypography>
                        <h1 className='d-inline-block text-danger mx-3'>
                            <strong>30.000đ</strong>
                        </h1>
                        <MDBBadge className='ms-2' color='danger'>10% GIẢM</MDBBadge>
                    </div>
                </MDBCol>
            </MDBRow>
            <div id='detail-info'>

            </div>
            <div id='comments'>

            </div>
            <div id='recommend-list'>

            </div>
            <Footer />
        </div>
    )
}
