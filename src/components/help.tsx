import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './help.module.scss';
import fillari from '../media/fillari192.png';
import { Box } from '@mui/system';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { GrApple, GrAndroid } from 'react-icons/gr';
import { Translator, useLocalization } from 'localization-react';
import { ITranslation } from 'localization-react/dist/translator';
import translationsJson from '../localization/translations.json';

// https://natomasunified.org/kb/add-website-to-mobile-device-home-screen/

const a11yProps = (index:number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: ITabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      { value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const Help: React.FC = () => {
  const { language } = useLocalization();
  const locales: ITranslation = translationsJson;
  const translator = new Translator(locales, 'help', language);

  const [tabValue, setTabValue] = useState<number>(0);

  const handleChange = 
    (event: React.SyntheticEvent<Element, Event>, newValue: number) => {
      setTabValue(newValue)
    };

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <img src={fillari} alt='fillari' />
        <h1>Omat kaupunkifillarit</h1>
      </div>

      <div className={styles.content} >
        <Box /*sx={{borderBottom: 1, borderColor: 'divider' }}*/>
          <Tabs value={tabValue} onChange={handleChange} centered>
            <Tab icon={<GrAndroid size={30} />} label='Android' {...a11yProps(0)} />
            <Tab icon={<GrApple size={30} />} label='iPad tai iPhone' {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={tabValue} index={0}>
            <ol>
              <li dangerouslySetInnerHTML={{ __html: translator.getLocaleString('part_1_chrome')}} />
              <li>{translator.getLocaleString('part_2_chrome')}</li>
              <li dangerouslySetInnerHTML={{ __html: translator.getLocaleString('part_3_chrome')}} />
            </ol>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <ol>
              <li dangerouslySetInnerHTML={{ __html: translator.getLocaleString('part_1_safari')}} />
              <li>{translator.getLocaleString('part_2_safari')}</li>
              <li dangerouslySetInnerHTML={{ __html: translator.getLocaleString('part_3_safari')}} />
            </ol>
          </TabPanel>
        </Box>
      </div>

      <Link className={styles.back} to='/'>{translator.getLocaleString('exit_guide')}</Link>
    </div>
  )
}

export default Help;
