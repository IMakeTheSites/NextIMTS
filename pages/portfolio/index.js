import { BorderAll } from '@mui/icons-material';
import { Box } from '@mui/material';
import Cover from '../../components/Cover';
import WorkItem from '../../components/WorkItem';
import Work1 from '../../public/portfolio1.png';
import Work2 from '../../public/portfolio2.png';
import Work3 from '../../public/portfolio3.png';
import Work4 from '../../public/portfolio4.png';
import classes from '../../styles/Portfolio.module.scss';

const workItems = [
  {
    img: Work1,
    heading: 'Worklete',
    job: 'React-Native Developer',
    content:
      'Mark worked with the development and design teams at Worklete to build and refine their mobile application built with React-Native.',
  },
  {
    img: Work2,
    heading: 'Rolfson Oil',
    job: 'React-Native Developer',
    content:
      'Our team built a React Native mobile app for Rolfson Oil which allows drivers to print and scan tickets and push them to the server. We integrated REST APIs with Axios and Redux-Thunk and used several React-Native plugins.',
  },
  {
    img: Work3,
    heading: 'Lob',
    job: 'Frontend Developer',
    content:
      "Mark helped LOB revise their site's design using a CMS called Webflow, which the marketing and development teams required in order to collaborate. We used Marketo to manage the forms, CSS and JavaScript to control the appearance and functionality.",
  },
  {
    img: Work4,
    heading: 'Datatape/Archetape',
    job: 'React-Native Developer',
    content:
      'Our full stack team built the web application and React Native app from scratch and published the first version of the project.',
  },
];

function PortfolioPage() {
  return (
    <div className={classes.Work}>
      <Box
        sx={{
          padding: 3,
          maxWidth: 1300,
          margin: 0,
          // auto,
          boxShadow: BorderAll,
        }}
      >
        <Cover title="Portfolio" />
      </Box>

      <div className={classes.Work__list}>
        {workItems.map((work, e) => (
          <WorkItem
            key={e}
            img={work.img}
            heading={work.heading}
            job={work.job}
            content={work.content}
          />
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;
