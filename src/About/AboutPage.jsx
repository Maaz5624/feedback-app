import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'


function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this Project</h1>
        <p>this is a react app to leave feedback for a product or services</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage