import React from 'react'
import Layout from '../../components/Layout'

export default function Statistics() {
	const topbarData = { text1: 'User management Statictics', text2: 'Statistics', text3: 'Account', text4: 'Asgar ali', noCalender: false };

    return (
       <Layout topbarData = {topbarData}></Layout>
    )
}
