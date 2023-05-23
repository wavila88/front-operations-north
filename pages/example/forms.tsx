import React from 'react'

import { Input, HelperText, Label, Select, Textarea, Button } from '@roketid/windmill-react-ui'
import CTA from 'example/components/CTA'
import PageTitle from 'example/components/Typography/PageTitle'
import SectionTitle from 'example/components/Typography/SectionTitle'

import Layout from 'example/containers/Layout'
import { MailIcon } from 'icons'

function Forms() {
  return (
    <Layout>
      <PageTitle>Execute operation</PageTitle>

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
