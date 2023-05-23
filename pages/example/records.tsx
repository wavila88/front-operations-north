import React, { useState, useEffect } from 'react'

import PageTitle from 'example/components/Typography/PageTitle'
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,

  Button,
  Pagination,
  Input
} from '@roketid/windmill-react-ui'
import { TrashIcon, ArrowUpIcon } from 'icons'
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import response, { ITableData } from 'utils/demo/tableData'
import Layout from 'example/containers/Layout'
import { EventTargetType, TypeSort, TypeTableRecords } from 'utils/types'
import { filterObjects } from 'utils/records.util'
import { deleteRecord, getRecords } from 'store/actions/recordActions'
import styles from '../../styles/records.module.css';



function Tables() {
  const dispatch = useDispatch();
  const userId = useSelector<any>(state => state.UtilsReducer.userData?.user?.id);
  const records = useSelector<any>(state => state.recordsReducer?.data?.records);
  const totalResults = useSelector<any>(state => state.recordsReducer?.data?.recordsCount);

  const handleSearch = (event: EventTargetType) => {


    const searchTerm = event.target.value;
    searchTerm.length > 2 ? setDisplayRecords(filterObjects(displayRecords as any, event.target.value)) : setDisplayRecords(records);
  };

  const [displayRecords, setDisplayRecords] = useState(records);
  const [pageTable2, setPageTable2] = useState(1);
  const [sort, setSort] = useState<TypeSort>('ASC')


  // pagination setup
  const resultsPerPage = 15


  // pagination change control
  async function onPageChangeTable2(p: number) {
    setPageTable2(p);

    await dispatch(getRecords(
      {
        id: userId as any,
        order: sort,
        pageNumber: p,
        pageSize: resultsPerPage
      }) as any)
  }

  useEffect(() => {
    getRecordsForTable();
  }, []);

  useEffect(() => { setDisplayRecords(records) }, [records]);

  useEffect(() => { getRecordsForTable() }, [sort])



  const getRecordsForTable = async () => {
    await dispatch(getRecords(
      {
        id: userId as any,
        order: sort,
        pageNumber: pageTable2,
        pageSize: resultsPerPage
      }) as any)
  };

  const removeRecord = async (recordId: number) => {
    const response = await dispatch(deleteRecord(recordId) as any);
    if (response === true) {
      getRecordsForTable();
    };
  }

  const setNewSort = async () => setSort(sort === 'ASC' ? 'DESC' : 'ASC')

  return (
    <Layout>
      <PageTitle>Records list</PageTitle>
      <div className={styles.containerOptions}>
        <div style={{ maxWidth: '80%', float: 'left' }}>
          <Input type="text" onChange={handleSearch} placeholder="Search..." />
        </div>
        <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <Button className="mb-2" onClick={() => Router.push('/example/forms')}>
            Add Record


            <span className="ml-2" aria-hidden="true">
              +
            </span>
          </Button>
        </div>

      </div>
      <br></br>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Operation Type</TableCell>
              <TableCell>operation Response</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>User Balance</TableCell>
              <TableCell style={{ cursor: 'pointer' }} onClick={() => setNewSort()}>Created date {sort}</TableCell>
              <TableCell>Actions</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {displayRecords && (displayRecords as any).length > 0 && (displayRecords as any).map((record, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <p className="font-semibold">{record.operation.type}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{record.operation_response}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{record.amount}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{record.user_balance}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{record.createdAt.replace('T', (' ')).replace('.000Z', '')}</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button layout="link" size="small" aria-label="Delete" onClick={() => removeRecord(record.id)}>
                      <TrashIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults as any}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable2}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
    </Layout>
  )
}

export default Tables
