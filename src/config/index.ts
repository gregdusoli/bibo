import { DefaultTheme } from "styled-components";
import {IconType} from 'react-icons';
import { GiBrazilFlag, GiUsaFlag } from "react-icons/gi";

interface ILanguage {
  name: string,
  flag: IconType
}

interface ISettings {
  appName: string,
  language: ILanguage,
  theme?: DefaultTheme
}

const Languages = [
  { name: 'pt', flag: GiBrazilFlag },
  { name: 'en', flag: GiUsaFlag }
];

let Settings: ISettings = {
  appName: 'BiBo',
  language: Languages.filter((e) => e.name === 'pt')[0],
};

const Config = {
  get: (prop: string): any => {
    return Object.entries(Settings)
      // eslint-disable-next-line array-callback-return
      .map(([key, value]) => {
          if (key === prop) {
            const storagedValue = localStorage.getItem('language');
            return (storagedValue) ? JSON.parse(storagedValue) : value;
          }
        })[0];
  },

  set: (prop: string, content: any) => {
    Object.entries(Settings)
      .forEach(([key, _]) => {
        if (key === prop) {
          Settings = { ...Settings, ...{ [prop]: content } };
        }
      });
  },

  settings: () => console.log(Settings)
}

export default Config;
