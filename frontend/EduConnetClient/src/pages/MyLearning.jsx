import React from 'react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Feedback from '../components/Feedback';
import AllCourse from '../pages/AllCourses.jsx'
import MyCourses from '../components/MyCourses.jsx';
import UserProfile from './UserProfile.jsx';
import ProgressCourses from '../components/ProgressCourses.jsx';
import CompleteCourse from '../components/CompleteCourse.jsx'

function MyLearning() {

  const data = [
    {
      label: "MyCourses",
      value: "Mycourse",
      desc: <MyCourses/>
    },
    {
      label: "InProgress",
      value: "Progress",
      desc: <ProgressCourses/>
    },

    {
      label: "Complete",
      value: "complete",
      desc: <CompleteCourse/>
    },

    {
      label: "WishList",
      value: "angular",
      desc: <UserProfile/>,
    }
  ];
  return (

    <div>
      <div className='mt-10 mb-10'>
        <h1 className='text-4xl font-bold text-center'>My Learning</h1>
      </div>
      <Tabs id="custom-animation" value="html">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
    </div>
    
  );
}

export default MyLearning