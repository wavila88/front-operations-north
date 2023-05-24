import React, { useEffect, useState } from 'react'
import { Input, HelperText, Label, Select, Textarea, Button } from '@roketid/windmill-react-ui'
import { useSelector, useDispatch } from 'react-redux'
import PageTitle from 'example/components/Typography/PageTitle'
import SectionTitle from 'example/components/Typography/SectionTitle'
import Layout from 'example/containers/Layout'
import { executeOperations, getOperationsBalance } from 'store/actions/operationsActions'
import { capitalizeFirstLetter, validateSubmitForm } from 'utils/generalUtils'
import { OperationForm } from 'utils/types'
import { FEEDBACK_NUMBER, numberValidationRegex } from 'utils/validations'


const initialState: OperationForm = {
  operation: { element: { id: 0, type: '' }, feedBack: '', isInvalid: true },
  number1: { element: 0, feedBack: '', isInvalid: true },
  number2: { element: 0, feedBack: '', isInvalid: true },
}
function Forms() {

  const dispatch = useDispatch();
  const operationsInfo = useSelector<any>(state => state.operationsReducer?.data);
  const [isValidForm, setIsValidForm] = useState<boolean>(false);
  const [operationForm, setOperationForm] = useState<OperationForm>(initialState);
  const [successMessge, setSuccessMessage] = useState<string>()
  const RANDOM_STRING = 'random_string';
  const SQUARE_ROOT = "square_root";
  console.log(operationForm);
  useEffect(() => {
    dispatch(getOperationsBalance() as any)
  }, [])

  //update submit button when form is valid
  useEffect(() => {
    //if is RANDOM_STRING not need numbers
    if (operationForm.operation.element.type === RANDOM_STRING) {
      setIsValidForm(true);
    } else if (operationForm.operation.element.type === SQUARE_ROOT) {
      const { operation, number1 } = operationForm;
      //not validated number 2
      setIsValidForm(validateSubmitForm({ operation, number1 } as any));
    } else {
      setIsValidForm(validateSubmitForm(operationForm as any));
    }
  }, [operationForm]);




  const saveOperation = async () => {
    const response = await dispatch(executeOperations(operationForm) as any);
    debugger
    setSuccessMessage(response.newBalance.operationResponse);
    setOperationForm(initialState); //clean form
    dispatch(getOperationsBalance() as any) //get to new new balance
  }

  /**
   *  methot to handle validation and set vales to state
   * @param event 
   * @param clickValue if form requires event this is the value to set 
   */
  const updatedOperationForm = (event: any, clickValue?: any) => {
    let isInvalid: boolean = false, feedBack: string = '';
    if (!clickValue) {
      isInvalid = !numberValidationRegex.test(event.target.value);
      feedBack = isInvalid ? FEEDBACK_NUMBER : '';
    }


    setOperationForm(
      {
        ...operationForm,
        [event.target.name]: {
          ...(operationForm as any)[event.target.name],
          element: clickValue ? clickValue : event.target.value, //if is a click event will get the value
          feedBack,
          isInvalid
        }
      })
  }

  const ifIsZeroThenEmptyField = (value: any) => value === 0 ? '' : value;

  return (
    <Layout>
      <PageTitle>Execute operation</PageTitle>
      <SectionTitle> <span className="ml-2">Actual Balance {(operationsInfo as any)?.balance}</span> </SectionTitle>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="mt-4">
          <Label>Operation Type</Label>
          <div className="mt-2">
            {operationsInfo && (operationsInfo as any)?.operations.map((operation: any) => (
              operation.type !== 'initial_value' && <Label radio>
                <Input type="radio" id={operation.type} onClick={(e) => updatedOperationForm(e, operation)} name="operation" />
                <span className="ml-2">{`${capitalizeFirstLetter(operation.type.replace('_', ' '))} cost: ${operation.cost}`}</span>
              </Label>

            ))}
          </div>

        </div>
        <br></br>
        {
          operationForm.operation.element.type !== RANDOM_STRING && (
            <>
              <Label>
                <span>Number 1</span>
                <Input className="mt-1" name='number1' value={ifIsZeroThenEmptyField(operationForm.number1?.element)} onChange={updatedOperationForm} valid={!operationForm.number1?.isInvalid} />
                <HelperText valid={!operationForm.number1?.isInvalid}>{operationForm.number1?.feedBack}</HelperText>
              </Label>
              {
                operationForm.operation.element.type !== SQUARE_ROOT && (
                  <Label className="mt-4">
                    <span>Number 2</span>
                    <Input className="mt-1" name='number2' value={ifIsZeroThenEmptyField(operationForm.number2?.element)} onChange={updatedOperationForm} valid={!operationForm.number2?.isInvalid} />
                    <HelperText valid={!operationForm.number2?.isInvalid}>{operationForm.number2?.feedBack}</HelperText>
                  </Label>
                )
              }
            </>
          )
        }
        <br></br>
        <Button className="mb-2" id='submit' disabled={!isValidForm} onClick={saveOperation}>
          Add Record
        </Button>
      </div>
      <SectionTitle> <span className="ml-2 success">{successMessge}</span> </SectionTitle>
    </Layout>


  )
}

export default Forms
