import React from 'react';
import { Col, Row } from 'antd';
import { SmileOutlined } from '@ant-design/icons';


function ServicesPage() {

    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center', paddingBottom:'50px' }}>
                <h2>  Nuestros Servicios  <SmileOutlined />  </h2>
            </div>


            {/* Filter  */}

            <Row gutter={[16, 16]}>
                <Col lg={12} xs={24} >
                    <h2>Primero</h2>
                    <p>lorem lipsus</p>
                </Col>
                <Col lg={12} xs={24}>
                    <h2>Segundo</h2>
                    <p>lorem lipsus</p>
                </Col>
            </Row>

            <br /><br />

        </div>
    )
}

export default ServicesPage
