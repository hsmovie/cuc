import React, {Component} from 'react';
import {Form, Input} from 'semantic-ui-react'
class RsvpInputForm extends Component {
    
    render() {
        const options = [
  { key: '0', text: 'sunday', value: 'sunday' },
  { key: '1', text: 'monday', value: 'monday' },
  { key: '2', text: 'tuesday', value: 'tuesday' },
  { key: '3', text: 'wednesday', value: 'wednesday' },
  { key: '4', text: 'thursday', value: 'thursday' },
  { key: '5', text: 'friday', value: 'friday' },
  { key: '6', text: 'saturday', value: 'saturday' }  
]

        return (
            <div>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field
                            control={Input}
                            label='월'
                            placeholder='월'
                        />
                        <Form.Field
                            control={Input}
                            label='일'
                            placeholder='일'
                        />
                        <Form.Field
                            control={Input}
                            label='제목'
                            placeholder='제목'
                        />
                        <Form.Field
                            control={Input}
                            label='타임'
                            placeholder='타임'
                        />
                        <Form.Select label='요일' options={options} placeholder='요일' />
                    </Form.Group>
                    
                </Form>
            </div>
        );
    }
}

export default RsvpInputForm;