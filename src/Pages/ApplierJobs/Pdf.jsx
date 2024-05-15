import React from 'react';
import { Page, Text, View,Image, Document, StyleSheet } from '@react-pdf/renderer';


// eslint-disable-next-line react/prop-types
const Pdf = ({loggedInUserEmail, pictureUrl, jobTitle,jobDescription,salaryRange,applicationDeadline}) => {
    console.log(jobTitle);
    
//    const {pictureUrl, jobTitle, jobDescription, salaryRange, applicationDeadline, loggedInUserEmail}= apply;
    
    // eslint-disable-next-line react/prop-types

    return (
       <Document >
        <Page>
            <Image className='w-48 ml-10' src={pictureUrl}/>
        <div className='text-center mx-auto mb-5'>
                <Text className='text-xl font-semibold text-center mt-5'>
                    {jobTitle}
                    </Text>
                
            </div>
            <div className=' mx-auto mb-5 w-1/2 border rounded-xl text-center px-10 border-zinc-700'>
                <Text className='text-2xl font-bold text-center'>Description:</Text>
                <hr className='w-44 border mx-auto' />
                <Text className='text-xl font-semibold text-left mt-5 '>
                    {
                        jobDescription
                    }
                </Text>
                <hr className=' border-solid border-black mx-auto mb-6' />

                <Text className='text-lg text-left font-medium '>
                    salary : {salaryRange}
                </Text>
                <Text className='text-lg font-medium text-left '>
                    Deadline : {applicationDeadline}
                </Text>
                
                <Text className='text-lg font-medium text-left mb-5 w-full '>
                    Posted by : {loggedInUserEmail}
                </Text>

               
            </div>

        </Page>
       </Document>
    );
};

export default Pdf;