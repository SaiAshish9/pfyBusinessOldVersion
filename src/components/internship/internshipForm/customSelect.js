import React, { useState, useEffect } from "react";
import { ArrowLeftOutlined, CloseOutlined } from "@ant-design/icons";
const skills = {
  "General Skills": [
    "Adaptibility",
    "Analytical skills",
    "Communication skill",
    "Conflict resolution",
    "Entrepreneurial",
    "Leadership",
    "Logical reasoning",
    "Negotiation skills",
    "Organizational skills",
    "Presentation skill",
    "Public speaking",
    "Quantitative aptitude",
    "Research",
    "Team player",
    "Time management",
  ],
  "Technical Skills": [
    "AWS",
    "Android dev",
    "Angular JS",
    "Bootstrap",
    "C",
    "C#",
    "C++",
    "CSS",
    "Data Science",
    "DevOps",
    "Docker",
    "Embedded systems",
    "Ethical hacking",
    "Express JS",
    "Go",
    "HTML",
    "Internet Of Things",
    "Java",
    "JavaScript",
    "Joomla",
    "MongoDB",
    "MySQL",
    "Networking",
    "Node JS",
    "PHP",
    "Python",
    "R",
    "React",
    "JS",
    "React Native",
    "RestAPI",
    "Robotics",
    "Ruby on rails",
    "Typescript",
    "Vue JS",
    "Wordpress",
    "iOS",
    "dev",
  ],
  Finance: [
    "Accounting",
    "Chartered account trainee",
    "Corporate finance",
    "Corporate treasury",
    "Financial analysis",
    "Forensic accounting",
    "Fund raising",
    "Intuit QuickBooks Pro",
    "Investment banking",
    "Quickbooks",
    "Risk assessment",
    "Stock market",
    "Tally",
    "Taxation",
  ],
  Marketing: [
    "Advertising",
    "Digital marketing",
    "Growth hacking",
    "Market analysis",
    "Marketing",
    "PR skills",
    "Performance advertising",
    "Publicity",
    "SEM",
    "SEO",
    "Sales",
    "Salesforce",
    "Social media advertising",
    "Social media influencer",
  ],
  "Office Suite": ["Documents", "Presentations", "Spreadsheets"],
  Hospitality: ["Catering", "Cooking", "Event Management", "Hotel Management"],
  Legal: [
    "Bankruptcy Law",
    "Civil Litigation",
    "Corporate Law",
    "Criminal Law",
    "Employment Law",
    "Estate Planning Law",
    "Intellectual Property Law",
    "Tax",
  ],
  Creative: [
    "Acting",
    "Adobe After Effects",
    "Adobe Premiere",
    "Blogging",
    "Content Planning",
    "Content Writing",
    "Copy Writing",
    "Imovie",
    "Journalism",
    "Music",
    "Photography",
    "Video",
    "Editing",
    "Video making",
    "Videoscribe",
  ],
  Design: [
    "Adobe Animate",
    "Adobe Flash",
    "Adobe Illustrator",
    "Adobe InDesign",
    "Adobe Photoshop",
    "Adobe XD",
    "Animation",
    "Autocad",
    "Autodesk 3ds max",
    "Corel Draw",
    "Final Cut Pro",
    "Flinto",
    "Graphic Design",
    "Inkscape",
    "Invision Studio",
    "Photo Editing",
    "Prototyping",
    "Sketch",
    "UI/UX",
    "Zeplin",
  ],
  Other: [
    "Architecture",
    "Data entry",
    "HR",
    "Import and export",
    "Interior design",
    "Operations management",
    "Strategy",
  ],
};

function CustomSelect(props) {
  const [showCategories, setShowCategories] = useState(true);
  const [current, setCurrent] = useState();
  const [selected,setSelected] = useState([]);

  useEffect(() => {
    props.setSkills(selected)
  }, [selected])
  const handleCategory = (category) => {
    setShowCategories(false);
    setCurrent(category);
  };
//   console.log(skills)

  const addSelected = (select) => {
      const newData = new Set([...selected,select])
      setSelected([...newData])
      console.log(selected)
  }

  const renderCategories = () => {
    return Object.keys(skills).map((category) => {
      return (
        <div
          onClick={() => handleCategory(category)}
          className="custom-select__tags fadeIn"
        >
          {category}
        </div>
      );
    });
  };
  const renderSkills = () => {
    return skills[current].map((skill) => {
      return <div onClick={() => addSelected(skill)} className="custom-select__tags fadeIn">{skill}</div>;
    });
  };
  const renderContent = () => {
    if (showCategories) {
      return renderCategories();
    }
    const handleBack = () => {
        setShowCategories(true);
    } 
    return (
      <>
        <div className="custom-select__heading">
          <div>{current}</div>
          <div className="custom-select__back" onClick={handleBack}>
            <ArrowLeftOutlined />
          </div>
        </div>
        {renderSkills()}
      </>
    );
  };
  const handleDelete = (index) => {
    selected.splice(index,1);
    setSelected([...selected]);
  }
  const renderSelected = () => {
      //let selectedData = [];
      return selected.map((val,index) => {
        return (
            <div className="custom-select__tags fadeIn">
                <span className="custom-select__tags__icon" onClick={() => handleDelete(index)}><CloseOutlined /></span>

                <span>{val}</span>
            </div>
        );
      })
     // return selectedData;
  }
  return (
    <div className="custom-select">
      <div className="custom-select__input">{renderSelected()}</div>
      <div className="custom-select__list-view fadeIn">{renderContent()}</div>
    </div>
  );
}

export default CustomSelect;
