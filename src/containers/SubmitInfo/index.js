import { Row, Col, Button, Layout, Table } from 'antd';

const { Footer } = Layout;

const columns = [
   {
      title: 'Input',
      dataIndex: 'input',
      key: 'input',
   },
   {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
   },
];

const data = [
];

function SubmitInfo(props) {
   for (var key in props.player) {
      if (props.player.hasOwnProperty(key)) {
         let dataEntry = {
            input: key,
            value: props.player[key]
         }
         if (Array.isArray(props.player[key])) {
            let string = ""
            for (let i = 0; i < props.player[key].length - 1; i++) {
               string += props.player[key][i] + ", "
            }
            string += props.player[key][props.player[key].length - 1]
            dataEntry.value = string
         }
         data.push(dataEntry)
      }
   }
   return (
      <div className="submit-info">
         <Table columns={columns} dataSource={data} />
         <Footer style={{ position: "fixed", bottom: "1px", width: '100%', backgroundColor: 'transparent' }}>
            <Row justify="end">
               <Col span={4}>
                  <Button onClick={props.back}>Back</Button>
                  <Button onClick={props.onFinish}>Submit</Button>
               </Col>
            </Row>

         </Footer>
      </div >
   );
}

export default SubmitInfo;
