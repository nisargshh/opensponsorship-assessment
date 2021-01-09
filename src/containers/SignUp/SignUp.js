import * as React from 'react'
import BasicInfo from '../BasicInfo'
import AboutInfo from '../AboutInfo'
import SubmitInfo from '../SubmitInfo'
import axios from 'axios';
import { useHistory } from "react-router-dom";


import { Steps, message, Row, Col } from 'antd';

const { Step } = Steps;

const steps = [
   {
      title: 'Basic Info',
   },
   {
      title: 'About Info',
   },
   {
      title: 'Submit',
   },
];

const SignUp = () => {
   const [current, setCurrent] = React.useState(0);
   const [player, setPlayer] = React.useState({
      name: '',
      sports: [],
      gender: '',
      dob: null,
      description: '',
      team: '',
      location: '',
   });
   let history = useHistory();

   const next = () => {
      setCurrent(current + 1);
   };

   const prev = () => {
      setCurrent(current - 1);
   };

   const onFinishBasicInfo = (values) => {
      let user = player
      user.name = values.user.name
      user.sports = values.user.sports
      user.gender = values.user.gender
      user.dob = values.user.dob
      console.log(values);
      next();
   };

   const onFinishAboutInfo = (values) => {
      let user = player
      user.description = values.user.description
      user.team = values.user.team
      user.location = values.user.location
      setPlayer(user)
      console.log(player);
      next();
   };

   const submit = () => {
      console.log(player)
      axios.post('http://localhost:3001/player', player)
         .then(res => {
            message.success('Success!');
            history.push("/");
         })
         .catch(function (error) {
            console.log(error)
            message.error('Error');
         });

   }

   return (
      <>
         <Row justify="center" align="top">
            <Col span={16}>
               <Steps current={current}>
                  {steps.map(item => (
                     <Step key={item.title} title={item.title} />
                  ))}
               </Steps>
            </Col>
         </Row>
         <div className="steps-action">
            {current === 0 && (
               <BasicInfo onFinish={onFinishBasicInfo} initialValue={player}></BasicInfo>
            )}
            {current === 1 && (
               <AboutInfo onFinish={onFinishAboutInfo} back={prev} initialValue={player}></AboutInfo>
            )}
            {current === 2 && (
               <SubmitInfo onFinish={submit} back={prev} player={player}></SubmitInfo>
            )}
         </div>
      </>
   );
};

export default SignUp;