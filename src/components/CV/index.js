import React from 'react'
import { Helmet } from 'react-helmet'
import { Row, Col, Avatar, Typography, Card, Tag, Tabs } from 'antd'
import { useMediaQuery } from 'react-responsive'
import ProfilePic from '../../assets/me.png'
import './style.css'

const { Text } = Typography
const { Meta } = Card
const { TabPane } = Tabs

const Link = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
)

const CenterTitle = ({ children }) => (
  <div style={{ textAlign: 'center', verticalAlign: 'center', paddingTop: 6, backgroundColor: 'white' }}>
    <h4 style={{ marginBottom: 0, paddingBottom: 2 }}>{children}</h4>
  </div>
)

const content = {
  name: "Kevin Erdiza Yogatama",
  about: "An aspiring individual that has several experiences in web, mobile, and game development using various tools and platform",
  contact: [
    { name: 'twitter', display: '@keychera', link: 'https://twitter.com/keychera' },
    { name: 'github', display: 'keychera', link: 'https://github.com/keychera' },
    { name: 'linkedin', display: 'keychera', link: 'https://www.linkedin.com/in/keychera/' },
  ],
  projects: [
    {
      type: "group",
      title: "React Native projects",
      items: [
        {
          type: "project",
          title: "Mock MyAnimeList client mobile app",
          time: "July - August 2020",
          desc: "Kevin joined a React-native training class and built a client app for the database about anime named MyAnimeList for its final task.",
          tools: [
            "react-native",
            "expo",
            "javascript"
          ]
        },
        {
          type: "project",
          title: "Mock QA platform mobile app",
          time: "August - September 2020",
          desc: 'Kevin joined an advanced React-native training class, continuing the previous one. For its final assignment, Kevin built a mock QA platform inspired by Brainly and Stackoverflow.',
          tools: [
            "react-native",
            "javascript"
          ]
        },

      ]
    },
    {
      type: "project",
      title: "Potions for Ruby",
      subtitle: "a game made with Godot engine",
      desc: "Kevin made a game intended for a game submission event held by a YouTuber named Jonas Tyroller. \"Potion for Ruby\" is a small little story game that involves some puzzles gameplay.",
      time: "May - June 2020",
      tools: [
        "godot",
        "gdscript"
      ]
    },
    {
      type: "project",
      title: "Savant",
      subtitle: "University's final year project",
      desc: "Savant is the name of a bug localization technique, which is the main focus of Kevin's final year project at his university. Kevin attempted to build a replica of Savant's implementation, which resulted in a multi-language system that runs several tools and frameworks in different languages to make Savant works.",
      time: "August 2019 - April 2020",
      tools: [
        "perl", "java", "shellscript", "python"
      ]
    },
    {
      type: "group",
      title: "Graphic Programming projects",
      items: [
        {
          type: "project",
          title: "Opengl animation",
          time: "August - September 2020 ",
          desc: "Combining the interest in art and programming, Kevin started learning Opengl to understand what's going on behind the scene of graphical processing. So far, Kevin managed to make one animated piece that he is proud of.",
          tools: [
            "c++",
            "opengl",
            "glsl"
          ]
        },
        {
          type: "project",
          title: "2D/3D art with Blender",
          time: "September 2020",
          desc: "Having the vision to build a programmable visual, Kevin pursued learning Blender. Kevin has finished several tutorials that managed to make impressive visuals with a minimal amount of effort.",
          tools: [
            "blender"
          ]
        }
      ]
    },
    {
      type: "project",
      title: "React app CV",
      subtitle: "This CV itself",
      desc: [
        "Continuing the React-native classes, Kevin learned React to make this CV and published it on GitHub pages. This CV can also be accessed on:",
        (<Link href='https://keychera.github.io/react-playground/cv'>keychera.github.io/react-playground/cv</Link>)
      ],
      time: "September - October 2020",
      tools: [
        "react", "javascript"
      ]
    }
  ],
  education: [
    {
      name: "Institut Teknologi Bandung",
      type: "university",
      time: "2015 - 2020",
      extra: (<>graduated with 3.41 GPA</>)
    },
    {
      name: "SMANU MH Thamrin",
      type: "senior high school",
      time: "2012 - 2015"
    }
  ],
  experience: [
    {
      title: "Head of IT",
      place: "event: Pemilu HMIF",
      time: "September 2017 - December 2017",
      desc: "Kevin leads a team to build an attendance system for the event Pemilu HMIF 2018, a QA website, and an E-voting website for the voting process of Pemilu HMIF 2018."
    },
    {
      title: "Head of Gamedev community",
      place: "Inkubator IT HMIF",
      time: "Feb 2018 - Feb 2019",
      desc: "Kevin leads a community that dabbles in the art and tech of game development."
    },
    {
      title: "Marketing Staff",
      place: "Inkubator IT HMIF",
      time: "August 2016 - Feb 2019",
      desc: "Kevin works in the marketing department of Inkubator IT HMIF. In there, Kevin did activities such as advertising Inkubator IT at events, other student organizations, and clients while learning about communication and presentational skill."
    }
  ],
  skills: [
    { title: "language", items: ["javascript", "c++", "python", "java", "perl"], },
    { title: "framework / lib", items: ["react", "react-native"] },
    { title: "versioning tools", items: ["git"] },
    { title: "design tools", items: ["figma"] },
    { title: "game engine", items: ["godot", "unity"] },
    { title: "other", items: ["blender", "opengl", "glsl/shading language"] }
  ],
  extra: [
    (<>
      Have decent skills and great interest in <Text strong>drawing</Text> and <Text strong>animation</Text>.
    </>),
    (<>
      Can speak and write in <Text strong>English</Text> and has been studying <Text strong>Japanese</Text> since December 2018
    </>)
  ]
}

const toolInfo = {
  "react-native": { color: 'blue' },
  "react": { color: 'blue' },
  "expo": { color: 'cyan' },
  "javascript": { color: 'green' },
  "godot": { color: 'geekblue' },
  "c++": { color: 'gold' },
  "opengl": { color: 'gold' },
  "blender": { color: 'volcano' },
  "perl": { color: 'red' },
  "java": { color: 'orange' },
  "python": { color: 'purple' },
  "figma": { color: 'lime' },
}

const EducationCard = (props) => {
  const { name, type, time, extra } = props
  return (
    <Card size='small' style={{ fontSize: 12 }}>
      <Row>
        <Col span={18}>
          <div>
            <Text strong>{name}</Text>
          </div>
          <div>
            <Text code>{type}</Text>・{time}
          </div>
        </Col>
        <Col span={6}>
          {extra}
        </Col>
      </Row>
    </Card>
  )
}

const ExperienceCard = (props) => {
  const { title, place, time, desc } = props
  return (
    <Card size='small' style={{ fontSize: 12 }}>
      <div>
        <Text strong>{title}</Text>・
        <Text type='secondary'>{place}</Text>
      </div>
      <div>{time}</div>
      <div>{desc}</div>

    </Card>
  )
}

const Profile = ({ isBigScreen, isTablet }) => {
  return (
    <>
      <Card
        actions={content.contact.map((v, i) => {
          const { name, display, link } = v
          return (
            <Text>
              <Text strong>{name}</Text><Link href={link}>{display}</Link>
            </Text>
          )
        })}
        cover={
          !isBigScreen
            ? (
              <div style={{ textAlign: 'center', paddingTop: 24 }}>
                <Avatar src={ProfilePic} size={128} style={{ display: 'inline-block' }} />
              </div>
            )
            : (<></>)
        }
      >
        {isBigScreen
          ? (
            <Meta
              avatar={<Avatar src={ProfilePic} size={128} />}
              title={content.name}
              description={content.about}
            />
          )
          : (
            <>
              <h4>{content.name}</h4>
              <p style={{ color: '#00000073' }}>{content.about}</p>
            </>
          )
        }
      </Card>
    </>
  )
}

const Educations = () => {
  return (
    <>
      <CenterTitle>Education 📚</CenterTitle>
      <Card size='small'>
        {content.education.map((v, i) => (
          <EducationCard {...v} key={i} />
        ))}
      </Card>
    </>
  )
}

const Experiences = () => {
  return (
    <>
      <CenterTitle>Experience 🥼</CenterTitle>
      <Card size='small'>
        {content.experience.map((v, i) => (
          <ExperienceCard {...v} key={i} />
        ))}
      </Card>
    </>
  )
}

const ProjectCard = (props) => {
  const { title, type } = props
  if (type === 'project') {
    const { subtitle, desc, time, tools } = props
    return (
      <Card title={title} size='small'
        extra={<Text>{subtitle}</Text>}
      >
        <Row>
          <Col span={16}>
            <div style={{ paddingRight: 10, fontSize: 12 }}>
              <Text>{
                Array.isArray(desc)
                  ? desc.map((v, i) => (
                    <div>{v}</div>
                  ))
                  : desc
              }</Text>
            </div>
          </Col>
          <Col span={8}>
            <div style={{
              fontSize: 12,
              marginBottom: 8,
            }}>
              <Text strong>{time}</Text>
            </div>
            <div>
              {tools.map((v, i) => {
                const color = (toolInfo[v] || {}).color
                return (
                  <Tag color={color} key={i} style={{ marginBottom: 4 }}>{v} </Tag>
                )
              })}
            </div>
          </Col>
        </Row>

      </Card>
    )
  } else if (type === 'group') {
    const { items } = props
    return (
      <Card title={title} size='small'>
        {items.map((v, i) => (
          <ProjectCard {...v} key={i} />
        ))}
      </Card>
    )
  } else {
    return (<Card size='small'>undefined type</Card>)
  }
}

const Projects = ({ isMobile }) => {
  const row1 = content.projects.slice(0, 3)
  const row2 = content.projects.slice(3)
  return (
    <>
      <CenterTitle>Projects 💻</CenterTitle>
      {
        isMobile
          ? content.projects.map((v, i) => (
            <ProjectCard {...v} key={i} />
          ))
          : (
            <Card size='small'>
              <Row>
                <Col span={12}>
                  {row1.map((v, i) => (
                    <ProjectCard {...v} key={i} />
                  ))}
                </Col>
                <Col span={12}>
                  {row2.map((v, i) => (
                    <ProjectCard {...v} key={i} />
                  ))}
                </Col>
              </Row>
            </Card>
          )
      }


    </>
  )
}

const SkillCard = (props) => {
  const { title, items } = props
  return (
    <Card size='small'>
      <Text strong>{title}</Text>・
      {items.map((v, i) => {
        const color = (toolInfo[v] || {}).color
        return (
          <Tag color={color} key={i} style={{ marginBottom: 4 }}>{v} </Tag>
        )
      })}
    </Card>
  )
}

const ExtraCard = ({ value }) => (<Card size='small'>{value}</Card>)

const Skills = () => {
  return (
    <>
      <CenterTitle>Technical skills 🔧</CenterTitle>
      <Card size='small'>
        {content.skills.map((v, i) => (
          <SkillCard {...v} key={i} />
        ))}
      </Card>
      <CenterTitle>Extra skills ➕</CenterTitle>
      <Card size='small'>
        {content.extra.map((v, i) => (
          <ExtraCard value={v} key={i} />
        ))}
      </Card>
    </>
  )
}

const CV = () => {
  const isBigScreen = useMediaQuery({ minWidth: 1500 })
  const isDesktop = useMediaQuery({ minWidth: 1224 })
  const isTablet = useMediaQuery({ minWidth: 900, maxWidth: 1224 })
  const isMobile = useMediaQuery({ maxWidth: 900 })

  return (
    <div className='container'>
      <Helmet>
        <title>keychera's CV</title>
      </Helmet>
      {
        isDesktop
          ? (
            <Row align='center'>
              <Col span={6}>
                <Profile {...{ isBigScreen }} />
                <Educations />
                <Experiences />
              </Col>
              <Col span={12}>
                <Projects />
              </Col>
              <Col span={6}>
                <Skills />
              </Col>
            </Row>
          )
          : isTablet
            ? (
              <Row align='center'>
                <Col span={6}>
                  <Profile />
                  <Educations />
                  <Experiences />
                </Col>
                <Col span={18}>
                  <Projects />
                  <Skills />
                </Col>
              </Row>
            )
            : (
              <>
                <Profile />
                <Tabs defaultActiveKey="3" type='card' centered>
                  <TabPane tab="📚" key="1">
                    <Educations />
                    <Experiences />
                  </TabPane>
                  <TabPane tab="💻" key="3">
                    <Projects {...{ isMobile }} />
                  </TabPane>
                  <TabPane tab="🔧" key="4">
                    <Skills />
                  </TabPane>
                </Tabs>
              </>
            )
      }


    </div>
  )
}


export default CV
