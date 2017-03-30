import React, {Component} from 'react';
import {Form, Input, Button} from 'semantic-ui-react'
class RsvpInputForm extends Component {
    
    render() {
        

        return (
            <div className="rsvp-input-wrapper">
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field
                            control={Input}
                            label='월'
                            placeholder='월'
                            onChange={this.props.handleMonth}
                        />
                        <Form.Field
                            control={Input}
                            label='일'
                            placeholder='일'
                            onChange={this.props.handleDate}
                        />
                        <Form.Field
                            control={Input}
                            label='제목'
                            placeholder='제목'
                            onChange={this.props.handleTitle}
                        />
                        <Form.Field
                            control={Input}
                            label='타임'
                            placeholder='타임'
                            onChange={this.props.handleTime}
                        />
                        <Form.Select label='요일' control={Input} placeholder='요일' onChange={this.props.handleDay}/>
                        <Form.Field control={Button} onClick={this.props.handleSubmit}>Submit</Form.Field>
                    </Form.Group>
                    
                </Form>
            </div>
        );
    }
}

export default RsvpInputForm;