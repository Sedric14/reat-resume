import React from 'react';
import data from '../assets/data';

const Skills = () => {
  const tgs = data[2].tags as string[];
  const tgs1 = data[2].tags1 as string[];
  const tgs2 = data[2].tags2 as string[];
  return (
    <div>
      <h2>SKILLS</h2>
      <div className="tags">
        <div>
          {tgs.map((item, ind) => (
            <div className={`tag0${ind} tag`} id={`tag${ind}`}>
              {item}
            </div>
          ))}
        </div>
        <div>
          {tgs1.map((item, ind) => (
            <div className={`tag1${ind} tag`} id={`tag${ind}`}>
              {item}
            </div>
          ))}
        </div>
        <div>
          {tgs2.map((item, ind) => (
            <div className={`tag2${ind} tag`} id={`tag${ind}`}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Skills;
