import { Table, Button, Layout, Tag } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
   Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import Moment from 'react-moment';

const columns = [
   {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
   },
   {
      title: 'Sports',
      dataIndex: 'sports',
      key: 'sports',
      render: tags => (
         <>
            {tags.map(tag => (
               <Tag color="blue" key={tag}>
                  {tag}
               </Tag>
            ))}
         </>
      ),
   },
   {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
   },
   {
      title: 'DOB',
      dataIndex: 'dob',
      key: 'dob',
   },
   {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
   },
   {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
   },
   {
      title: 'Team',
      dataIndex: 'team',
      key: 'team',
   },
];

function PlayerList(props) {
   let history = useHistory();
   let data = [];

   const [players, setPlayers] = useState([]);

   useEffect(() => {
      axios.get('http://localhost:8080/playerlist')
         .then(function (res) {
            // handle success
            for (var key in res.data) {
               let player = res.data[key]
               if (res.data.hasOwnProperty(key)) {
                  let dobdata = <Moment>{player.dob}</Moment>
                  let dataEntry = {
                     id: player._id,
                     name: player.name,
                     sports: player.sports,
                     gender: player.gender,
                     dob: dobdata,
                     location: player.location,
                     description: player.description,
                     team: player.team,
                  }
                  data.push(dataEntry)
               }
            }
            setPlayers(data)
         })
         .catch(function (err) {
            // handle error
            console.log(err);
         })

   }, []);


   return (
      <div className="player-list">
         <Button><Link to="/newprofile">Add New Player</Link></Button>
         <Table columns={columns} dataSource={[...players]} onRow={(r) => ({
            onClick: () => history.push("/" + r.id)
         })} />

      </div >
   );
}

export default PlayerList;
