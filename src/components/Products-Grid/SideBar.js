import { Badge, Button, Card, Menu, Radio, Slider, Timeline } from 'antd';
import React, { useState } from 'react';
function CenterSidbarSection() {
const [current, setCurrent] = useState('2');
const [value, setValue] = useState(1);
const onChange = (e) => {
console.log('radio checked', e.target.value);
setValue(e.target.value);
};

return (
<div>

<Card
title="ACCESORIES"
bordered={false}
style={{
width: 300,
textAlign:'left',
backgroundColor:"rgb(250,250,251)"

}}
>
<Menu
mode="inline"
style={{
width: 256,
textAlign:'left',
backgroundColor:"rgb(250,250,251)",
}}
selectedKeys={[current]}
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
width: 300,
marginTop:"1rem",
textAlign:'left',
backgroundColor:"rgb(250,250,251)"

}}
>
<p>Renger : $13.99 - $25.99</p>
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
width: 300,
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
width: 300,
marginTop:"1rem",
textAlign:'left',
backgroundColor:"rgb(250,250,251)" 
}}
>
<Menu
mode="inline"
style={{
width: 256,
textAlign:'left',
backgroundColor:"rgb(250,250,251)"
}}
selectedKeys={[current]}
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
width:300,
backgroundColor:"rgb(250,250,251)"
,border:'none'
}}>
MORE
</Button>
</div>
);
};
export default CenterSidbarSection;

