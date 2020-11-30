import React from 'react';
import { styled, withTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Widgets from '@material-ui/icons/Widgets';
import FolderOpen from '@material-ui/icons/FolderOpen';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import PeopleAlt from '@material-ui/icons/PeopleAlt';
import TrendingUp from '@material-ui/icons/TrendingUp';
import Settings from '@material-ui/icons/Settings';



const BoxWrapper = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
}))

const TabsComponent = ({ theme }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    [Widgets, "Структура"],
    [FolderOpen, "Документы"],
    [ErrorOutline, "Замечания"],
    [PeopleAlt, "Участники"],
    [TrendingUp, "Аналитика"],
    [Settings, "Настройки"],
  ]

  return (
    <BoxWrapper>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        {tabs.map(([Icon, label], i) => (
          <Tab key={`tabs-${i}`} icon={<Icon style={{ margin: `0 ${theme.spacing(1)} 0 0` }} />} label={label} />
        ))}
      </Tabs>
    </BoxWrapper>
  );
}

export default withTheme(TabsComponent)
