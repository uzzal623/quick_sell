import './Card.css';
import { FaCircle } from "react-icons/fa";
import UserIcon from '../UserIcon/UserIcon';

const Card = ({ ticket, user, icon, statusIcon, statusColor, bgColor }) => {
    const userInitials = user?.name.split(' ').map(word => word.charAt(0)).join('');

    return (
        <div className='card-container'>
            <div className='card-header'>
                <p className='card-id'>{ticket?.id}</p>
                {user && <UserIcon intials={userInitials} available={user?.available} bgColor={bgColor} />}
            </div>
            <div className='card-details'>
                <span style={{ color: statusColor }}>{statusIcon}</span>
                <p>{ticket?.title}</p>
            </div>
            <div className='card-footer'>
                {icon && <div>{icon}</div>}
                <div className="card-tag">
                    <FaCircle />
                    {ticket?.tag.map((tag, index) => (
                        <p key={index}>{tag}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;
