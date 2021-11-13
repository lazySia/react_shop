import React, {useEffect, useState, useContext} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import './Detail.scss';
import {재고context} from './App.js';

let 박스 = styled.div`
  padding : 20px;
`;

let 제목 = styled.h4`
  font-size : 25px;
`;

/*
useEffect의 예전 문법
class Datail2 extend React.Component {
  // Detail2 컴포넌트가 Mount(등장) 되었을 때 실행할 코드
  componentDidMount() {

  }
  // Detail2 컴포넌트가 Unmount(사라짐) 되었을 때 실행할 코드
  componentWillUnmount() {

  }
}
*/


function Detail(props) {
  let [alert, alert변경] = useState(true);
  // let [inputData, inputData변경] = useState('');

  let [누른탭, 누른탭변경] = useState(0);

  let 재고 = useContext(재고context);

  useEffect(()=>{ 
    let 타이머 = setTimeout(()=>{ alert변경(false)}, 2000);
    return ()=>{clearTimeout(타이머)}
  }, [])

    let { id } = useParams(); // 사용자가 입력한 URL 파라미터들
    let history = useHistory();
    let 찾은상품 = props.shoes.find(x => x.id == id);

    return (
      <div className="container">
        <박스> 
          <제목 className="red">Detail</제목>
        </박스>

        {/* { inputData }
       <input onChange={ (e)=>{ inputData변경(e.target.value) }}/> */}

      {
        alert === true 
        ? (<div className="my-alert my-alert2">
        <p>재고가 얼마 남지 않았습니다.</p>
      </div>)
        : null
      }
        

        <div className="row">
          <div className="col-md-6">
            <img src={"https://codingapple1.github.io/shop/shoes" + (찾은상품.id+1) + ".jpg"} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}</p>
            <Info 재고={props.재고}></Info>
            <button className="btn btn-danger" onClick={()=>{props.재고변경([9,10,11])}}>주문하기</button> 
            <button className="btn btn-danger" onClick={()=>{ history.goBack(); }}>뒤로가기</button> 
          </div>
        </div>

        <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link eventKey="link-0">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Option 2</Nav.Link>
          </Nav.Item>
        </Nav>

        <div></div>
        <div></div>
        <div></div>

      </div> 
    )
}

function Info(props) {
  return (
    <p>재고 : {props.재고[0]}
    </p>
  )
}

export default Detail;