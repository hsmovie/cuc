import React, {Component} from 'react';
import {
    Button,
    Form,
    Input,
    TextArea
} from 'semantic-ui-react'
class CardInputForm extends Component {
    

    

        render() {
            
            return (
                <div className="card-input-form-wrapper">
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field control={Input} label="카드제목" placeholder='카드제목' onChange={this.props.handleTitle}/>
                            <Form.Field control={Input} label='링크' placeholder='링크' onChange={this.props.handleLink}/>
                            <Form.Field control={Input} label='링크' placeholder='링크' onChange={this.props.handleImageLink}/>
                        </Form.Group>
                        <Form.Field
                            control={TextArea}
                            label='설명'
                            placeholder='설명'/>
                        <Form.Field control={Button} onClick={this.props.handleSubmit}>Submit</Form.Field>
                    </Form>

                </div>
            );
        }
    }


    export default CardInputForm;