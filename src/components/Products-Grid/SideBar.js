import { Badge, Button, Card, Menu, Slider , Row, Col } from 'antd';
import React from 'react';
function CenterSidbarSection() {

return (
<Row>
<Col span={12} offset={6}>
<Card
title="ACCESORIES"
bordered={false}
style={{
width: 280,
textAlign:'left',
backgroundColor:"rgb(250,250,251)"

}}
>
<Menu
mode="inline"
style={{
textAlign:'left',
backgroundColor:"rgb(250,250,251)",
}}

items={[
{key:'1',label:'Apple Car',itemIcon:2},
{key:'2',label:'Air port & wireless', itemIcon:48},
{key:'3',label:'Cables & Docks', itemIcon:14},
{key:'4',label:'Cases & Films', itemIcon:15},
{key:'5',label:'Charging Devices', itemIcon:23},
{key:'6',label:'Connected home',itemIcon: '1'},
{key:'7',label:'Headphones', itemIcon:'95'},
]}
/>
</Card>

<Card
title='PRICES'
bordered={false}
style={{
width: 280,
marginTop:"1rem",
textAlign:'left',
backgroundColor:"rgb(250,250,251)"

}}
>
<p>Renger : <span style={{paddingLeft:'30%'}}>$13.99 - $25.99</span> </p>
<Slider
range={{
draggableTrack: true,
}}
defaultValue={[20, 100]}
/>
</Card>

<Card
title="COLOR"
bordered={false}
style={{
width: 280,
marginTop:"1rem",
textAlign:'left',
backgroundColor:"rgb(250,250,251)"
}}>

<Button style={{backgroundColor:"rgb(250,250,251)",border:'none',padding:'1px'}}>
<Badge color='#006CFF' count={5} style={{color:'#006CFF'}}/>
<Badge color='#FC3E39'count={5} style={{color:'#FC3E39'}} />
<Badge color='#171717'count={5} style={{color:'#171717'}} />
<Badge color='#FFF600' count={5}style={{color:'#FFF600'}} />
<Badge color='#FF00B4' count={5}style={{color:'#FF00B4'}} />
<Badge color='#EFDFDF' count={5} style={{color:'#EFDFDF'}}/>
</Button>
</Card>

<Card
title="BRAND"
bordered={false}
style={{
width: 280,
marginTop:"1rem",
textAlign:'left',
backgroundColor:"rgb(250,250,251)" 
}}
>
<Menu
mode="inline"
style={{
textAlign:'left',
backgroundColor:"rgb(250,250,251)"
}}
items={[
{key:'1',label:'Apple',itemIcon:99},
{key:'2',label:'LG', itemIcon:99},
{key:'3',label:'Samsung', itemIcon:99},
{key:'4',label:'Siemens', itemIcon:99},
]}
/>
</Card>

<Button
size='large'
style={{
width: 280,
backgroundColor:"rgb(250,250,251)"
,border:'none'
}}>
MORE
</Button>
</Col>
</Row>

);
};
export default CenterSidbarSection;

