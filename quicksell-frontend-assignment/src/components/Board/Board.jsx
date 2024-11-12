import './Board.css';
import { IoMdAdd } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import Card from '../Card/Card';
import UserIcon from '../UserIcon/UserIcon';
import { generateIntials, getRandomColor, priorities, statusIcons } from '../../utils/data';

const Board = ({ tickets, users, group, level, userId, order, data }) => {
    let filteredItems = [];

    if (group === 'status') {
        filteredItems = tickets.filter(ticket => ticket.status.toLowerCase() === data.title.toLowerCase());
    } else if (group === 'priority') {
        filteredItems = tickets.filter(ticket => ticket.priority === level);
    } else {
        filteredItems = tickets.filter(ticket => ticket.userId === userId);
    }

    if (order === 'priority') {
        filteredItems = filteredItems.slice().sort((a, b) => b.priority - a.priority);
    } else {
        filteredItems = filteredItems.slice().sort((a, b) => a.title.localeCompare(b.title));
    }

    const renderCards = () => filteredItems.map((ticket) => {
        const assignedUser = users?.find(user => user.id === ticket.userId);
        return (
            <Card
                ticket={ticket}
                key={ticket.id}
                user={assignedUser}
                group={group}
                icon={group === 'priority' ? priorities[ticket.priority].icon : ''}
                statusIcon={statusIcons[ticket?.status.toLowerCase()]?.icon || ''}
                statusColor={statusIcons[ticket?.status.toLowerCase()]?.color || ''}
                bgColor={getRandomColor()}
            />
        );
    });

    return (
        <div className='board-wrapper'>
            <div className='board-header'>
                <div className="board-header-title">
                    {group === 'user' && <span><UserIcon intials={generateIntials(data?.name)} available={data?.available} bgColor={getRandomColor()} /></span>}
                    {group !== 'user' && <span style={{ color: data.color }}>{data.icon}</span>}
                    <p>{data.title}</p>
                    <span>{filteredItems.length}</span>
                </div>
                <div className="board-header-options">
                    <IoMdAdd />
                    <SlOptions />
                </div>
            </div>
            <div className="board-content">
                {renderCards()}
            </div>
        </div>
    );
}

export default Board;
