// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import {HomeTwoTone} from '@ant-design/icons';

const Header = () => {
    const [current, setCurrent] = useState('h');

    const handleClick = (e) => {
        setCurrent(e.key);
    };

    const menuItems = [
        {key: 'h', icon: <HomeTwoTone/>, title: <Link to="/">Home</Link>}
    ];

    return (
        <div>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                {menuItems.map(item => (
                    <Menu.Item key={item.key} icon={item.icon} style={item.style}>
                        {item.title}
                    </Menu.Item>
                ))}
            </Menu>
        </div>
    );
};

export default Header;