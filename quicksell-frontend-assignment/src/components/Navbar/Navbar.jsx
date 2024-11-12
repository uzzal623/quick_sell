import './Navbar.css';
import { MdOutlineTune } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from 'react';

const groupOptions = [
    { label: "Status", value: "status" },
    { label: "User", value: "user" },
    { label: "Priority", value: "priority" }
];

const orderOptions = [
    { label: "Priority", value: "priority" },
    { label: "Title", value: "title" }
];

const Navbar = ({ group, order, onGroupChange, onOrderChange }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState(group);
    const [selectedOrder, setSelectedOrder] = useState(order);

    const handleGroupChange = (e) => {
        setSelectedGroup(e.target.value);
        onGroupChange(e.target.value);
    };

    const handleOrderChange = (e) => {
        setSelectedOrder(e.target.value);
        onOrderChange(e.target.value);
    };

    return (
        <div className='navbar'>
            <div
                className='expand-button'
                onClick={() => setIsExpanded(prev => !prev)}
            >
                <MdOutlineTune />
                <span>Display</span>
                <FaAngleDown />
            </div>
            {isExpanded && (
                <div className="dropdown-menu">
                    <div className='display-options'>
                        <p>Grouping</p>
                        <select
                            name="group"
                            id="groupBy"
                            defaultValue={group}
                            onChange={handleGroupChange}
                            className="select-dropdown"
                        >
                            {groupOptions.map((opt, index) => (
                                <option key={index} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className='display-options'>
                        <p>Ordering</p>
                        <select
                            name="order"
                            id="orderBy"
                            defaultValue={order}
                            onChange={handleOrderChange}
                            className="select-dropdown"
                        >
                            {orderOptions.map((opt, index) => (
                                <option key={index} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar
