import React from 'react';
import './styles/StoryRow.css';
import Story from './Story';

function StoryRow() {
    return (
        <div className='storyRow'>
            <Story image='https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80' profileSrc='https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' title='name 1' />
            <Story image='https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' profileSrc='https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' title='name 2' />
            <Story image='https://images.unsplash.com/photo-1455218873509-8097305ee378?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' profileSrc='https://images.unsplash.com/photo-1568265112889-c9d3fc50a281?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWFsc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' title='name 3' />
            <Story image='https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' profileSrc='https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' title='name 4' />
            <Story image='https://images.unsplash.com/photo-1517811409552-396f829138a2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fG5hdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' profileSrc='https://images.unsplash.com/photo-1551946581-f7a62cd2f00b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1hbHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' title='name 5' />
        </div>
    )
}

export default StoryRow
