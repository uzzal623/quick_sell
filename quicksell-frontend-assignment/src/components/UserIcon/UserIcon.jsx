import './UserIcon.css';
import { FaCircle } from 'react-icons/fa6';

const UserIcon = ({ intials, available, bgColor }) => {
    return (
        <div className='user-container'>
            <div className='icon-circle' style={{ backgroundColor: bgColor }}>
                {intials}
            </div>
            <div className='status-indicator' style={available ? { color: "#50B053" } : {}}>
                <FaCircle />
            </div>
        </div>
    );
}

export default UserIcon;
