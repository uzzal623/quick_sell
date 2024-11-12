import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Board from './components/Board/Board';
import { status as statusOptions, priorities as priorityLevels } from './utils/data';

function App() {
  const [ticketList, setTicketList] = useState([]);
  const [userList, setUserList] = useState([]);
  const savedGroup = localStorage.getItem('currentGroup');
  const savedOrder = localStorage.getItem('currentOrder');

  const [groupType, setGroupType] = useState(savedGroup || 'status');
  const [orderType, setOrderType] = useState(savedOrder || 'priority');

  const handleGroupUpdate = (selectedGroup) => {
    setGroupType(selectedGroup);
    localStorage.setItem("currentGroup", selectedGroup);
  };

  const handleOrderUpdate = (selectedOrder) => {
    setOrderType(selectedOrder);
    localStorage.setItem("currentOrder", selectedOrder);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const responseData = await response.json();
      setTicketList(responseData.tickets);
      setUserList(responseData.users);
    } catch (error) {
      console.error("Data fetch failed: ", error);
    }
  };

  return (
    <div className="App scroll-box">
      <Navbar group={groupType} order={orderType} onGroupChange={handleGroupUpdate} onOrderChange={handleOrderUpdate} />
      <div className='boards-container'>
        <div className='app-boards'>
          {groupType === 'status' && statusOptions.map((option, index) => (
            <Board order={orderType} data={option} key={index} tickets={ticketList} users={userList} group={groupType} />
          ))}
          {groupType === 'user' && userList.map((user) => (
            <Board order={orderType} data={user} key={user.id} tickets={ticketList} users={userList} group={groupType} userId={user?.id} />
          ))}
          {groupType === 'priority' && priorityLevels.map((option, index) => (
            <Board order={orderType} data={option} level={index} key={index} tickets={ticketList} users={userList} group={groupType} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
