import { Row, Col, Form, Input, Button, Layout, Select, DatePicker } from 'antd';
import sports from './sports.json'
const { Footer } = Layout;

const { Option } = Select;

const sportArr = sports.sport
const children = [sports.sport];
for (let i = 0; i < sportArr.length; i++) {
   children.push(<Option key={sportArr[i]}>{sportArr[i]}</Option>);
}

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


function BasicInfo(props) {

   return (
      <div className="basic-info">
         < Form {...layout} id="form" name="nest-messages" onFinish={props.onFinish} validateMessages={validateMessages} >
            <Form.Item
               name={['user', 'name']}
               label="Name"
               rules={[
                  {
                     required: true,
                  },
               ]}
               initialValue={props.initialValue.name}
            >
               <Input />
            </Form.Item>
            <Form.Item
               name={['user', 'sports']}
               label="Sports"
               rules={[
                  {
                     required: true,
                  },
               ]}
               initialValue={props.initialValue.sports}
            >
               <Select
                  mode="multiple"
                  allowClear
                  style={{ width: '100%' }}
                  placeholder="Please select"
               >
                  {children}
               </Select>
            </Form.Item>
            <Form.Item
               name={['user', 'gender']}
               label="Gender"
               rules={[
                  {
                     required: true,
                  },
               ]}
               initialValue={props.initialValue.gender}
            >
               <Select>
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
               </Select>
            </Form.Item>
            <Form.Item name={['user', 'dob']} label="Date of Birth" rules={[
               {
                  required: true,
               },
            ]}
               initialValue={props.initialValue.dob}
            >
               <DatePicker />
            </Form.Item>
         </Form >
         <Footer style={{ position: "fixed", bottom: "1px", width: '100%', backgroundColor: 'transparent' }}>
            <Row justify="end">
               <Col span={4}>
                  <Button form="form" type="primary" htmlType="submit">Next</Button>
               </Col>
            </Row>
         </Footer>
      </div >
   );
}

export default BasicInfo;
