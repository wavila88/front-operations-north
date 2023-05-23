import React, { useEffect } from 'react'
import { Input, HelperText, Label, Select, Textarea, Button } from '@roketid/windmill-react-ui'
import { useSelector, useDispatch } from 'react-redux'
import PageTitle from 'example/components/Typography/PageTitle'
import Layout from 'example/containers/Layout'
import { getOperationsBalance } from 'store/actions/operationsActions'

function Forms() {

  const dispatch = useDispatch();
  const operationsInfo = useSelector<any>(state => state.operationsReducer?.data)


  useEffect(() => {
    dispatch(getOperationsBalance() as any)
  }, [])

  return (
    <Layout>
      <PageTitle>Execute operation</PageTitle>
      <Label> <span className="ml-2">Balance {(operationsInfo as any)?.balance}</span> </Label>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="mt-4">
          <Label>Operation Type</Label>
          <div className="mt-2">
            <Label radio>
              <Input type="radio" value="add" name="accountType" />
              <span className="ml-2">Add</span>
            </Label>
            <Label className="ml-6" radio>
              <Input type="radio" name="accountType" />
              <span className="ml-2">Substract</span>
            </Label>
            <Label className="ml-6" radio>
              <Input type="radio" name="accountType" />
              <span className="ml-2">Divide</span>
            </Label>
            <Label className="ml-6" radio>
              <Input type="radio" name="accountType" />
              <span className="ml-2">Multiply</span>
            </Label>
            <Label className="ml-6" radio>
              <Input type="radio" name="accountType" />
              <span className="ml-2">Square root</span>
            </Label>
            <Label className="ml-6" radio>
              <Input type="radio" name="accountType" />
              <span className="ml-2">Random number</span>
            </Label>
          </div>
          <Label>Cost Operation: 20</Label>

        </div>
        <br></br>
        <Label>
          <span>Numero 1</span>
          <Input className="mt-1" valid={false} placeholder="Jane Doe" />
          <HelperText valid={false}>Your password is too short.</HelperText>
        </Label>

        <Label className="mt-4">
          <span>Numero 2</span>
          <Input className="mt-1" valid={true} placeholder="Jane Doe" />
          <HelperText valid={true}>Your password is strong.</HelperText>
        </Label>
        <br></br>
        <Button className="mb-2" >
          Add Record
        </Button>
      </div>
    </Layout>


  )
}

export default Forms
