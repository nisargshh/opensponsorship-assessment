import { Row, Col, Form, Input, Button, Layout } from 'antd';
const { Footer } = Layout;

const layout = {
   labelCol: {
      span: 8,
   },
   wrapperCol: {
      span: 8,
   },
};
const validateMessages = {
   required: '${label} is required!',
};


function AboutInfo(props) {

   return (
      <div className="about-info">
         < Form {...layout} id="form" name="nest-messages" onFinish={props.onFinish} validateMessages={validateMessages} >
            <Form.Item
               name={['user', 'description']}
               label="Description"
               rules={[
                  {
                     required: true,
                  },
               ]}
               initialValue={props.initialValue.description}
            >
               <Input />
            </Form.Item>
            <Form.Item
               name={['user', 'team']}
               label="Team"
               rules={[
                  {
                     required: true,
                  },
               ]}
               initialValue={props.initialValue.team}
            >
               <Input />
            </Form.Item>
            <Form.Item
               name={['user', 'location']}
               label="Location"
               rules={[
                  {
                     required: true,
                  },
               ]}
               initialValue={props.initialValue.location}
            >
               <Input />
            </Form.Item>
         </Form >
         <Footer style={{ position: "fixed", bottom: "1px", width: '100%', backgroundColor: 'transparent' }}>
            <Row justify="end">
               <Col span={4}>
                  <Button onClick={props.back}>Back</Button>
                  <Button form="form" type="primary" htmlType="submit">Next</Button>
               </Col>
            </Row>
         </Footer>
      </div >
   );
}

export default AboutInfo;
