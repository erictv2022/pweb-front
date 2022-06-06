import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Col, Row, Spin} from 'antd';
import http from '../common/http-common.js';
import {LoadingOutlined} from '@ant-design/icons';

/**
 * Get pet findings
 * @returns {JSX.Element}
 * @constructor
 */
function PetFinding() {
    const [loading, setLoading] = React.useState(true);
    const [petFinding, setPetFinding] = React.useState(null)
    React.useEffect(() => {
        http.get('/petfindings')
            .then((response) => {
                setPetFinding(response.data)
            }).then(() => {
            setLoading(false)
        })
    }, [])

    if (loading) {
        const antIcon = <LoadingOutlined style={{fontSize: 48}} spin/>;
        return (<Spin indicator={antIcon}/>)
    } else {
        if (!petFinding) {
            return (
                <div>There is no pet finding available now.</div>
            )
        } else {
            return (
                <Row justify="space-around">
                    {
                        petFinding &&
                        petFinding.map(({id, breed, summary, location}) => (
                            <Col span={8} key={id}>
                                <Card title={breed} style={{width: 300}} bordered={true}>
                                    <p>{summary}</p>
                                    <p></p>
                                    <p>{location}</p>
                                    <Link to={`${id}`}>Details</Link>
                                </Card>
                            </Col>))
                    }
                </Row>);
        }
    }
}

export default PetFinding;
