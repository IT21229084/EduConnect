import React from 'react'
import AdminNavbar from './AdminNavbar'
import PendingCourses from './PendingCourses';
import AllCourses from '../../pages/AllCourses';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import ViewAllCourse from './ViewAllCourse';
function CourseDetailsadmin() {

  const data = [
    {
      label: "ViewCourse",
      value: "AllCourses",
      desc: <ViewAllCourse />
    },
    {
      label: "PendingCourses",
      value: "Progress",
      desc: <PendingCourses />
    },
  ];
  return (
    <div>
      <AdminNavbar />
      <div>
        <div className='mt-10 mb-10'>
          <h1 className='text-4xl font-bold text-center'>Courses Infomation</h1>
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
    </div>
  )
}

export default CourseDetailsadmin