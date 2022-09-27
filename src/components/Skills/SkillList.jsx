import React from 'react'
import { SiCss3, SiDjango, SiFirebase, SiGit, SiHtml5, SiJavascript, SiPython, SiReact, SiTypescript, SiWordpress } from 'react-icons/si'
import './Skills.css'
import SkillItem from './SkillItem'


function SkillList () {
  return (
    <>
      <SkillItem name={'JavaScript'} icon={<SiJavascript />} />
      <SkillItem name={'TypeScript'} icon={<SiTypescript />} />
      <SkillItem name={'Python'} icon={<SiPython />} />
      <SkillItem name={'Django'} icon={<SiDjango />} />
      <SkillItem name={'React'} icon={<SiReact />} />
      <SkillItem name={'Wordpress'} icon={<SiWordpress />} />
      <SkillItem name={'Firebase'} icon={<SiFirebase />} />
      <SkillItem name={'Git'} icon={<SiGit />} />
      <SkillItem name={'HTML'} icon={<SiHtml5 />} />
      <SkillItem name={'CSS'} icon={<SiCss3 />} />
    </>
  )
}

export default SkillList