import React from 'react';
import {Table} from 'react-bootstrap';
import { connect, useSelector, useDispatch } from 'react-redux';

function Cart(props) {

    let state = useSelector((state) => state )
    let dispatch = useDispatch()

    return (
        <div>
              <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                </thead>
                <tbody>
                    {
                        state.reducer.map((a,i)=>{
                            return (
                                <tr key={i}>
                                    <td>{ i }</td>
                                    <td>{ a.name }</td>
                                    <td>{ a.quan }</td>
                                    <td><button onClick={()=>{ dispatch({ type : '수량증가', 데이터 : i}) }}>+</button>
                                    <button onClick={()=>{ dispatch({ type : '수량감소', 데이터 : i }) }}>-</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            { props.alert열렸니 === true
            ? (<div className="my-alert2">
                <p>지금 구매하시면 20% 할인</p>
                <button onClick={ ()=>{ dispatch({type : 'alert닫기'}) }}>닫기</button>
               </div> )
            : null 
            }
        </div>
    )
}


// function state를props화(state) {
//     return {
//         state : state.reducer,
//         alert열렸니 : state.reducer2
//     }
// }

// export default connect(state를props화)(Cart)
export default Cart;