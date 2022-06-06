import React from 'react';
import http from '../common/http-common.js'
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import NotFound from './notfound'

/**
 * Get pet findings details
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Detailfinding(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [petFinding, setPetFinding] = React.useState(null)
  React.useEffect(()=> {
    http.get(`/petfindings/${id}`)
    .then((response)=>{
      setPetFinding(response.data)
    })
  }, []) 
  
  if(!petFinding){
    return (
      <NotFound />
    )
  } else { 
    console.log(petFinding)
    return(
        <>    
          <h1>{petFinding.breed}</h1>
          <p>{petFinding.summary}</p>
          <Button type="primary" icon={<RollbackOutlined />} onClick={()=>navigate(-1)} />
        </>
      );
  }
}
export default Detailfinding;
