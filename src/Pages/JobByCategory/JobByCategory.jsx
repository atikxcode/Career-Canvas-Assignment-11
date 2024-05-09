import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const JobByCategory = () => {
  return (
    <div className="my-10 text-white">
      <Tabs>
            <TabList>
                <Tab style={{backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px'}}>Tab 1</Tab>
                <Tab style={{backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px'}}>Tab 2</Tab>
                {/* Add more tabs as needed */}
            </TabList>

            <TabPanel>
                <h2 style={{color:'#4CAF50'}}>Content for Tab 1</h2>
                <p>This is the content of tab 1.</p>
            </TabPanel>
            <TabPanel>
                <h2>Content for Tab 2</h2>
                <p>This is the content of tab 2.</p>
            </TabPanel>
            {/* Add more TabPanel as needed */}
        </Tabs>
    </div>
  );
};

export default JobByCategory;