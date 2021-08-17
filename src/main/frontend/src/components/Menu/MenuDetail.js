import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import { DialogTitle } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

const MenuDetail = (props) => {

    const { open, setOpen } = props
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} maxWidth="md">
                <DialogTitle>조근팀 설정</DialogTitle>
                <TableContainer >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox />
                                </TableCell>
                                <TableCell>팀명</TableCell>
                                <TableCell>팀코드</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                           
                        </TableBody>
                    </Table>
                </TableContainer>
            </Dialog>
        </div>
    )
}

export default MenuDetail;
