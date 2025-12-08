import type { ProjectData } from '../../types/project';
import faramove from './faramove.json';
import eigenda from './eigenda.json';
import pinata from './pinata.json';
import faramovecampaign from './faramovecampaign.json';
import faramovelaunch from './faramovelaunch.json';
import adi from './adi.json';
import rootstock from './rootstock.json';
import mezo from './mezo.json';
import eigendaxmantle from './eigendaxmantle.json';
import opsin from './opsin.json';
import dako from './dako.json';
import norebase from './norebase.json';
import mintle from './mintle.json';
import pinataaudio from './pinataaudio.json';
import franklintempleton from './franklintempleton.json';

const projects: ProjectData[] = [
  faramovelaunch as ProjectData,
  opsin as ProjectData,
  faramove as ProjectData,
  pinata as ProjectData,
  rootstock as ProjectData,
  mezo as ProjectData,
  eigendaxmantle as ProjectData,
  eigenda as ProjectData,
  mintle as ProjectData,
  franklintempleton as ProjectData,
  faramovecampaign as ProjectData,
  adi as ProjectData,
  dako as ProjectData,
  norebase as ProjectData,
  pinataaudio as ProjectData
];

export default projects;
