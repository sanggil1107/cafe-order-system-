import React, { useState, useEffect } from 'react';
import BoardService from '../service_backend/BoardService';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Paging from './Paging';
import Board from './Board';


const BoardMain = () => {
    
    const [ boards, setBoards ] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ boardsPerPage, setBoardsPerPage ] = useState(10);

    const indexOfLast = currentPage * boardsPerPage;
    const indexofFirst = indexOfLast - boardsPerPage;

    const currentBoard = () => {
        console.log(boards);
        let reverse_board = [...boards].reverse();
        //let reverse_board = [...boards].reverse();
        var currentBoards = 0 ;
        currentBoards = reverse_board.slice(indexofFirst, indexOfLast);
        console.log(boards);
        console.log(reverse_board);
        console.log(currentBoards);

        return currentBoards;
    }
    useEffect(() => {
        BoardService.getBoardlist().then(res => {
            setBoards(res.data); 
        });

    }, [])
    
    return (
        <>
            
            <Board boards={currentBoard()}></Board>
            <Paging page={currentPage} count={boards.length} setPage={setCurrentPage}></Paging>
{/* 
            <Router>
                <Switch>
                    <Route exact path="/board/view/:id" component={BoardDetail}></Route>
                    <Route exact path="/board/write" component={BoardWrite}></Route>
                </Switch>
            </Router> */}

        </>
    );
}

export default BoardMain;