import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Avatar, Badge, Button, Card, Divider, Rate, Space, Typography } from 'antd'
import Meta from 'antd/es/card/Meta'
import Link from 'antd/es/typography/Link'
import React, { Component } from 'react'

export class ListCard extends Component {
render() {
return (

<Card hoverable 
span={12} offset={6}
style={{textAlign:'left',marginBottom:"1rem" ,width:'100%'}}>
<Meta
avatar={
<Badge.Ribbon placement="start" text="HOT" color="red">
<Avatar 
shape='square'
size={{xs:140,sm:240 ,md:240, lg:240, xl:240, xxl:240}}
src='https://www.pcgalore.com/public/assets/images/pcgalore-macbook-pro-13-a2159-i5-1-4ghz-8gb-128gb-ssd-2019--192389717-16938.webp'

/>
</Badge.Ribbon>
}
title='Beats Solo2 On Ear Headphones - Black'
description={<>
<Rate disabled defaultValue={4} />
<Typography.Text style={{padding:'10px', color:"rgb(0,0,0,.2)",fontWeight:'bold'}}>0 reviews</Typography.Text>    
<Link style={{padding:'10px', fontWeight:'500'}}>Submit a review</Link>
<Divider></Divider>
<Typography.Text
type="secondary"
style={{ fontSize: "18px",color:'red' }}
>
$499
</Typography.Text>

<Typography.Text
delete
type="secondary"
style={{ fontSize: "18px",padding:'10px', color:"rgb(0,0,0,.3)"}}
>
$599
</Typography.Text>
<Typography.Paragraph>
{"Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ..."}

</Typography.Paragraph>
<Space size="large">
<Button
ghost
type="primary"
size="large"
icon={<ShoppingCartOutlined/>}
style={{ backgroundColor: "rgb(51,160,255,.2)",border:'none'}}
>Add To Cart</Button>
<Button
ghost
type="primary"
size="large"
icon={<HeartOutlined/>}
style={{ backgroundColor: "rgb(51,160,255,.2)",border:'none'}}
></Button>
</Space>
</>
}
/>
</Card>
)
}
}

export default ListCard
