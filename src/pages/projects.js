import React from 'react'
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import data from '../../API.json';
import Card from '../components/Projects/Card';

const projects = () => {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="grid grid-cols-12 grid-rows-2 bg-zinc-800">

        <Nav />

        <div className="p-0 row-start-1 row-span-2 col-start-2 col-span-10 flex justify-center">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4 grid-rows-6">
            {data.map((project) => <Card key={project.id} current={project} />)}
          </div>
        </div>

        <Footer />

      </div>
    </div>
  )
}

export default projects;